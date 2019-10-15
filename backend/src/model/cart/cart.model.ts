import mongoose, { Document } from "mongoose";

export interface Cart extends Document {
	userId: string;
	items: String[];
}

export const CartSchema = new mongoose.Schema({
	userId: { type: String, required: true },
	items: { type: [String] }
});

export default mongoose.model("Carts", CartSchema);
