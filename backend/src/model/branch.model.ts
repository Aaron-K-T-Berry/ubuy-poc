import mongoose, { Document } from "mongoose";

export interface Branch {
	name: string;
	address: string;
}

export interface BranchModel extends Document {
	name: string;
	address: string;
}

const BranchSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	address: { type: String, required: true }
});

export default mongoose.model("Branch", BranchSchema);
