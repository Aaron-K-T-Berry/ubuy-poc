import { Express } from "express";
import ItemController from "../controllers/item/index";
import {branchAuth} from "../middlewear/auth-middlewear"

export const ItemRoute = (app: Express, controller: ItemController) => {
	app.put("/item", branchAuth, controller.handleCreate); // Create an item
	app.get("/item", controller.handleReadAll); // Get all items
	app.get("/item/:itemId", controller.handleReadSingle); // Get 1 item via item id
	app.patch("/item/:itemId", branchAuth, controller.handleUpdate); // Updated item via item id
	app.delete("/item/:itemId", branchAuth, controller.handleDestroy); // Delete item via item id
	app.post("/item/search", controller.handleSearch); // Search functionality for strings
};
