import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import SiteHeader from "./Components/SiteHeader/SiteHeader";
import SiteFooter from "./Components/SiteFooter/SiteFooter";
import HomePage from "./pages/Home";
import LoginForm from "./pages/Login";
import AccountInfo from "./pages/AccountInfo";
import Cart from "./pages/Cart";
import RegisterBranchUser from "./pages/Registration/RegisterBranch";
import RegisterAdminUser from "./pages/Registration/RegisterAdmin";
import RegisterCustomer from "./pages/Registration/RegisterCustomer";
import AddItem from "./pages/AddItem";
import PrivateRoute, { RouteUserTypes } from "./Components/PrivateRoute";
import authHelper from "./common/AuthHelper";
import ViewAllItems from "./pages/ViewAllItems";
import { UserTypes } from "./Components/UserRegistrationForm";

const App: React.FC = () => {
	// Setup react hooks
	const [authedState, setAuthedSate] = useState(authHelper.isAuthed);

	return (
		<div>
			<Router>
				<SiteHeader isAuthenticated={authedState} />
				<div className="router-wrapper">
					<Switch>
						{/* Public routes */}
						<Route path="/" exact component={HomePage} />
						<Route
							path="/login"
							exact
							render={props => (
								<LoginForm {...props} authFunc={setAuthedSate} />
							)}
						/>
						<Route path="/register/user" component={RegisterCustomer} />

						{/* Authenticated routes */}
						<PrivateRoute path="/account" exact component={AccountInfo} />
						<PrivateRoute path="/cart" exact component={Cart} />
						<PrivateRoute
							path="/register/internal/branch"
							component={RegisterBranchUser}
							userRole={RouteUserTypes.BRANCH}
						/>
						<PrivateRoute
							path="/register/internal/admin"
							component={RegisterAdminUser}
						/>

						<PrivateRoute
							userRole={UserTypes.Admin}
							path="/additem/admin"
							component={AddItem}
						/>
						<PrivateRoute
							userRole={UserTypes.Admin}
							path="/item/add/admin"
							component={AddItem}
						/>
						<PrivateRoute
							userRole={UserTypes.Admin}
							path="/item/viewall/admin"
							component={ViewAllItems}
						/>

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
