import React from "react";
import "./styles/App.css";
import LoginForm from "./pages/Login";
import AccountInfo from "./pages/AccountInfo";
import RegisterCustomer from "./pages/Registration/RegisterCustomer";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import PageNotFound from "./pages/PageNotFound";
import RegisterBranchUser from "./pages/Registration/RegisterBranchUser";
import { ToastContainer } from "react-toastify";
import RegisterAdminUser from "./pages/Registration/RegisterAdminUser";

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
						<Route
							path="/register/internal/branch"
							component={RegisterBranchUser}
						/>
						<Route
							path="/register/internal/admin"
							component={RegisterAdminUser}
						/>
						<Route path="/register/user" component={RegisterCustomer} />
						<Route component={PageNotFound} />
					</Switch>
				</div>
				<ToastContainer />
				<SiteFooter />
			</Router>
		</div>
	);
};

export default App;
