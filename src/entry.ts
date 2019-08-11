import express from "express";
import bodyParser from 'body-parser';
import API from "./api";

const app = express()
app.use(bodyParser.json())

new API(app);


app.listen(3000, () => {
	console.log("Server ready!");
});
