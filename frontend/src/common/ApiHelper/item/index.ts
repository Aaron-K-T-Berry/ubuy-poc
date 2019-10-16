import env from "../../ConfigHelper";
import Axios from "axios";

export const getAll = async () => {
	try {
		const res = await Axios.get(env.API_HOSTNAME + "/item", {
			withCredentials: true
		});

		if (res.status === 200) {
			if (res.data !== undefined) {
				console.log(`Fetched ${res.data.length} item(s) from the backend`);
				return res.data;
			} else {
				console.log("Call for all items returned no data");
				return [];
			}
		} else {
			console.log(`${res.status} code returned trying to get all items`);
		}
	} catch (err) {
		console.log(err);
	}
};

export const getSingle = async (itemID: string) => {
	try {
		const res = await Axios.get(`${env.API_HOSTNAME}/item/${itemID}`, {
			withCredentials: true
		});
		if (res.status === 200) {
			return res.data;
		} else {
			console.log(`${res.status} code returned trying to get single item`);
		}
	} catch (err) {
		console.log(err);
	}
};

export const update = async (itemID: string, item: any) => {
	try {
		const res = await Axios.patch(`${env.API_HOSTNAME}/item/${itemID}`, item, {
			withCredentials: true
		});

		if (res.status === 200) {
			console.log("Item patched successfully:", res.data);
			return true;
		} else {
			console.log(`${res.status} code was returned while trying to patch item`);
		}
	} catch (err) {
		console.log(err);
	}
	return false;
};

export const remove = async (itemID: string) => {
	try {
		const res = await Axios.delete(`${env.API_HOSTNAME}/item/${itemID}`, {
			withCredentials: true
		});
		if (res.status === 200) {
			console.log(`Item ${itemID} was successfully deleted`);
			return true;
		} else {
			console.log(`${res.status} code was returned when trying to delete item`);
		}
	} catch (err) {
		console.log(err);
	}
	return false;
};

export const add = async (item: any) => {
	try {
		const res = await Axios.put(env.API_HOSTNAME + "/item", item, {
			withCredentials: true
		});
		if (res.status === 200) {
			return true;
		} else {
			console.log(`${res.status} code received when trying to add item`);
		}
	} catch (err) {
		console.log(err);
	}
	return false;
};

export const search = async (query: string) => {
	try {
		const res = await Axios.post(
			env.API_HOSTNAME + "/item/search",
			{ query },
			{
				withCredentials: true
			}
		);
		if (res.status === 200) {
			return res;
		} else {
			console.log(`${res.status} code received when trying query items`);
		}
	} catch (err) {
		console.log(err);
	}
	return false;
};

export default {
	getAll,
	getSingle,
	update,
	delete: remove,
	add,
	search
};
