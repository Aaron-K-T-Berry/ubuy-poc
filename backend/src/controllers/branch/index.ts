import { Request, Response } from "express";
import Branch from "../../model/branch.model";
import responseBuilder from "../../common/response-builder"

export default class BranchController {
	constructor() {}

	public handleGetBranch(req: Request, res: Response) {
		res.status(500).send("Not implemented");
	}

	public handleCreateBranch(req: Request, res: Response) {
		const { id, name, address } = req.body;
		// @ts-ignore
		const branch = new Branch({ id, name, address });
		branch.save((err: Error) => {
			if (err) {
				responseBuilder.buildError(res, err, "Error creating new branch");
			} else {
				responseBuilder.buildSuccess(res, "Branch successfully created");
			}
		});
	}
}
