import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import HomePage from "./pages/Home";
import LoginForm from "./pages/Login";
import AccountInfo from "./pages/AccountInfo";
import Cart from "./pages/Cart";
import RegisterBranchUser from "./pages/Registration/RegisterBranch";
import RegisterAdminUser from "./pages/Registration/RegisterAdmin";
import RegisterCustomer from "./pages/Registration/RegisterCustomer";
import AddItem from "./pages/AddItem";
import PrivateRoute, {RouteUserTypes} from "./components/PrivateRoute";

const App: React.FC = () => {
	return (
		<div>
			<Router>
				<SiteHeader />
				<div className="router-wrapper">
					<Switch>
						{/* Public routes */}
						<Route path="/" exact component={HomePage} />
						<Route path="/login" exact component={LoginForm} />
						<Route path="/register/user" component={RegisterCustomer} />

						{/* Authenticated routes */}
						<PrivateRoute path="/account" exact component={AccountInfo} />
						<PrivateRoute path="/cart" exact component={Cart} />
						<PrivateRoute
							path="/register/internal/branch"
							component={RegisterBranchUser}
						/>
						<PrivateRoute
							path="/register/internal/admin"
							component={RegisterAdminUser}
						/>
						<PrivateRoute path="/additem/admin" component={AddItem} />

						{/* 404 */}
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
