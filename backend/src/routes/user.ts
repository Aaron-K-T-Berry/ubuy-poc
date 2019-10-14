import { Express } from "express";
import { customerAuth, branchAuth } from "../middlewear/auth-middlewear";
import UserController from "../controllers/users";

export const UserRoute = (app: Express, controller: UserController) => {
	app.post("/user/register", controller.handleRegisterUser);
	app.post("/user/register/internal", controller.handleRegisterInternalUser);

	app.get("/user", customerAuth, controller.handleGetUser); // Get user account info
	// Register customer user
	// Register internal user
	// Register admin user
	app.get("/user/admin/:userId", branchAuth, controller.getSingle); // Get single user (for admin views)
	app.get("/user/admin", branchAuth, controller.getAll); // Get all user (for admin views)
	app.post("/user/update/:userId", branchAuth, controller.update); // Update user
	// Update user
	// Delete user
};
