import { Request } from "express";
import { has } from "lodash";

export const validateRegistration = (req: Request) => {
	// Check required fields are present
	const requiredFields = ["username", "email", "firstName", "lastName"];
	const body = req.body;

	for (const field of requiredFields) {
		if (!has(body, field)) {
			throw new Error(`Missing field ${field}`);
		}
	}
};
