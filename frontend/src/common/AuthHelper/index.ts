import ls from "local-storage";

const AUTH_STATE_KEY = "UBUY_AUTH_STATE";

export default {
	setAuthenticated: (state: boolean) => {
		// @ts-ignore
		ls.set(AUTH_STATE_KEY, state);
	},

	isAuthenticated: () => {
		// @ts-ignore
		return ls.get(AUTH_STATE_KEY);
	}
};
