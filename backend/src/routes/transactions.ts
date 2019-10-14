import { Express } from "express";
import { branchAuth, customerAuth } from "../middlewear/auth-middlewear";
import TransactionController from "../controllers/transaction";

export const TransactionRoute = (
	app: Express,
	controller: TransactionController
) => {
	app.post("/transact/create", customerAuth, controller.create); // Create transactions
	app.get("/transact/view/all", branchAuth, controller.getAll); // View all transactions
	app.get("/transact/view/:userId", customerAuth, controller.getAllUsers); // View a users transactions
	app.get("/transact/view/:userId/:transactionId", customerAuth, controller.getSingleUser); // View a single user transactions
	app.delete("/transact/delete/:userId/:transactionId", customerAuth, controller.remove); // Remove a customers transaction
};
