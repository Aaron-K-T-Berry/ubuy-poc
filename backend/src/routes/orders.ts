import { Express } from "express";
import { branchAuth, customerAuth } from "../middlewear/auth-middlewear";
import OrderController from "../controllers/orders";

export const OrderRoute = (app: Express, controller: OrderController) => {
	app.put("/order", customerAuth, controller.create); // Create new order for user
	app.get("/order/all", branchAuth, controller.getAll); // Get all orders
	app.get("/order/all/:orderId", branchAuth, controller.getSingle); // Get single order
	app.get("/order/branch/:branchId", branchAuth, controller.getBranchAll); // Get all orders for branch
	app.get("/order/user/:userId", customerAuth, controller.getUserAll); // Get all orders for user
	app.get("/order/user/:userId/:orderId", customerAuth, controller.getUserSingle); // Get single order for user
	app.patch("/order/:orderId", branchAuth, controller.update); // Update order
	app.delete("/order/user/:orderId", branchAuth, controller.delete); // Delete order
};
