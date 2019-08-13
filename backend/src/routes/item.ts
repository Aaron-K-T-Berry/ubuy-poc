import { Express, Request, Response } from "express";
import ItemController from "../controllers/item";

export const ItemRoute = (api: Express, itemController: ItemController) => {
	api.route("/item").get(async (req: Request, res: Response) => {
		await itemController.handleGetAllItems(res);
	});

	api.route("/item/add").post(async (req: Request, res: Response) => {
		await itemController.handleAddItem(req, res);
	});
};
