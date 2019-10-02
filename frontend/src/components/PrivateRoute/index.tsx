import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import Axios from "axios";

export enum RouteUserTypes {
	USER = "USER",
	BRANCH = "BRANCH",
	ADMIN = "ADMIN"
}

const apiHostname = "http://localhost:4000";

const apiCheckTokenPaths = {
	USER: "/auth/checkTokenCustomer",
	BRANCH: "/auth/checkTokenBranch",
	ADMIN: "/auth/checkTokenAdmin"
};

class PrivateRoute extends Component<
	{ userRole?: RouteUserTypes; history?: any },
	{}
> {
	state = {
		haveAccess: false,
		loaded: false
	};

	componentDidMount() {
		this.checkAccess();
	}

	checkAccess = () => {
		let { userRole, history } = this.props;
		let { haveAccess: haveAccess } = this.state;

		// Default to user auth if userRole is undefined
		if (userRole === undefined) {
			userRole = RouteUserTypes.USER;
		}
		Axios.get(apiHostname + apiCheckTokenPaths[userRole], {
			withCredentials: true
		})
			.then(res => {
				this.setState({
					haveAccess: true,
					loaded: true
				});
			})
			.catch(err => {
				history.push("/login");
			});
	};

	render() {
		//@ts-ignore
		const { component: Component, ...rest } = this.props;
		const { loaded, haveAccess: haveAccess } = this.state;
		if (!loaded) return null;
		return (
			<Route
				{...rest}
				render={props => {
					return haveAccess ? (
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
