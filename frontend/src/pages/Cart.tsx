import React from "react";
import "../styles/App.css";
import ItemViewerCart from "../components/ItemViewer/ItemViewerCart";
import { Button } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";

export interface CartProps {}

export interface CartState {}

export default class AccountInfo extends React.Component<CartProps, CartState> {
	async componentDidMount() {
		const res = await axios.get("http://localhost:4000/cart", {
			withCredentials: true
		});
		console.log(res);

		const user: CartState = {
			firstName: res.data.user.firstName,
			lastName: res.data.user.lastName,
			email: res.data.user.email
		};
		this.setState({ ...user });
	}

	componentWillUnmount() {}

	render() {
		return (
			<div className="body-wrapper flex-center">
				<div className="body-heading">
					Shopping Cart
					<data>
									<text> :$88</text>
								</data>
								<NavLink to="/cartview"><Button className="button">Continue to Checkout</Button></NavLink>
				</div>
				
				<div className="body-content">
					<ItemViewerCart />
				</div>
			</div>
		);

	}
}
