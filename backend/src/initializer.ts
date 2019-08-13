import { Express } from "express";
import ItemController from "./controllers/item";

export default class ApiInitializer {
	private itemController!: ItemController;

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
}
