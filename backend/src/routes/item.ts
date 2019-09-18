import { Express } from "express";
import ItemController from "../controllers/item/index";
import {branchAuth} from "../middlewear/auth-middlewear"

export const ItemRoute = (app: Express, controller: ItemController) => {
	app.post("/item", branchAuth, controller.handleCreate);
	app.get("/item", controller.handleReadAll);
	app.get("/item/:itemId", controller.handleReadSingle);
	// app.put("/item", branchAuth, controller.handleUpdate);
	// app.delete("/item", branchAuth, controller.handleDestroy);
};
