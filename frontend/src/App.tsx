import React from "react";
import "./styles/App.css";
import LoginForm from "./components/LoginForm";
import ItemViewer from "./components/ItemViewer";

const App: React.FC = () => {
	return (
		<div className="page-wrapper">
			<h1 className="h1">U-Buy</h1>

			<div className="container">
				<div>
					<h2>Add Item</h2>
					<LoginForm />
				</div>

				<div>
					<h2>All Items</h2>
					<ItemViewer />
				</div>
			</div>
		</div>
	);
};

export default App;
