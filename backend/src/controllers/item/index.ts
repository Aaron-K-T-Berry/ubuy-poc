import ItemManager from "./services/ItemManager";
import { Request, Response } from "express";
import MongoDbClient from "./components/mongo-client";

export default class ItemController {
	private itemManager!: ItemManager;
	private mongoDbClient!: MongoDbClient;

	constructor() {}

	public async handleGetAllItems(res: Response) {
		const result = await this.getItemManagerService().getAllItems();
		res.send(result).status(200);
	}

	public async handleAddItem(req: Request, res: Response) {
		const objId = await this.getItemManagerService().addItem(req);
		res
			.send({
				status: "Successfully created item",
				ObjectId: objId
			})
			.status(200);
	}

	private getItemManagerService(): ItemManager {
		if (this.itemManager === undefined) {
			this.itemManager = new ItemManager(this.getMongoDbClient());
		}
		return this.itemManager;
	}

	private getMongoDbClient(): MongoDbClient {
		if (this.mongoDbClient === undefined) {
			this.mongoDbClient = new MongoDbClient();
		}
		return this.mongoDbClient;
	}
}
