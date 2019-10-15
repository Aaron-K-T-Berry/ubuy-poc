import CartModel from "./cart.model";

export const putItem = async (userId: string, data: any) => {
	return CartModel.findOneAndUpdate(
		{ userId: userId },
		data,
		{ upsert: true },
		(error, result) => {
			if (!error) {
				if (!result) {
					result = new CartModel();
				}

				result.save(error => {
					if (!error) {
						// Do something with the document
					} else {
						throw error;
					}
				});
			}
		}
	);
};

export const getCart = async (userId: string) => {
	return await CartModel.findOne({ userId: userId }).lean();
};

export const deleteCart = async (userId: string) => {
	return await CartModel.deleteOne({ userId: userId });
};
