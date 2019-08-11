import UserController from "../controllers/user/index";
import { Express, Request, Response } from "express";

export default class UserRoute {
	private userController: UserController;

	constructor(userController: UserController, app: Express) {
		this.userController = userController;

		app.route("/api/user").get((req: any, res: any) => {
			res.send("it worked");
		});

		app
			.route("/api/user/register")
			.post(async (req: Request, res: Response) => {
				res.send(await this.userController.handleRegistration(req));
			});
	}
}
