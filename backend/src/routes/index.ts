import ApiInitializer from "../initializer";
import { AuthRoute } from "./auth";
import { UserRoute } from "./user";
import { BranchRoute } from "./branch";
import { OrderRoute } from "./orders";
import UserController from "../controllers/users";
import AuthController from "../controllers/auth";
import BranchController from "../controllers/branch";
import { ItemRoute } from "./item";
import ItemController from "../controllers/item";
import OrderController from "../controllers/orders";

export const Routes = (init: ApiInitializer) => {
	AuthRoute(init.getApp(), new AuthController());
	UserRoute(init.getApp(), new UserController());
	BranchRoute(init.getApp(), new BranchController());
	ItemRoute(init.getApp(), new ItemController());
	OrderRoute(init.getApp(), new OrderController());

	// 404
	init.getApp().use(function(req, res, next) {
		res.status(404);

		// respond with json
		if (req.accepts("json")) {
			res.send({ error: "Not found" });
			return;
		}

		// default to plain-text. send()
		res.type("txt").send("Not found");
	});
};
