import { userRegistrationRequest } from "../../../models/user.model";
import MongodbClient from "../components/mongodb-client";

export default class UserRegistrationService {
	constructor(private dbClient: MongodbClient) {}

	public registerUser(registrationRequest: userRegistrationRequest) {
		// Check values are unique
		this.dbClient.isUnique("USERS", "username", registrationRequest.username);
		this.dbClient.isUnique("USERS", "email", registrationRequest.email);

		// Create new user in db
		// Return success
	}
}
