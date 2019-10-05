import React, { useState } from "react";
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
import CartView from "./pages/CartView";
import AdminView from "./pages/AdminView";
import AddItem from "./pages/AddItem";
import PrivateRoute, { RouteUserTypes } from "./components/PrivateRoute";
import authHelper from "./common/AuthHelper";
import { UserTypes } from "./components/UserRegistrationForm";
import AccountM from "./pages/AccountM";
import ViewAllItems from "./pages/ViewAllItems";
import ViewAllAccount from "./pages/ViewAllAccount";
import ViewItem from "./pages/ViewItem";
import EditItem from "./pages/EditItem";

const App: React.FC = () => {
	// Setup react hooks
	const [authedState, setAuthedSate] = useState(authHelper.isAuthed);

	return (
		<div>
			<Router>
				<SiteHeader isAuthenticated={authedState} />
				<div className="router-wrapper">
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/cart" exact component={Cart} />
						<Route
							path="/login"
							exact
							render={props => (
								<LoginForm {...props} authFunc={setAuthedSate} />
							)}
						/>

						<PrivateRoute path="/account/user" exact component={AccountInfo} />
						<Route path="/account/admin" exact component={AdminView} />
						<PrivateRoute
							path="/account/view-all"
							userRole={RouteUserTypes.ADMIN}
							exact
							component={ViewAllAccount}
						/>
						<PrivateRoute
							path="/account/m"
							userRole={RouteUserTypes.ADMIN}
							exact
							component={AccountM}
						/>

						<PrivateRoute path="/cart" exact component={Cart} />
						<PrivateRoute path="/cart/view" exact component={CartView} />

						<Route path="/register/user" component={RegisterCustomer} />
						<PrivateRoute
							path="/register/internal/branch"
							component={RegisterBranchUser}
							userRole={RouteUserTypes.BRANCH}
						/>
						<PrivateRoute
							path="/register/internal/admin"
							component={RegisterAdminUser}
							userRole={RouteUserTypes.ADMIN}
						/>

						<Route path="/item/view" component={ViewItem} />
						<Route path="/item/edit/admin" component={EditItem} />
						<Route path="/item/add/admin" component={AddItem} />
						<Route path="/item/viewall/admin" component={ViewAllItems} />
						<Route
							path="/item/viewall/adminaccount"
							component={ViewAllAccount}
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
