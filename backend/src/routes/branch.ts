import { Express, Request, Response } from "express";
import BranchController from "../controllers/branch";

export const BranchRoute = (api: Express, controller: BranchController) => {
	api
		.route("/branch")
		.get(async (req: Request, res: Response) => {
			await controller.handleGetBranch(req, res);
		})
		.post(async (req: Request, res: Response) => {
			await controller.handleCreateBranch(req, res);
		});
};
