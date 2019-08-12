import { Request } from "express";
import { has } from "lodash";

export function addItemValidator(req: Request) {
	const requiredKeys = [
		{ field: "name", type: "string" },
		{ field: "quantity", type: "number" },
		{ field: "price", type: "number" }
	];

	for (const key of requiredKeys) {
		if (!has(req.body, key.field)) {
			throw new Error(`Field ${key.field} was missing`);
		}
	}
}
