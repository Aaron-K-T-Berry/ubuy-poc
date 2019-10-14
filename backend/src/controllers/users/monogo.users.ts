import userModel from "../../model/user.model";

export const getUser = async (userId: string) => {
	return await userModel.findOne({
		_id: userId
	});
};

export const updateUser = async (userId: string, newData: any) => {
	return await userModel.update(
		{
			_id: userId
		},
		newData
	);
};
