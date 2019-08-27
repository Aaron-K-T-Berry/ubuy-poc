import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ApiInitializer from "./initializer";
import { Routes } from "./routes";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import env from "./common/config-helper";
import logger from "./loaders/logger";

const mongo_uri = "mongodb://localhost/ubuy";
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
	if (err) {
		throw err;
	} else {
		console.log(`Successfully connected to ${mongo_uri}`);
	}
});

const serverStart = () => {
	// Setup express
	const app = express();
	app.use(bodyParser.json());
	app.use(cookieParser());
	app.use(cors({ origin: "http://localhost:3000", credentials: true }));

	// Status endpoints
	app.get("/status", (req: Request, response: Response) => {
		response.status(200).send("pong");
	});

	// Adding api routes
	const apiInit = new ApiInitializer(app);
	Routes(apiInit);

	// Start the server
	const port = env.APP_PORT;
	app.listen(port, () => {
		logger.info(`Server started on port ${port}`);
	});
};

serverStart();
