import cookies from "js-cookie";

export default {
	hasToken: () => {
		if (CookieHelper.getToken() !== undefined) {
			return true;
		}
		return false;
	},
	logout: () => {
		CookieHelper.removeToken();
		CookieHelper.removeUserRole();
	},
	getUserRole: () => {
		const userTypeCookie = CookieHelper.getUserRole();
		if (userTypeCookie !== undefined) {
			return userTypeCookie;
		}
		return "CUSTOMER";
	}
};

export const CookieHelper = {
	getToken: () => {
		return cookies.get("token");
	},
	removeToken: () => {
		try {
			cookies.remove("token");
			return true;
		} catch (err) {
			console.log(err);
			return false;
		}
	},
	getUserRole: () => {
		return cookies.get("userType");
	},
	removeUserRole: () => {
		try {
			cookies.remove("userType");
			return true;
		} catch (err) {
			console.log(err);
			return false;
		}
	}
};
