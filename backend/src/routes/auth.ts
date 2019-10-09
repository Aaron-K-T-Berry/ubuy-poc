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
	app.get("/auth/checkTokenBranch", branchAuth, controller.handleCheckToken);
	app.get("/auth/checkTokenAdmin", adminAuth, controller.handleCheckToken);
};
