import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import authHelper from "./common/AuthHelper";
import PrivateRoute from "./components/PrivateRoute";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import { UserTypes } from "./components/UserRegistrationForm";
import AccountInfo from "./pages/AccountInfo";
import AddItem from "./pages/items/AddItem";
import Cart from "./pages/cart/Cart";
import CartView from "./pages/cart/PaymentView";
import Success from "./pages/common/success";
import EditItem from "./pages/items/EditItem";
import HomePage from "./pages/Home";
import LoginForm from "./pages/Login";
import AdminManagement from "./pages/management/Admin";
import BranchManagement from "./pages/management/Branch";
import PageNotFound from "./pages/PageNotFound";
import RegisterAdminUser from "./pages/Registration/RegisterAdmin";
import RegisterBranchUser from "./pages/Registration/RegisterBranch";
import RegisterCustomer from "./pages/Registration/RegisterCustomer";
import ViewAllAccount from "./pages/ViewAllAccount";
import ViewAllItems from "./pages/items/ViewAllItems";
import ViewItem from "./pages/items/ViewItem";
import "./styles/App.css";
import BranchViewAll from "./pages/branch/BranchViewAll";
import BranchViewSingle from "./pages/branch/BranchViewSingle";
import BranchEditSingle from "./pages/branch/BranchEditSingle";
import BranchAddSingle from "./pages/branch/BranchAddSingle";
import { RouteUserTypes } from "./common/ApiHelper/auth/interfaces";
import ViewAllOrders from "./pages/order/ViewAllOrders";
import ViewSingleOrder from "./pages/order/ViewSingleOrder";
import EditAccount from "./pages/account/EditAccount";
import ApiHelper from "./common/ApiHelper";
import { itemIdToItem } from "./common/Mappers/ItemMapper";

const App: React.FC = () => {
	// Setup react hooks
	const [authedState, setAuthedSate] = useState({
		isAuthed: authHelper.hasToken(),
		userType: authHelper.getUserRole()
	});
	const [cartState, updateCartState] = useState({
		cart: { userId: "", items: [] },
		getCart: async () => {
			const userCart = await ApiHelper.cart.get();
			if (userCart !== undefined && userCart.items !== undefined) {
				const mappedItems = {
					userId: userCart.userId,
					items: await itemIdToItem(userCart.items)
				};
				return mappedItems;
			}
		}
	});

	return (
		<div>
			<Router>
				<SiteHeader
					authContext={authedState}
					authFunc={setAuthedSate}
					cartContext={cartState}
					cartFunc={updateCartState}
				/>
				<div className="router-wrapper">
					<Switch>
						<Route
							path="/"
							exact
							render={props => (
								<HomePage
									{...props}
									cartFunc={updateCartState}
									cartContext={cartState}
								/>
							)}
						/>
						<Route
							path="/login"
							exact
							render={props => (
								<LoginForm {...props} authFunc={setAuthedSate} />
							)}
						/>

						<PrivateRoute path="/account/user" exact component={AccountInfo} />
						<PrivateRoute
							path="/account/user/edit/:userId"
							exact
							component={EditAccount}
						/>

						<PrivateRoute
							path="/user/view/all"
							userRole={UserTypes.Admin}
							component={ViewAllAccount}
						/>

						<PrivateRoute path="/cart" exact component={Cart} />
						<PrivateRoute path="/cart/payment" exact component={CartView} />

						<Route path="/register/user" component={RegisterCustomer} />
						<PrivateRoute
							path="/register/internal/branch"
							component={RegisterBranchUser}
							userRole={RouteUserTypes.INTERNAL}
						/>
						<PrivateRoute
							path="/register/internal/admin"
							component={RegisterAdminUser}
							userRole={RouteUserTypes.ADMIN}
						/>

						<Route
							path="/item/:id/view"
							render={props => (
								<ViewItem
									{...props}
									cartContext={cartState}
									cartFunc={updateCartState}
								/>
							)}
						/>
						<PrivateRoute
							path="/item/:id/edit"
							component={EditItem}
							userRole={UserTypes.Admin}
						/>
						<PrivateRoute
							path="/item/add"
							component={AddItem}
							userRole={UserTypes.Admin}
						/>
						<PrivateRoute
							path="/item/view/all"
							component={ViewAllItems}
							userRole={UserTypes.Admin}
						/>

						<Route path="/branch/:id/view" component={BranchViewSingle} />
						<PrivateRoute
							path="/branch/:id/edit"
							component={BranchEditSingle}
							userRole={UserTypes.Internal}
						/>
						<PrivateRoute
							path="/branch/add"
							component={BranchAddSingle}
							userRole={UserTypes.Internal}
						/>
						<PrivateRoute
							path="/branch/view/all"
							component={BranchViewAll}
							userRole={UserTypes.Internal}
						/>

						<PrivateRoute
							path="/order/admin/view/all"
							component={ViewAllOrders}
							userRole={UserTypes.Internal}
						/>

						<PrivateRoute
							path="/order/view/:userId/:orderId"
							component={ViewSingleOrder}
							userRole={UserTypes.Internal}
						/>

						<PrivateRoute
							path="/management/admin"
							component={AdminManagement}
							userRole={UserTypes.Admin}
						/>
						<PrivateRoute
							path="/management/internal"
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
