import jwt from "jsonwebtoken";
import { Request, Response } from "express";

// TODO import this from config
const secret = "mysecretsshhh";

const withAuth = function(req: Request, res: Response, next: any) {
	const token =
		req.body.token ||
		req.query.token ||
		req.headers["x-access-token"] ||
		req.cookies.token;
	if (!token) {
		res.status(401).send("Unauthorized: No token provided");
	} else {
		// TODO remove any type
		jwt.verify(token, secret, function(err: Error, decoded: any) {
			if (err) {
				res.status(401).send("Unauthorized: Invalid token");
			} else {
        // @ts-ignore
				req.email = decoded.email;
				next();
			}
		});
	}
};

export default withAuth;
