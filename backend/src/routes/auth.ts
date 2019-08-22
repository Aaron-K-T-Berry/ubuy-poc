import { Express } from "express";
import withAuth from "../middlewear/auth-middlewear";
import AuthController from "../controllers/auth";

export const AuthRoute = (app: Express, controller: AuthController) => {
	app.post("/auth/register", controller.handleRegister);
	app.post("/auth/authenticate", controller.handleAuthenticate);
	app.get("/auth/checkToken", withAuth, controller.handleCheckToken);
};
