import ApiInitializer from "../initializer";
import { ItemRoute } from "./item";

export const Routes = (init: ApiInitializer) => {
	ItemRoute(init.getApp(), init.getItemController());
};
