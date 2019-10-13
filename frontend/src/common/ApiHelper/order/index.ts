import env from "../../ConfigHelper";
import Axios from "axios";

export const getAll = async () => {
	try {
		const res = await Axios.get(env.API_HOSTNAME + "/order/all", {
			withCredentials: true
		});

		if (res.status === 200) {
			if (res.data !== undefined) {
				console.log(`Fetched ${res.data.length} order(s) from the backend`);
				return res.data;
			} else {
				console.log("Call for all order returned no data");
				return [];
			}
		} else {
			console.log(`${res.status} code returned trying to get all order`);
		}
	} catch (err) {
		console.log(err);
	}
};

export default {
	getAll
};
