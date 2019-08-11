import UserRegistrationService from "./services/user-registration";
import MongodbClient from "./components/mongodb-client";

export default class UserInitializer {
	private userRegistrationService: UserRegistrationService;
	private mongodbClient: MongodbClient;

	constructor() {}

	public getUserRegistrationService(): UserRegistrationService {
		if (this.userRegistrationService === undefined) {
			this.userRegistrationService = new UserRegistrationService(
				this.getMongoDbClient()
			);
		}
		return this.userRegistrationService;
	}

	private getMongoDbClient() {
		if (this.mongodbClient === undefined) {
			this.mongodbClient = new MongodbClient();
		}
		return this.mongodbClient;
	}
}
