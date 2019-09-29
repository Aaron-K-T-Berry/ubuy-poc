import React from "react";
import "../styles/App.css";
import PageContent from "../PageContent";
import ItemViewerCart from "../components/ItemViewer/ItemViewerCart";
import {
	Button, Row, Col, Container,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label
} from "react-bootstrap";
import axios from "axios";

export interface CartProps {}

export interface CartState {
	
}

export default class AccountInfo extends React.Component<
	CartProps,
	CartState
> {

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
		<div className="main-body flex-center">
			<div className="body-heading">Shopping Cart
				<Button className="button">Continue to Checkout</Button>
			</div>
			<div className="main-body-2">
        <ItemViewerCart />
      </div>
	  </div>
		);
	}
}
