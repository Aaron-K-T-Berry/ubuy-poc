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

export default class TransactionController {
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
}
