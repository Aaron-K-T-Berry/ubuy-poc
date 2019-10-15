import env from "../../ConfigHelper";
import Axios from "axios";

export const get = async () => {
	try {
		const res = await Axios.get(env.API_HOSTNAME + "/cart", {
			withCredentials: true
		});

		if (res.status === 200) {
			if (res.data !== undefined && res.data !== "") {
				return res.data;
			} else {
				return {};
			}
		} else {
			console.log(`${res.status} code returned trying to get all items`);
		}
	} catch (err) {
		console.log(err);
	}
};

export const put = async (itemId: string) => {
	try {
		const res = await Axios.put(
			`${env.API_HOSTNAME}/cart/${itemId}`,
			{},
			{
				withCredentials: true
			}
		);

		if (res.status === 200) {
			if (res.data !== undefined) {
				return res.data;
			} else {
				return {};
			}
		} else {
			console.log(`${res.status} code returned trying to put item`);
		}
	} catch (err) {
		console.log(err);
	}
};

export const empty = async () => {
	try {
		const res = await Axios.delete(`${env.API_HOSTNAME}/cart/empty`, {
			withCredentials: true
		});

		if (res.status === 200) {
			if (res.data !== undefined) {
				return res.data;
			} else {
				return {};
			}
		} else {
			console.log(`${res.status} code returned trying empty cart`);
		}
	} catch (err) {
		console.log(err);
	}
};

export const remove = async (itemId: string) => {
	try {
		const res = await Axios.delete(
			`${env.API_HOSTNAME}/cart/remove/${itemId}`,
			{
				withCredentials: true
			}
		);

		if (res.status === 200) {
			if (res.data !== undefined) {
				return res.data;
			} else {
				return {};
			}
		} else {
			console.log(`${res.status} code returned trying remove item from cart`);
		}
	} catch (err) {
		console.log(err);
	}
};

export default {
	get,
	put,
	empty,
	remove
};
