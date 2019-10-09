import Axios from "axios";
import env from "../../ConfigHelper";
import { RouteUserTypes } from "./interfaces";

const apiCheckTokenPaths = {
	USER: "/auth/checkTokenCustomer",
	INTERNAL: "/auth/checkTokenBranch",
	ADMIN: "/auth/checkTokenAdmin"
};

export const checkAccess = async (userRole: RouteUserTypes | undefined) => {
	// Default to user auth if userRole is undefined
	if (userRole === undefined) {
		userRole = RouteUserTypes.USER;
	}

	try {
		const res = await Axios.get(
			env.API_HOSTNAME + apiCheckTokenPaths[userRole],
			{
				withCredentials: true
			}
		);
		if (res.status === 200) {
			return true;
		} else {
			console.log(
				`${res.status} code returned trying to get check user access`
			);
		}
	} catch (err) {
		console.log(err);
	}
	return false;
};

export default {
	checkAccess,
	interfaces: { RouteUserTypes }
};
