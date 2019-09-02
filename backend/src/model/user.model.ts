import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

export interface UserModel {
	firstName: string;
	lastName: string;
	email: string;
	// Todo i feel like this needs to be handled better
	password?: string;
	address: string | undefined;
	userMeta: InternalUserType | undefined;
	isCorrectPassword?: Function;
}

export interface InternalUserType {
	type: string; // admin or employee
	branchID: string | undefined; // id of branch or undefined for admin
}

const UserSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	address: { type: String },
	userMeta: { type: Object }
});

UserSchema.pre("save", function(next) {
	// Check if document is new or a new password has been set
	if (this.isNew || this.isModified("password")) {
		// @ts-ignore
		// Saving reference to this because of changing scopes
		const document: UserModel = this;
		bcrypt.hash(document.password, saltRounds, function(err, hashedPassword) {
			if (err) {
				next(err);
			} else {
				document.password = hashedPassword;
				next();
			}
		});
	} else {
		next();
	}
});

UserSchema.methods.isCorrectPassword = function(
	password: string,
	callback: CallableFunction
) {
	bcrypt.compare(password, this.password, function(err, same) {
		if (err) {
			callback(err);
		} else {
			callback(err, same);
		}
	});
};

export default mongoose.model("User", UserSchema);
