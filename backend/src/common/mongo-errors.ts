import { MongoError } from "mongodb";
import responseBuilder, { ApiCode } from "./response-builder";
import { Response } from "express";

export default (err: MongoError, res: Response) => {
	switch (err.code) {
		case 11000: //Duplicate key
			responseBuilder.buildAPIError(res, ApiCode.MongoDuplicateKey);
			break;
		default:
			responseBuilder.buildError(
				res,
				err,
				"Unknown error registering new user please try again."
			);
			break;
	}
};
