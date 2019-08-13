import { Request } from "express";
import { requestToItem } from "../mappers/item.mapper";
import { Item } from "../models/item.model";
import MongoDbClient from "../components/mongo-client";
import { ObjectID } from "mongodb";

export default class ItemManager {
	constructor(private dbClient: MongoDbClient) {}

	public async addItem(req: Request): Promise<ObjectID> {
		// Validate the request

		// Build object
		const addItemRequest: Item = requestToItem(req);

		// Submit to db
		return await this.dbClient.addNewItem(addItemRequest);
  }

  public async getAllItems(): Promise<any[]> {
   return await this.dbClient.getAllItems();
  }
}
