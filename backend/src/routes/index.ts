import ApiInitializer from "../initializer";
import { AuthRoute } from "./auth";
import { UserRoute } from "./user";
import { BranchRoute } from "./branch";
import UserController from "../controllers/users";
import AuthController from "../controllers/auth";
import BranchController from "../controllers/branch";

export const Routes = (init: ApiInitializer) => {
	AuthRoute(init.getApp(), new AuthController());
	UserRoute(init.getApp(), new UserController());
	BranchRoute(init.getApp(), new BranchController());

	// 404
	init.getApp().use(function(req, res, next) {
		res.status(404);

		// respond with html page
		// Todo: Support html rendering of server pages
		// if (req.accepts("html")) {
		// 	res.render("404", { url: req.url });
		// 	return;
		// }

		// respond with json
		if (req.accepts("json")) {
			res.send({ error: "Not found" });
			return;
		}

		// default to plain-text. send()
		res.type("txt").send("Not found");
	});
};
