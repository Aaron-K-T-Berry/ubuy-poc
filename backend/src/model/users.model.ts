import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true }
});

UserSchema.pre("save", function(next) {
	// Check if document is new or a new password has been set
	if (this.isNew || this.isModified("password")) {
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

export interface UserModel extends Document {
	email?: string;
	password?: string;
	isCorrectPassword?: Function;
}

export default mongoose.model("User", UserSchema);
