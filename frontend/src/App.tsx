import React from "react";
import "./App.css";

const App: React.FC = () => {
	return (
		<div className="some-page-wrapper">
			<h1>U-Buy</h1>

			<div className="row">
				<div className="column">
					<h2>Add Item</h2>
          <label>Name of item</label>
          <input type="text"/>
          <label>Price of item</label>
          <input type="number"/>
          <button>Add</button>
				</div>

				<div className="column">
					<h2>All Items</h2>
				</div>
			</div>
		</div>
	);
};

export default App;
