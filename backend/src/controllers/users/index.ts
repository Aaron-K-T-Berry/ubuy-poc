import { Request, Response } from "express";
import userModel, { UserModel } from "../../model/user.model";
import responseBuilder from "../../common/response-builder";

export interface AuthRequest extends Request {
	email: string;
}

export default class UserController {
	constructor() {}

	public async handleGetUser(req: AuthRequest, res: Response) {
		const result: UserModel = ((await userModel.findOne({
			email: req.email
		})) as unknown) as UserModel;

		const user: UserModel = {
			email: result.email,
			firstName: result.firstName,
			lastName: result.lastName,
			address: result.address,
			userMeta: result.userMeta
		};

		res.send({ user });
	}

	public handleRegisterUser(req: Request, res: Response) {
		const { firstName, lastName, email, password } = req.body;
		// @ts-ignore
		const user = new User({ firstName, lastName, email, password });
		user.save(function(err: Error) {
			if (err) {
				responseBuilder.buildError(
					res,
					err,
					"Error registering new user please try again."
				);
			} else {
				responseBuilder.buildSuccess(res, "Welcome to the club!");
			}
		});
	}

	public handleRegisterInternalUser(req: Request, res: Response) {
		// const { firstName, lastName, email, password, address, userType, branchID } = req.body;
		console.log(req.body);
	}
}
