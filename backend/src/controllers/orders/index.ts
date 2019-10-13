import { Request, Response } from "express";
import OrderModel from "../../model/orders.model";
import { MongoError } from "mongodb";
import responseBuilder, { ApiCode } from "../../common/response-builder";
import handleMongoError from "../../common/mongo-errors";

export default class OrderController {
	public async create(req: Request, res: Response) {
		new OrderModel(req.body).save((err: MongoError) => {
			if (err) {
				handleMongoError(err, res);
			} else {
				responseBuilder.buildSuccess(res, "Successfully added order");
			}
		});
	}

	public async getSingle(req: Request, res: Response) {
		try {
			const item = await OrderModel.findOne({
				_id: req.params.orderId
			});
			responseBuilder.buildSuccess(res, item);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		}
	}

	public async getUserSingle(req: Request, res: Response) {
		const userId = req.params.userId;
		const orderId = req.params.orderId;
		try {
			const item = await OrderModel.findOne({
				$and: [{ userId: userId }, { _id: orderId }]
			});
			if (item !== null) {
				responseBuilder.buildSuccess(res, item);
			}
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		}
	}

	public async getUserAll(req: Request, res: Response) {
		try {
			const item = await OrderModel.find({
				userId: req.params.userId
			}).lean();
			responseBuilder.buildSuccess(res, item);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		}
	}

	public async getBranchAll(req: Request, res: Response) {
		try {
			const item = await OrderModel.find({
				"items.branchId": req.params.branchId
			});
			responseBuilder.buildSuccess(res, item);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		}
	}

	public async getAll(req: Request, res: Response) {
		try {
			const allItems = await OrderModel.find({}).lean();
			console.log(allItems);
			
			responseBuilder.buildSuccess(res, allItems);
		} catch (err) {
			handleMongoError(err, res);
		}
	}

	public async update(req: Request, res: Response) {
		try {
			const response = await OrderModel.update(
				{ _id: req.params.orderId },
				req.body
			);

			if (response !== null) {
				responseBuilder.buildSuccess(res, {
					msg: `Successfully updated item with id: ${req.params.orderId}`,
					updatedStats: response
				});
			}
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		}
	}

	public async delete(req: Request, res: Response) {
		try {
			const id = req.params.orderId;
			const response = await OrderModel.deleteOne({ _id: id }, req.body);
			if (response !== null) {
				responseBuilder.buildSuccess(res, {
					msg: `Successfully deleted item with id: ${id}`,
					deletedStats: response
				});
			}
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		}
	}
}
