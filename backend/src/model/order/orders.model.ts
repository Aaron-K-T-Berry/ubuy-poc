import mongoose, { Document } from "mongoose";

enum StatusTypes {
	packing = "packing",
	delivering = "delivering",
	complete = "complete"
}

export interface Order {
	userId: string;
	items: {
		itemId: string;
		quantity: number;
		branchId: string;
	}[];
	billingAddress: string;
	deliveryAddress: string;
	orderTime: Date;
	status: StatusTypes;
}

export interface OrderModel extends Document, Order {}

export const ItemsSchema = new mongoose.Schema({
	itemId: { type: String, required: true },
	quantity: { type: Number, required: true },
	branchId: { type: String, required: true }
});

const OrderSchema = new mongoose.Schema({
	userId: { type: String, required: true },
	items: {
		type: [{}],
		required: true
	},
	billingAddress: { type: String, required: true },
	deliveryAddress: { type: String, required: true },
	orderTime: { type: Date, required: true },
	status: { type: StatusTypes, required: true }
});

export default mongoose.model("Order", OrderSchema);
