import { Request, Response } from "express";
import userModel, { User, InternalUserType } from "../../model/user.model";
import responseBuilder from "../../common/response-builder";
import { MongoError } from "mongodb";
import handleMongoError from "../../common/mongo-errors";

export interface AuthRequest extends Request {
	email: string;
}

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
			userType
		} = req.body;

		const user = new userModel({
			firstName,
			lastName,
			email,
			password,
			address,
			userMeta: {
				userType
			}
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
		const newUserRequest = new userModel({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			password: req.body.password,
			email: req.body.email,
			address: req.body.address,
			userMeta: {
				userType: req.body.userType,
				branchID: req.body.branchId
			} as InternalUserType
		} as any);

		newUserRequest.save(function(err: MongoError) {
			if (err) {
				handleMongoError(err, res);
			} else {
				responseBuilder.buildSuccess(res, "Welcome to the club!");
			}
		});
	}
}
