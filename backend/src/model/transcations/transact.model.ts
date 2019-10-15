import mongoose, { Document } from "mongoose";

export interface Transaction extends Document {
	userId: string;
	orderId: string;
  paymentDetails: string;
  createdTime: Date;
}

export const TransactionSchema = new mongoose.Schema({
	userId: { type: String, required: true },
	orderId: { type: String, required: true },
	paymentDetails: { type: Object, required: true },
	createdTime: { type: Date, required: true } // Added by backend
});

export default mongoose.model("Transactions", TransactionSchema);
