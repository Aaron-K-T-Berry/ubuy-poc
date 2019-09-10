import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import userModel, { User } from "../model/user.model";
import config from "../common/config-helper";

export const customerAuth = async (req: Request, res: Response, next: any) => {
	const deniedPaths: never[] | string[] = [];
	await verifyUser(deniedPaths, req, res, next);
};
export const branchAuth = async (req: Request, res: Response, next: any) => {
	const deniedPaths = ["CUSTOMER"];
	await verifyUser(deniedPaths, req, res, next);
};

export const adminAuth = async (req: Request, res: Response, next: any) => {
	const deniedPaths = ["CUSTOMER", "INTERNAL"];
	await verifyUser(deniedPaths, req, res, next);
};

const getToken = (req: Request) => {
	return (
		req.body.token ||
		req.query.token ||
		req.headers["x-access-token"] ||
		req.cookies.token
	);
};

const verifyUser = async (
	deniedPaths: string[],
	req: Request,
	res: Response,
	next: any
) => {
	const token = getToken(req);

	if (!token) {
		res.status(401).send("Unauthorized: Invalid token");
	} else {
		const userObj = await getUserObj(token);
		console.log(userObj);
		

		if (userObj !== undefined && userObj.userMeta !== undefined) {
			if (!deniedPaths.includes(userObj.userMeta.type)) {
				next();
			} else {
				res
					.status(401)
					.send(`Unauthorized: User type ${userObj.userMeta.type} invalid`);
			}
		} else {
			res
				.status(401)
				.send(`Unauthorized: User type not defined and defaulted to customer`);
		}
	}
};

const getUserObj = async (token: string): Promise<User | undefined> => {
	try {
		const verifiedJWT = jwt.verify(token, config.TOKEN_SECRET);
		// @ts-ignore
		return await userModel.findOne({ email: verifiedJWT.email });
	} catch (err) {
		return undefined;
	}
};
