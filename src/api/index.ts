import UserRoute from "./routes/user.route";
import UserController from "./controllers/user";
import { Express } from "express";

export default class API {
	private userController: UserController;

	constructor(app: Express) {
		// Load all routes
		new UserRoute(this.getUserController(), app);
	}

	private getUserController(): UserController {
		if (this.userController === undefined) {
			this.userController = new UserController();
		}
		return this.userController;
	}
}
