import { Request, Response } from "express";
import userModel, { User, UserModel } from "../../model/user.model";

export interface AuthRequest extends Request {
	email: string;
}

export default class UserController {
	constructor() {}

	public async handleGetUser(req: AuthRequest, res: Response) {
		const result: UserModel = (await userModel.findOne({
			email: req.email
		})) as UserModel;

		const user: User = {
			email: result.email,
			firstName: result.firstName,
			lastName: result.lastName
		};

		res.send({ user });
	}
}
