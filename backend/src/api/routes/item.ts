import { Request, Response, Router } from "express";
import { addItemValidator } from "../../validator/item";
import item

const route = Router();

export default (app: Router) => {
	app.use("/item", route);

	route.get("/add", (req: Request, res: Response) => {
    addItemValidator(req);

		res.send("testing testing");
	});
};
