import { Express } from "express";
import { branchAuth, customerAuth } from "../middlewear/auth-middlewear";
import TransactionController from "../controllers/transaction";

export const TransactionRoute = (
	app: Express,
	controller: TransactionController
) => {
	app.post("/transact/create", customerAuth); // Create transactions
	app.get("/transact/view/all", branchAuth); // View all transactions
	app.get("/transact/view/:userId", customerAuth); // View a users transactions
};
