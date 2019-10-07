import { MongoError } from "mongodb";
import responseBuilder, { ApiCode } from "./response-builder";
import { Response } from "express";

export default (err: MongoError, res: Response) => {
	switch (err.code) {
		case 11000: //Duplicate key
			const errorMessage = "Duplicate key in collection.";
			responseBuilder.buildAPIError(res, ApiCode.MongoDuplicateKey, {
				msg: errorMessage,
				mongoErr: err
			});
			break;
		default:
			responseBuilder.buildError(res, err);
			break;
	}
};
