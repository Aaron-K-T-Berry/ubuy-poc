import React from "react";
import { Route, Redirect } from "react-router-dom";
import tokenStorage from "../../common/TokenStorage";

export enum RouteUserTypes {
	USER = "USER",
	BRANCH = "BRANCH",
	ADMIN = "ADMIN"
}

const isLogin = (authLevel: string | undefined) => {
	if (tokenStorage.getToken() !== null) {
		return true;
	}
	return false;
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
				isLogin(authLevel) ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;
