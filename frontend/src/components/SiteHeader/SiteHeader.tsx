import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "../../styles/App.css";
import "./styles/Animations.css";
import "./styles/SiteHeader.css";
import Search from "../Search";
import AuthHelper from "../../common/AuthHelper";
import ApiHelper from "../../common/ApiHelper";
import { itemIdToItem } from "../../common/Mappers/ItemMapper";

export interface SiteHeaderProps {
	authContext: any;
	authFunc: Function;
	cartContext: any;
	cartFunc: Function;
}
export interface SiteHeaderState {}

export default class SiteHeader extends React.Component<
	SiteHeaderProps,
	SiteHeaderState
> {
	async componentDidMount() {
		if (this.props.authContext.isAuthed) {
			const updatedCart = await this.props.cartContext.getCart();
			this.props.cartFunc({ ...this.props.cartContext, cart: updatedCart });
		}
	}

	buildCartValue = () => {
		if (
			this.props.cartContext.cart !== undefined &&
			this.props.cartContext.cart.items !== undefined
		) {
			let value = 0;
			const cartItems = this.props.cartContext.cart.items;
			cartItems.forEach((item: any) => {
				if (item !== undefined && item.price !== undefined) {
					value += item.price;
				}
			});
			return <p>${value}</p>;
		}
		return <></>;
	};

	isInternalUser = () => {
		const userType = this.props.authContext.userType;

		const internalTypes = ["ADMIN", "INTERNAL"];
		return internalTypes.indexOf(userType) > -1;
	};

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

				{this.isInternalUser() && this.buildAdminNav()}

				<NavLink
					className="navlink"
					style={{ textDecoration: "none" }}
					activeStyle={{
						color: "steelblue",
						borderBottom: "1px, solid, red"
					}}
					to="/cart"
				>
					<div className="cart-container">
						<img
							src="/images/branding/cart.png"
							width="50"
							height="50"
							alt="uBay-logo"
						/>
						<div className="cart-text">{this.buildCartValue()}</div>
					</div>
				</NavLink>

				<NavLink
					className="navlink"
					style={{ textDecoration: "none" }}
					activeStyle={{ color: "steelblue" }}
					onClick={() => {
						AuthHelper.logout();
						this.props.authFunc({ isAuthed: false });
					}}
					to="/"
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
					to={`/management/${this.props.authContext.userType.toLowerCase()}`}
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
