export const findBranchDetails = (branchId: string, branches: any[]) => {
	return branches.filter(branch => branch._id === branchId)[0];
};
