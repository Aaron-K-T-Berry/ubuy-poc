import ApiInitializer from "../initializer";
import { ItemRoute } from "./item";
import { AuthRoute } from "./auth";
import { UserRoute } from "./user";
import UserController from "../controllers/users";

export const Routes = (init: ApiInitializer) => {
	ItemRoute(init.getApp(), init.getItemController());
	AuthRoute(init.getApp());
	UserRoute(init.getApp(), new UserController());
};
