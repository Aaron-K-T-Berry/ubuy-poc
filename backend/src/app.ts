import express from "express";
import bodyParser from "body-parser";

const startup = async () => {
	const app = express();

	app.use(bodyParser.json());

	app.listen(() => {
		console.log("Server started on port 3000");
	});
};

startup();
