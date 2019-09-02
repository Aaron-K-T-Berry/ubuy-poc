import React from "react";
import "./styles/App.css";
import LoginForm from "./pages/Login";
import AccountInfo from "./pages/AccountInfo";
import RegisterCustomer from "./pages/RegisterUser";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import PageNotFound from "./pages/PageNotFound";
import RegisterInternalUser from "./pages/RegisterInternalUser";

const App: React.FC = () => {
	return (
		<div>
			<Router>
				<SiteHeader />
				<div className="page-wrapper">
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/login" exact component={LoginForm} />
						<Route path="/account" exact component={AccountInfo} />
						<Route path="/register/internal" component={RegisterInternalUser} />
						<Route path="/register" component={RegisterCustomer} />
						<Route component={PageNotFound} />
					</Switch>
				</div>
				<SiteFooter />
			</Router>
		</div>
	);
};

export default App;
