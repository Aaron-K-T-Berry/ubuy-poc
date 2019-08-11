import addressAUS from "../../common/models/address-aus.model";

export interface UserModel {
	userName: string;
	email: string;
	firstName: string;
	lastName: string;
	address: addressAUS;
}

export interface userRegistrationRequest {
	username: string;
	email: string;
	firstName: string;
	lastName: string;
}
