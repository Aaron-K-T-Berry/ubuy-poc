import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ApiInitializer from "./initializer";
import { Routes } from "./routes";
import dotenv from "dotenv";

// Pull in .env files into process.env
dotenv.config();

const serverStart = () => {
	// Setup express
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());

	// Status endpoints
	app.get("/status", (req: Request, response: Response) => {
		response.status(200).send("pong");
	});

	// Adding api routes
	const apiInit = new ApiInitializer(app);
	Routes(apiInit);

	// Start the server
	const port = process.env.APP_PORT;
	app.listen(port, () => {
		console.log("Server started on port", port);
	});
};

serverStart();
