import mongoose, { Document } from "mongoose";

export interface Branch {
	id: string;
	name: string;
	address: string;
}

export interface BranchModel extends Document {
	id: string;
	name: string;
	address: string;
}

const BranchSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	address: { type: String, required: true }
});

export default mongoose.model("Branch", BranchSchema);
