import { Express, Request, Response } from "express";
import withAuth from "../middlewear/auth-middlewear";
import UserController, { AuthRequest } from "../controllers/users";

export const UserRoute = (api: Express, controller: UserController) => {
	// Get all account information
	api.route("/user").get(withAuth, async (req: Request, res: Response) => {
		res.send(await controller.handleGetUser(req as AuthRequest, res));
	});
};
