import Axios from "axios";
import env from "../../ConfigHelper";

export const process = async (data: any) => {
	try {
		const res = await Axios.post(`${env.API_HOSTNAME}/transact/process`, data, {
			withCredentials: true
		});
		if (res.status === 200) {
			return res.data;
		} else {
			console.log(`${res.status} code returned trying to process order`);
		}
	} catch (err) {
		console.log(err);
	}
};

export default {
  process
}
