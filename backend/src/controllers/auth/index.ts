import { Request, Response } from "express";
import userModel, { User } from "../../model/user.model";
import jwt from "jsonwebtoken";
import env from "../../common/config-helper";
import responseBuilder from "../../common/response-builder";

export default class AuthController {
	constructor() {}

	public handleCheckToken(req: Request, res: Response) {
		console.log(req);
		responseBuilder.buildSuccess(res, "Your token is valid");
	}

	public handleAuthenticate(req: Request, res: Response) {
		const { email, password } = req.body;
		userModel.findOne({ email }, function(err, user: User) {
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
						const token = jwt.sign(payload, env.TOKEN_SECRET, {
							expiresIn: "1h"
						});
						const userType =
							user.userMeta !== undefined ? user.userMeta.userType : "CUSTOMER";

						res.setHeader("Access-Control-Allow-Headers", "Set-Cookie");
						res.cookie("token", token, { httpOnly: false });
						res.cookie("userType", userType, { httpOnly: false });
						responseBuilder.buildSuccess(res, {
							msg: "Authenticated",
							token: token,
							userType: userType
						});
					}
				});
			}
		});
	}
}
