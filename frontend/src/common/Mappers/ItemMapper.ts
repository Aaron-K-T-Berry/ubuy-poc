import ApiHelper from "../ApiHelper";

export const findItemDetail = (branchId: string, branches: any[]) => {
	return branches.filter(branch => branch._id === branchId)[0];
};

export const itemIdToItem = async (ids: string[]) => {
	const items = await ApiHelper.item.getAll();
	return ids.map(id => {
		return items.filter((item: any) => item._id === id)[0];
	});
};
