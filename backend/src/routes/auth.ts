import { Express } from "express";
import {
	adminAuth,
	customerAuth,
	branchAuth
} from "../middlewear/auth-middlewear";
import AuthController from "../controllers/auth";

export const AuthRoute = (app: Express, controller: AuthController) => {
	app.post("/auth/authenticate", controller.handleAuthenticate);
	app.get(
		"/auth/checkTokenCustomer",
		customerAuth,
		controller.handleCheckToken
	);
	app.get("/auth/checkTokenBranch", adminAuth, controller.handleCheckToken);
	app.get("/auth/checkTokenAdmin", branchAuth, controller.handleCheckToken);
};
