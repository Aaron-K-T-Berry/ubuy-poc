import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "../../styles/App.css";
import "./styles/Animations.css";
import "./styles/SiteHeader.css";
import Search from "../Search";
import AuthHelper from "../../common/AuthHelper";

export interface SiteHeaderProps {
	authContext: any;
	authFunc: Function;
}
export interface SiteHeaderState {}

export default class SiteHeader extends React.Component<
	SiteHeaderProps,
	SiteHeaderState
> {
	render() {
		return (
			<div className="site-header">
				<Navbar className="navbar">
					<Navbar.Brand href="/">
						<h1 className="logo">
							<img
								className="logo-image"
								src="/images/branding/logo.jpg"
								alt="uBay-logo"
							></img>
							Buy
						</h1>
					</Navbar.Brand>
					<Search />
					<Nav>
						{this.props.authContext.isAuthed
							? this.buildAuthedNav()
							: this.buildUnAuthedNav()}
					</Nav>
				</Navbar>
			</div>
		);
	}

	buildAuthedNav = () => {
		return (
			<>
				<NavLink
					className="navlink"
					style={{ textDecoration: "none" }}
					activeStyle={{ color: "steelblue" }}
					to="/account/user"
				>
					<h2> Account </h2>
				</NavLink>

				{true ? this.buildAdminNav() : {}}

				<NavLink
					className="navlink"
					style={{ textDecoration: "none" }}
					activeStyle={{
						color: "steelblue",
						borderBottom: "1px, solid, red"
					}}
					to="/cart"
				>
					<img
						src="/images/branding/credit_card_shopping.png"
						width="50"
						height="50"
						alt="uBay-logo"
					/>
				</NavLink>

				<NavLink
					className="navlink"
					style={{ textDecoration: "none" }}
					activeStyle={{ color: "steelblue" }}
					onClick={() => {
						AuthHelper.logout();
						this.props.authFunc({ isAuthed: false });
					}}
					to="/logout"
				>
					<h2>Logout</h2>
				</NavLink>
			</>
		);
	};

	buildAdminNav = () => {
		return (
			<>
				<NavLink
					className="navlink"
					style={{ textDecoration: "none" }}
					activeStyle={{ color: "steelblue" }}
					to="/management/admin"
				>
					<h2> Management </h2>
				</NavLink>
			</>
		);
	};

	buildUnAuthedNav = () => {
		return (
			<>
				<NavLink
					className="navlink"
					style={{ textDecoration: "none" }}
					activeStyle={{ color: "steelblue" }}
					to="/register/user"
				>
					<h2> Register </h2>
				</NavLink>

				<NavLink
					className="navlink"
					style={{ textDecoration: "none" }}
					activeStyle={{ color: "steelblue" }}
					to="/login"
				>
					<h2> Login </h2>
				</NavLink>
			</>
		);
	};
}
