import { Response } from "express";
import logger from "../loaders/logger";

export default {
	buildSuccess: (res: Response, data?: any) => {
		logger.info("Sending 200 with " + JSON.stringify(data));
		res
			.status(200)
			.json(data)
			.send();
	},
	buildError: (res: Response, err: Error, msg?: string) => {
		logger.error("Sending 500 with error " + err.name);
		res.status(500).send({ msg: msg, err: err });
	},
	buildUnAuthorized: (res: Response, msg?: string) => {
		logger.warn("Sending 401 with error " + msg);
		res.status(401).send({ msg: msg });
	}
};
