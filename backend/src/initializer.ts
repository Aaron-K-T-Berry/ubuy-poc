import { Express } from "express";
import ItemController from "./controllers/item";
import AuthController from "./controllers/users";

export default class ApiInitializer {
	private itemController!: ItemController;
	private authController!: AuthController;

	constructor(private app: Express) {}

	public getApp(): Express {
		return this.app;
	}

	public getItemController(): ItemController {
		if (this.itemController === undefined) {
			this.itemController = new ItemController();
		}
		return this.itemController;
	}

	public getAuthController(): any {
		if (this.authController === undefined) {
			this.authController = new AuthController();
		}
		return this.authController;
	}
}
