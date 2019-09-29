import ls from "local-storage";

const TOKEN_KEY = "UBUY_TOKEN";

export default {
	setToken: (token: string) => {
		// @ts-ignore
		ls.set(TOKEN_KEY, token);
	},
	getToken: () => {
		// @ts-ignore
		const token = ls.get(TOKEN_KEY);
		return token;
	}
};
