import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import ApiHelper from "../../common/ApiHelper";
import { RouteUserTypes } from "../../common/ApiHelper/auth/interfaces";

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

	async componentDidMount() {
		if (await ApiHelper.auth.checkAccess(this.props.userRole)) {
			this.setState({
				haveAccess: true,
				loaded: true
			});
		} else {
			this.props.history.push({
				pathname: "/login",
				state: {
					reason:
						"Your account does not have permission to access the requested path."
				}
			});
		}
	}

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
						<Redirect to={"/"} />
					);
				}}
			/>
		);
	}
}

// @ts-ignore
export default withRouter(PrivateRoute);
