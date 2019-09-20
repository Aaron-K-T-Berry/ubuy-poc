import mongoose, { Document } from "mongoose";

export interface Item {
	name: string;
	description: string;
	photo: string;
	quantity: number;
	branch: string[];
	price: number;
}

export interface ItemModel extends Document {
	name: string;
	description: string;
	photo: string;
	quantity: number;
	branch: string[];
	price: number;
}

const ItemSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	photo: { type: String, required: true },
	quantity: { type: Number, required: true },
	branch: { type: [String], required: true },
	price: { type: Number, required: true }
});

export default mongoose.model("Item", ItemSchema);
