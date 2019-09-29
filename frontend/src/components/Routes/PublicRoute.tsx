import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const isLogin = () => {
	console.log("hit");

	return false;
}; 

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
	return (
		<Route
			{...rest}
			render={props =>
				isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
