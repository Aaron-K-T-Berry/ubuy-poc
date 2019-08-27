import ApiInitializer from "../initializer";
import { AuthRoute } from "./auth";
import { UserRoute } from "./user";
import UserController from "../controllers/users";
import AuthController from "../controllers/auth";

export const Routes = (init: ApiInitializer) => {
	AuthRoute(init.getApp(), new AuthController());
	UserRoute(init.getApp(), new UserController());
};
