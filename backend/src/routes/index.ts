import ApiInitializer from "../initializer";
import { AuthRoute } from "./auth";
import { UserRoute } from "./user";
import { BranchRoute } from "./branch";
import UserController from "../controllers/users";
import AuthController from "../controllers/auth";
import BranchController from "../controllers/branch";

export const Routes = (init: ApiInitializer) => {
	AuthRoute(init.getApp(), new AuthController());
	UserRoute(init.getApp(), new UserController());
	BranchRoute(init.getApp(), new BranchController());
};
