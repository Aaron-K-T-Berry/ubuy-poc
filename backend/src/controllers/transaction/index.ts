import { Request, Response } from "express-serve-static-core";
import responseBuilder, { ApiCode } from "../../common/response-builder";
import {
	create,
	getAll,
	getAllUser,
	remove,
	getSingleUser
} from "../../model/transcations/transact.client";
import { Transaction } from "../../model/transcations/transact.model";
import jwtHelper from "../../common/jwt-helper";
import * as OrderClient from "../../model/order/orders.client";
import * as TransactClient from "../../model/transcations/transact.client";
import * as CartClient from "../../model/cart/cart.client";

export default class TransactionController {
	constructor() {}

	public async create(req: Request, res: Response) {
		try {
			const newTransaction = {
				...req.body,
				createdTime: new Date()
			} as Transaction;
			const response = await create(newTransaction);
			responseBuilder.buildSuccess(res, {
				msg: `Successfully created transaction with: ${response._id}`
			});
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}

	public async getAll(req: Request, res: Response) {
		try {
			const response = await getAll();
			res.send(response);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}

	public async getAllUsers(req: Request, res: Response) {
		try {
			const userId = req.params.userId;
			const response = await getAllUser(userId);
			res.send(response);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}

	public async getSingleUser(req: Request, res: Response) {
		const userId = req.params.userId;
		const transactionId = req.params.transactionId;

		try {
			const response = await getSingleUser(userId, transactionId);
			res.send(response);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}

	public async remove(req: Request, res: Response) {
		const userId = req.params.userId;
		const transactionId = req.params.transactionId;

		try {
			const response = await remove(userId, transactionId);
			responseBuilder.buildSuccess(res, {
				msg: `Successfully deleted transaction with id: ${transactionId}`,
				deletedStats: response
			});
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}

	public async process(req: Request, res: Response) {
		const userId = jwtHelper.getUserId(req.cookies.token);
		const transactDetails = req.body.transactDetails;
		const cart = req.body.cart;

		try {
			// Create a order for user
			const order = {
				userId: userId,
				items: cart.items.map((item: any) => {
					return {
						itemId: item._id,
						quantity: "1",
						branchId: item.branch[0]
					};
				}),
				billingAddress: transactDetails.billingAddress,
				deliveryAddress: transactDetails.deliveryAddress,
				orderTime: new Date().toUTCString(),
				status: "packing"
			};

			const orderResponse = await OrderClient.createOrder(order);
			const orderId = orderResponse._id;

			// Create a transaction record for user
			const transaction = {
				userId: userId,
				orderId: orderId,
				paymentDetails: transactDetails.paymentDetails,
				createdTime: new Date()
			};

			const transactResponse = await TransactClient.create(
				transaction as Transaction
			);
			const transactId = transactResponse._id;

			// Empty users cart
			if (transactId !== undefined && orderId !== undefined) {
				const cartResponse = await CartClient.deleteCart(userId);
				console.log(cartResponse);
				responseBuilder.buildSuccess(res, {
					msg: `Successfully created transaction`,
					userId,
					orderId,
					transactId
				});
			} else {
				responseBuilder.buildError(
					res,
					new Error("Unknown transaction failure")
				);
			}
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}
}
