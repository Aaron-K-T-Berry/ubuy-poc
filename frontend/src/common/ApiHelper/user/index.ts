import env from "../../ConfigHelper";
import Axios from "axios";

export const getSingleAdmin = async (userOId: string) => {
	try {
		const res = await Axios.get(`${env.API_HOSTNAME}/user/admin/${userOId}`, {
			withCredentials: true
		});
		if (res.status === 200) {
			if (res.data !== null) {
				return res.data;
			}
		} else {
			console.log(`${res.status} code returned trying to get single user`);
		}
	} catch (err) {
		console.log(err);
	}
};

export const getAllAdmin = async () => {
	try {
		const res = await Axios.get(`${env.API_HOSTNAME}/user/admin`, {
			withCredentials: true
		});
		if (res.status === 200) {
			if (res.data !== null) {
				return res.data;
			}
		} else {
			console.log(`${res.status} code returned trying to get single user`);
		}
	} catch (err) {
		console.log(err);
	}
};

export default {
	getSingleAdmin
}
