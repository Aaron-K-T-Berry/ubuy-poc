import TransactionModel, { Transaction } from "./transact.model";

export const create = async (data: Transaction) => {
	const saveRequest = new TransactionModel(data);
	return await saveRequest.save();
};

export const getAll = async () => {
	return await TransactionModel.find({}).lean();
};

export const getAllUser = async (userId: string) => {
	return await TransactionModel.find({ userId }).lean();
};

export const getSingleUser = async (userId: string, transactionId: string) => {
	return await TransactionModel.findOne({ _id: transactionId, userId });
};

export const remove = async (userId: string, transactionId: string) => {
	return await TransactionModel.deleteOne({ _id: transactionId, userId });
};
