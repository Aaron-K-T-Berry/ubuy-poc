import { Express, Request, Response } from "express";
import User, { UserModel } from "../model/users.model";
import AuthController from "../controllers/users";
import jwt from "jsonwebtoken";
import withAuth from "../middlewear/auth-middlewear";

export const AuthRoute = (app: Express, controller: AuthController) => {
	app.post("/auth/register", function(req: Request, res: Response) {
		const { email, password } = req.body;
		// @ts-ignore
		const user = new User({ email, password });
		user.save(function(err: Error) {
			if (err) {
				console.log(err);
				res.status(500).send("Error registering new user please try again.");
			} else {
				res.status(200).send("Welcome to the club!");
			}
		});
	});

	app.post("/auth/authenticate", function(req, res) {
		const { email, password } = req.body;
		User.findOne({ email }, function(err, user: UserModel) {
			if (err) {
				console.error(err);
				res.status(500).json({
					error: "Internal error please try again"
				});
			} else if (!user) {
				res.status(401).json({
					error: "Incorrect email or password"
				});
			} else {
				// TODO fix this any type
				// @ts-ignore
				user.isCorrectPassword(password, function(err: Error, same: any) {
					if (err) {
						res.status(500).json({
							error: "Internal error please try again"
						});
					} else if (!same) {
						res.status(401).json({
							error: "Incorrect email or password"
						});
					} else {
						// Issue token
						const payload = { email };
						const token = jwt.sign(payload, controller.getSecret(), {
							expiresIn: "1h"
						});
						res.setHeader("Access-Control-Allow-Headers", "Set-Cookie");
						res.cookie("token", token, { httpOnly: true }).sendStatus(200);
					}
				});
			}
		});
	});

	app.get("/auth/checkToken", withAuth, function(req: Request, res: Response) {
		res.sendStatus(200);
	});
};
