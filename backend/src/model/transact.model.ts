import mongoose, { Document } from "mongoose";

export interface Transaction {}

export interface TransactionModel extends Document, Transaction {}

export const TransactionSchema = new mongoose.Schema({});

export default mongoose.model("Transactions", TransactionSchema);
