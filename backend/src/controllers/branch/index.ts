import { Request, Response } from "express";
import BranchModel, { Branch } from "../../model/branch.model";
import responseBuilder, { ApiCode } from "../../common/response-builder";
import handleMongoError from "../../common/mongo-errors";

export default class BranchController {
	constructor() {}

	public handleCreate(req: Request, res: Response) {
		const { name, address } = req.body;
		// @ts-ignore
		const branch = new BranchModel({ name, address });
		branch.save((err: Error) => {
			if (err) {
				handleMongoError(err, res);
			} else {
				responseBuilder.buildSuccess(res, "Branch successfully created");
			}
		});
	}

	public async handGet(req: Request, res: Response) {
		try {
			const result: Branch = ((await BranchModel.findOne({
				_id: req.params.branchId
			})) as unknown) as Branch;
			responseBuilder.buildSuccess(res, result);
		} catch (err) {
			handleMongoError(err, res);
		}
	}

	public async handGetAll(req: Request, res: Response) {
		try {
			const result: Branch = ((await BranchModel.find(
				{}
			)) as unknown) as Branch;
			responseBuilder.buildSuccess(res, result);
		} catch (err) {
			handleMongoError(err, res);
		}
	}

	public async handleUpdate(req: Request, res: Response) {
		try {
			const id = req.params.branchId;
			const response: {
				n: number;
				nModified: number;
				ok: number;
			} = await BranchModel.update({ _id: id }, req.body);

			responseBuilder.buildSuccess(res, {
				msg: `Successfully updated item with id: ${id}`,
				updatedStats: response
			});
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}

	public async handleDelete(req: Request, res: Response) {
		try {
			const id = req.params.branchId;
			const response: {
				n?: number;
				deletedCount?: number;
				ok?: number;
			} = await BranchModel.deleteOne({ _id: id }, req.body);

			if (response.deletedCount !== undefined) {

				if (response.deletedCount > 0) {
					responseBuilder.buildSuccess(res, {
						msg: `Successfully deleted item with id: ${id}`,
						deletedStats: response
					});
				} else {
					responseBuilder.buildSuccess(res, {
						msg: `Item with id: ${id} already deleted`,
						deletedStats: response
					});
				}
			}
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}
}
