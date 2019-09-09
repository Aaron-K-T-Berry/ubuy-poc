import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import userModel, { User } from "../model/user.model";
import { has } from "lodash";

// TODO import this from config
const secret = "mysecretsshhh";

const verifyJWT = (token: string) => {
	try {
		return jwt.verify(token, secret);
	} catch (err) {
		return undefined;
	}
};

const getUserObj = async (email: string) => {
	return await userModel.findOne({ email });
};

const withAuth = async (req: Request, res: Response, next: any) => {
	try {
		const token =
			req.body.token ||
			req.query.token ||
			req.headers["x-access-token"] ||
			req.cookies.token;
		if (!token) {
			res.status(401).send("Unauthorized: No token provided");
		} else {
			const verifiedToken = verifyJWT(token);

			if (verifiedToken) {
				// @ts-ignore
				const email = verifiedToken.email;
				// @ts-ignore
				req.email = email;

				const userObj = await getUserObj(email);
				console.log(userObj);

				next();
			} else {
				res.status(401).send("Unauthorized: Invalid token");
			}
		}
	} catch (err) {
		next(err);
	}
};

const verifyUser = async (token: string): Promise<User | undefined> => {
	try {
		const verifiedJWT = jwt.verify(token, secret);
		// @ts-ignore
		return await userModel.findOne({ email: verifiedJWT.email });
	} catch (err) {
		return undefined;
	}
};

const getToken = (req: Request) => {
	return (
		req.body.token ||
		req.query.token ||
		req.headers["x-access-token"] ||
		req.cookies.token
	);
};

// const withCustomerAuth = (req: Request, res: Response, next: any) => {
// const deniedPaths = [];
// const token = getToken(req);
// };
// const withBranchAuth = (req: Request, res: Response, next: any) => {
// 	const deniedPaths = ["CUSTOMER"];
// };
const withAdminAuth = async (req: Request, res: Response, next: any) => {
	const deniedPaths = ["CUSTOMER", "INTERNAL"];
	const token = getToken(req);

	if (!token) {
		res.status(401).send("Unauthorized: No token provided");
	} else {
		const userObj = await verifyUser(token);

		if (userObj !== undefined && userObj.userMeta !== undefined) {
			// Now loop over denied paths dont match current path
			if (!has(deniedPaths, userObj.userMeta.type)) {
				next();
			} else {
				res
					.status(401)
					.send(`Unauthorized: User type ${userObj.userMeta.type} invalid`);
			}
		} else {
			res.status(401).send("Unauthorized: Invalid token");
		}
	}
};

export default withAuth;
