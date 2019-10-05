import cookies from "js-cookie";

export default {
	// Check if the token is defined or not
	isAuthed: () => {
		if (cookies.get("token") !== undefined) {
			return true;
		}
		return false;
	},
	logout: () => {
		cookies.remove("token");
	}
};
