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
import ViewAllItems from "./pages/ViewAllItems";
import ViewItem from "./pages/ViewItem";

const App: React.FC = () => {
	return (
		<div>
			<Router>
				<SiteHeader />
				<div className="router-wrapper">
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/login" exact component={LoginForm} />
						<Route path="/account" exact component={AccountInfo} />
						<Route path="/cart" exact component={Cart} />
						<Route
							path="/register/internal/branch"
							component={RegisterBranchUser}
						/>
						<Route
							path="/register/internal/admin"
							component={RegisterAdminUser}
						/>
						<Route path="/register/user" component={RegisterCustomer} />
						<Route path="/viewitem" component={ViewItem} />
						<Route path="/item/add/admin" component={AddItem} />
						<Route path="/item/viewall/admin" component={ViewAllItems} />
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
