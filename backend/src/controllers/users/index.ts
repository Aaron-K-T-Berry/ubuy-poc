import { Request, Response } from "express";
import userModel, { InternalUserType } from "../../model/user.model";
import responseBuilder from "../../common/response-builder";
import { MongoError } from "mongodb";
import handleMongoError from "../../common/mongo-errors";
import { getUser, updateUser } from "./monogo.users";
import * as _ from "lodash";

export interface AuthRequest extends Request {}

export default class UserController {
	constructor() {}

	public async handleGetUser(req: AuthRequest, res: Response) {
		const result = await userModel.findOne({
			email: req.query.email
		});
		// @ts-ignore
		res.send({ ...result["_doc"], password: undefined });
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

	public async getSingle(req: Request, res: Response) {
		try {
			const result = await userModel.findOne({
				_id: req.params.userId
			});
			// @ts-ignore
			const cleanedResult = { ...result["_doc"], password: undefined };

			responseBuilder.buildSuccess(res, cleanedResult);
		} catch (err) {
			handleMongoError(err, res);
		}
	}

	public async getAll(req: Request, res: Response) {
		try {
			const results = await userModel.find({}).lean();
			// @ts-ignore
			const cleanedResults = results.map(result => {
				return { ...result, password: undefined };
			});

			responseBuilder.buildSuccess(res, cleanedResults);
		} catch (err) {
			handleMongoError(err, res);
		}
	}

	public async update(req: Request, res: Response) {
		try {
			const userId = req.params.userId;
			const currentUserDetails = ((await getUser(userId)) as any)["_doc"];
			const mergedUser = _.assign(
				currentUserDetails,
				_.pick(req.body, _.keys(currentUserDetails))
			);
			const response = await updateUser(userId, mergedUser);

			responseBuilder.buildSuccess(res, {
				msg: `Successfully updated account with id: ${userId}`,
				updateStats: response
			});
		} catch (err) {
			handleMongoError(err, res);
		}
	}
}
