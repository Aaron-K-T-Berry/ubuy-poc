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

export const getSingle = async (userEmail: string) => {
	try {
		const res = await Axios.get(`${env.API_HOSTNAME}/user`, {
			withCredentials: true,
			params: {
				email: userEmail
			}
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

export const updateUser = async (userId: string, newUserData: any) => {
	try {
		const res = await Axios.post(
			`${env.API_HOSTNAME}/user/update/${userId}`,
			newUserData,
			{
				withCredentials: true
			}
		);
		if (res.status === 200) {
			if (res.data !== null) {
				return res.data;
			}
		} else {
			console.log(
				`${res.status} code returned trying to update single user with id: ${userId}`
			);
		}
	} catch (err) {
		console.log(err);
	}
};

export default {
	getSingleAdmin,
	getSingle,
	updateUser
};
