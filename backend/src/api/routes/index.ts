import { Router } from "express";
import item from "./item";

export default () => {
	const app = Router();
	item(app);
};
