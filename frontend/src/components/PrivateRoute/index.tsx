import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import Axios from "axios";
import env from "../../common/ConfigHelper"

export enum RouteUserTypes {
	USER = "USER",
	BRANCH = "BRANCH",
	ADMIN = "ADMIN"
}

const apiCheckTokenPaths = {
	USER: "/auth/checkTokenCustomer",
	BRANCH: "/auth/checkTokenBranch",
	ADMIN: "/auth/checkTokenAdmin"
};

export interface PrivateRouteProps {
	userRole?: RouteUserTypes;
	history?: any;
}
export interface PrivateRouteSate {
	haveAccess: boolean;
	loaded: boolean;
}

class PrivateRoute extends Component<PrivateRouteProps, PrivateRouteSate> {
	constructor(props: any) {
		super(props);
		this.state = {
			haveAccess: false,
			loaded: false
		};
	}

	componentDidMount() {
		this.checkAccess();
	}

	checkAccess = () => {
		let { userRole, history } = this.props;

		// Default to user auth if userRole is undefined
		if (userRole === undefined) {
			userRole = RouteUserTypes.USER;
		}
		Axios.get(env.API_HOSTNAME + apiCheckTokenPaths[userRole], {
			withCredentials: true
		})
			.then(() => {
				this.setState({
					haveAccess: true,
					loaded: true
				});
			})
			.catch(() => {
				history.push("/login");
			});
	};

	render() {
		//@ts-ignore
		const { component: Component, ...rest } = this.props;
		const { loaded } = this.state;
		if (!loaded) return null;
		return (
			<Route
				{...rest}
				render={props => {
					return this.state.haveAccess ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: "/"
							}}
						/>
					);
				}}
			/>
		);
	}
}

// @ts-ignore
export default withRouter(PrivateRoute);
