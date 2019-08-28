import { Request, Response } from "express";
import User, { UserModel } from "../../model/user.model";
import jwt from "jsonwebtoken";
import env from "../../common/config-helper";
import responseBuilder from "../../common/response-builder";

export default class AuthController {
	constructor() {}

	public handleCheckToken(req: Request, res: Response) {
		responseBuilder.buildSuccess(res, "Your token is valid");
	}

	

	public handleAuthenticate(req: Request, res: Response) {
		const { email, password } = req.body;
		User.findOne({ email }, function(err, user: UserModel) {
			if (err) {
				responseBuilder.buildError(res, err, "Internal error please try again");
			} else if (!user) {
				responseBuilder.buildUnAuthorized(res, "Incorrect email or password");
			} else {
				// TODO fix this any type
				// @ts-ignore
				user.isCorrectPassword(password, function(err: Error, same: any) {
					if (err) {
						responseBuilder.buildError(
							res,
							err,
							"Internal error please try again"
						);
					} else if (!same) {
						responseBuilder.buildUnAuthorized(
							res,
							"Incorrect email or password"
						);
					} else {
						// Issue token
						const payload = { email };
						const token = jwt.sign(payload, env.SECRET, {
							expiresIn: "1h"
						});
						res.setHeader("Access-Control-Allow-Headers", "Set-Cookie");
						res.cookie("token", token, { httpOnly: true });
						responseBuilder.buildSuccess(res);
					}
				});
			}
		});
	}
}
