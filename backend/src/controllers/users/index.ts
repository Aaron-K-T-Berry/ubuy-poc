import { Request, Response } from "express";
import userModel, { User } from "../../model/user.model";
import responseBuilder, { ApiCode } from "../../common/response-builder";
import { MongoError } from "mongodb";

export interface AuthRequest extends Request {
	email: string;
}

const handleMongoError = (err: MongoError, res: Response) => {
	switch (err.code) {
		case 11000: //Duplicate key
			responseBuilder.buildAPIError(res, ApiCode.MongoDuplicateKey);
			break;
		default:
			responseBuilder.buildError(
				res,
				err,
				"Unknown error registering new user please try again."
			);
			break;
	}
};

export default class UserController {
	constructor() {}

	public async handleGetUser(req: AuthRequest, res: Response) {
		const result: User = ((await userModel.findOne({
			email: req.email
		})) as unknown) as User;

		const user: User = {
			email: result.email,
			firstName: result.firstName,
			lastName: result.lastName,
			address: result.address,
			userMeta: result.userMeta
		};

		res.send({ user });
	}

	public handleRegisterUser(req: Request, res: Response) {
		const {
			firstName,
			lastName,
			email,
			password,
			address,
			userMeta
		} = req.body;

		const user = new userModel({
			firstName,
			lastName,
			email,
			password,
			address,
			userMeta
		} as any);

		user.save(function(err: MongoError) {
			if (err) {
				handleMongoError(err, res);
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
