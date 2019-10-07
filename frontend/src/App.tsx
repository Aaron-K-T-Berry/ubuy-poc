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
import AdminManagement from "./pages/management/Admin";
import BranchManagement from "./pages/management/Branch";
import Success from "./pages/common/success";

const App: React.FC = () => {
	// Setup react hooks
	const [authedState, setAuthedSate] = useState(authHelper.isAuthed);

	return (
		<div>
			<Router>
				<SiteHeader isAuthenticated={authedState} authFunc={setAuthedSate} />
				<div className="router-wrapper">
					<Switch>
						<Route path="/" exact component={HomePage} />
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
							path="/account/m"
							userRole={RouteUserTypes.ADMIN}
							exact
							component={AccountM}
						/>
						<PrivateRoute
							path="/admin/account/view/all"
							userRole={UserTypes.Admin}
							component={ViewAllAccount}
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
						<PrivateRoute
							path="/admin/item/edit"
							component={EditItem}
							userRole={UserTypes.Admin}
						/>
						<PrivateRoute
							path="/admin/item/add"
							component={AddItem}
							userRole={UserTypes.Admin}
						/>
						<PrivateRoute
							userRole={UserTypes.Admin}
							path="/admin/item/view/all"
							component={ViewAllItems}
						/>

						<PrivateRoute
							path="/management/admin"
							component={AdminManagement}
							userRole={UserTypes.Admin}
						/>
						<PrivateRoute
							path="/management/branch"
							component={BranchManagement}
							userRole={UserTypes.Internal}
						/>

						<Route path="/common/success" component={Success} />

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
