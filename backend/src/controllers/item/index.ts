import { Request, Response } from "express";
import itemModel from "../../model/item.model";
import { MongoError } from "mongodb";
import responseBuilder, { ApiCode } from "../../common/response-builder";
import handleMongoError from "../../common/mongo-errors";

export default class ItemController {
	constructor() {}

	public handleCreate(req: Request, res: Response) {
		const body = req.body;
		const newItemRequest = new itemModel({
			name: body.name,
			description: body.description,
			photo: body.photo,
			quantity: body.quantity,
			branch: body.branch,
			price: body.price
		} as any);

		newItemRequest.save((err: MongoError) => {
			if (err) {
				handleMongoError(err, res);
			} else {
				responseBuilder.buildSuccess(res, "Successfully added item");
			}
		});
	}

	public async handleReadSingle(req: Request, res: Response) {
		try {
			const allItems = await itemModel.findOne({
				_id: req.params.itemId
			});
			responseBuilder.buildSuccess(res, allItems);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound);
		}
	}

	public async handleReadAll(req: Request, res: Response) {
		const allItems = await itemModel.find({});
		responseBuilder.buildSuccess(res, allItems);
	}

	public handleUpdate(req: Request, res: Response) {
		console.log("Not implemented");
		res.sendStatus(500);
	}

	public handleDestroy(req: Request, res: Response) {
		console.log("Not implemented");
		res.sendStatus(500);
	}
}
