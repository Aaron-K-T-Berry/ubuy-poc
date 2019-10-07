import { Response } from "express";
import logger from "../loaders/logger";

export enum ApiCode {
	MongoDuplicateKey = "API-400",
	MongoNotFound = "API-404",
	UnknownError = "API-500"
}

export default {
	buildSuccess: (res: Response, data?: any) => {
		logger.info("Sending 200 with " + JSON.stringify(data));
		res
			.status(200)
			.json(data)
			.send();
	},
	buildError: (res: Response, err: Error, msg?: string) => {
		logger.error("Sending 500 with error " + err);
		res.status(500).send({ msg: msg, err: err });
	},
	buildUnAuthorized: (res: Response, msg?: string) => {
		logger.warn("Sending 401 with error " + msg);
		res.status(401).send({ msg: msg });
	},
	buildAPIError: (res: Response, code: ApiCode,  data?: any) => {
		logger.warn("Sending an api error with code " + code.valueOf());
		res.status(500).send({ ApiCode: code.valueOf(), data });
	}
};
