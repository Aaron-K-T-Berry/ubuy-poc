import BranchApi from "./branch";
import ItemApi from "./item";
import AuthApi from "./auth";
import OrderApi from "./order";
import * as UserApi from "./user";
import CartApi from "./cart";

export default {
	branch: BranchApi,
	item: ItemApi,
	auth: AuthApi,
	order: OrderApi,
	user: UserApi,
	cart: CartApi
};
