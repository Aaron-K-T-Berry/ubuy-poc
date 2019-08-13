import { Item } from "../models/item.model";
import {
	Db,
	MongoClient,
	Collection,
	InsertOneWriteOpResult,
	ObjectID,
	Cursor
} from "mongodb";

export default class MongoDbClient {
	private client: MongoClient | undefined;
	private readonly connectionString = "mongodb://localhost:27017";
	private readonly dbName = "ubuy";

	constructor() {}

	public async addNewItem(newItem: Item): Promise<ObjectID> {
		await this.connect();
		const db: Db = await this.getDb();
		const collection: Collection = await db.collection("items");
		const result: InsertOneWriteOpResult = await collection.insertOne(newItem);
		return result.insertedId;
	}

	public async getAllItems(): Promise<any[]> {
		await this.connect();
		const db: Db = await this.getDb();
		const collection: Collection = await db.collection("items");
		const results: Cursor<any> = await collection.find();
		const asArray = await results.toArray();
		return asArray;
	}

	private async connect() {
		try {
			if (!this.client) {
				this.client = await MongoClient.connect(this.connectionString, {
					useNewUrlParser: true
				});
			}
		} catch (error) {
			console.log("error during connecting to mongo: ");
			console.error(error);
		}
	}

	public close() {
		if (this.client) {
			this.client
				.close()
				.then()
				.catch(error => {
					console.error(error);
				});
		} else {
			console.error("close: client is undefined");
		}
	}

	public getDb(): Db {
		if (this.client) {
			return this.client.db(this.dbName);
		} else {
			throw new Error("Could not get db");
		}
	}
}
