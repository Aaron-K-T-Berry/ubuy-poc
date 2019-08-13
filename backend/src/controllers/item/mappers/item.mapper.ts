import { Request } from "express";
import { Item } from "../models/item.model";

export const requestToItem = (req: Request): Item => {
	const body = req.body;
	return {
		name: body.name,
		price: body.name,
		quantity: body.name
	};
};
