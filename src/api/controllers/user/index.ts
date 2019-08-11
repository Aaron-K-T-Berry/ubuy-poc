import { Request } from "express";
import { validateRegistration } from "./validator/register";
import UserInitializer from "./Initializer";

export default class UserController {
	private init: UserInitializer;

	constructor() {
		this.init = new UserInitializer();
	}

	public handleNewUser(res: Request) {
		try {
			validateRegistration(res);
			// const registerRequst: userRegistrationRequest = res.body;

			// Send to service
			this.init.getUserRegistrationService()

			// Return res
		} catch (e) {
			// This should catch the error, log it and return fail response
			console.log(e);
		}
		return "test";
	}
}
