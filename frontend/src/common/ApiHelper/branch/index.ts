import env from "../../ConfigHelper";
import Axios from "axios";

export const getSingle = async (branchId: string) => {
	try {
		const res = await Axios.get(`${env.API_HOSTNAME}/branch/${branchId}`, {
			withCredentials: true
		});
		if (res.status === 200) {
			if (res.data !== null) {
				return res.data;
			}
		} else {
			console.log(`${res.status} code returned trying to get single branch`);
		}
	} catch (err) {
		console.log(err);
	}
};

export const getBatch = async (branchIds: string[]) => {
	const mappedPromises = branchIds.map(async single => {
		return await getSingle(single);
	});
	return await Promise.all(mappedPromises);
};

export const getAll = async () => {
	try {
		const res = await Axios.get(env.API_HOSTNAME + "/branch", {
			withCredentials: true
		});

		if (res.status === 200) {
			if (res.data !== undefined) {
				console.log(`Fetched ${res.data.length} branches from the backend`);
				return res.data;
			} else {
				console.log("Call for all branches returned no data");
				return [];
			}
		} else {
			console.log(`${res.status} code returned trying to get all branches`);
		}
	} catch (err) {
		console.log(err);
	}
};

export const update = async (branchID: string, branch: any) => {
	try {
		const res = await Axios.patch(
			`${env.API_HOSTNAME}/branch/${branchID}`,
			branch,
			{ withCredentials: true }
		);

		if (res.status === 200) {
			console.log("Branch patched successfully:", res.data);
			return true;
		} else {
			console.log(
				`${res.status} code was returned while trying to patch branch`
			);
		}
	} catch (err) {
		console.log(err);
	}
	return false;
};

export const remove = async (branchID: string) => {
	try {
		const res = await Axios.delete(`${env.API_HOSTNAME}/branch/${branchID}`, {
			withCredentials: true
		});
		if (res.status === 200) {
			console.log(`Item ${branchID} was successfully branch`);
			return true;
		} else {
			console.log(
				`${res.status} code was returned when trying to delete branch`
			);
		}
	} catch (err) {
		console.log(err);
	}
	return false;
};

export const add = async (branch: any) => {
	try {
		const res = await Axios.put(env.API_HOSTNAME + "/branch", branch, {
			withCredentials: true
		});
		if (res.status === 200) {
			return true;
		} else {
			console.log(`${res.status} code received when trying to add branch`);
		}
	} catch (err) {
		console.log(err);
	}
	return false;
};

export default {
	getAll,
	getSingle,
	getBatch,
	update,
	delete: remove,
	add
};
