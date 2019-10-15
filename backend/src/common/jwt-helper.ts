import JwtDecode from "jwt-decode";

export const decode = (encodedToken: string) => {
	return JwtDecode(encodedToken);
};

export const getUserId = (encodedToken: string) => {
	return (decode(encodedToken) as any).userId;
};

export default {
  decode,
  getUserId
};
