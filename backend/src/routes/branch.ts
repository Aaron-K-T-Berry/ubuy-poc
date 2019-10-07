import { Express } from "express";
import BranchController from "../controllers/branch";
import { branchAuth } from "../middlewear/auth-middlewear";

export const BranchRoute = (app: Express, controller: BranchController) => {
	app.put("/branch", branchAuth, controller.handleCreate); // Create branch
	app.get("/branch/:branchId", controller.handGet); // Read single branch
	app.get("/branch", controller.handGetAll); // Read all branches
	app.patch("/branch/:branchId", branchAuth, controller.handleUpdate); // Update branch
	app.delete("/branch/:branchId", branchAuth, controller.handleDelete); // Delete branch
};
