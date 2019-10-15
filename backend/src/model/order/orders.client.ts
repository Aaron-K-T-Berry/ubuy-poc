import OrderModel from "./orders.model";

export const createOrder = async (data: any) => {
	return await new OrderModel(data).save();
};
