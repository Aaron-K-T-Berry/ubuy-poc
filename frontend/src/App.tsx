import React from "react";
import "./styles/App.css";
import AddItemForm from "./components/AddItemForm";

const App: React.FC = () => {

	return (
		<div className="some-page-wrapper">
			<h1>U-Buy</h1>

			<div className="row">
				<div className="column">
					<h2>Add Item</h2>
					<AddItemForm />
				</div>

				<div className="column">
					<h2>All Items</h2>

				</div>
			</div>
		</div>
	);
};

export default App;
