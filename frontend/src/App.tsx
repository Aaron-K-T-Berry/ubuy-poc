import React from "react";
import "./styles/App.css";
import LoginForm from "./pages/LoginForm";
import AccountInfo from "./components/AccountInfo";
import RegisterCustomer from "./pages/RegisterCustomer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
	return (
		<Router>
			<div className="page-wrapper">
				<Switch>
					{/* TODO make /login path and make / go to index */}
					<Route path="/" exact component={LoginForm} />
					<Route path="/account" exact component={AccountInfo} />
					<Route path="/register" component={RegisterCustomer} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
