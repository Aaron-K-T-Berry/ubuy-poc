import React from "react";
import { Route, Redirect } from "react-router-dom";
import authHelper from "../../common/AuthHelper";

export enum RouteUserTypes {
	USER = "USER",
	BRANCH = "BRANCH",
	ADMIN = "ADMIN"
}

const isLogin = () => {
	return authHelper.isAuthenticated();
};

const PrivateRoute = ({
	component: Component,
	userType: authLevel,
	...rest
}: any) => {
	return (
		<Route
			{...rest}
			render={props =>
				isLogin() ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;
