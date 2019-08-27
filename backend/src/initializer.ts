import { Express } from "express";
import AuthController from "./controllers/users";

export default class ApiInitializer {
	private authController!: AuthController;

	constructor(private app: Express) {}

	public getApp(): Express {
		return this.app;
  }

	public getAuthController(): any {
		if (this.authController === undefined) {
			this.authController = new AuthController();
		}
		return this.authController;
	}
}
