import { Express, Request, Response } from "express";
import { customerAuth, branchAuth } from "../middlewear/auth-middlewear";
import UserController, { AuthRequest } from "../controllers/users";

export const UserRoute = (app: Express, controller: UserController) => {
	// Get all account information
	app.route("/user").get(customerAuth, async (req: Request, res: Response) => {
		res.send(await controller.handleGetUser(req as AuthRequest, res));
	});
	app.post("/user/register", controller.handleRegisterUser);
	app.post("/user/register/internal", controller.handleRegisterInternalUser);

	// Register customer user
	// Register internal user
	// Register admin user
	app.get("/user/admin/:userId", branchAuth, controller.getSingle); // Get single user (for admin views)
	// Get all user
	// Update user
	// Delete user
};
