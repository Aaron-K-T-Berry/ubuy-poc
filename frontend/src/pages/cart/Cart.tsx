import React from "react";
import "../../styles/App.css";
import { Button, Table } from "react-bootstrap";
import ApiHelper from "../../common/ApiHelper";
import { itemIdToItem } from "../../common/Mappers/ItemMapper";
import { Link } from "react-router-dom";

export interface CartProps {}

export interface CartState {
	cart: {
		userId: string;
		items: any[];
	};
}

export default class AccountInfo extends React.Component<CartProps, CartState> {
	constructor(props: any) {
		super(props);

		this.state = {
			cart: {
				userId: "",
				items: []
			}
		};
	}
	async componentDidMount() {
		await this.updatedCartContents();
	}

	updatedCartContents = async () => {
		const res = await ApiHelper.cart.get();
		if (res !== undefined && res.items !== undefined) {
			const mapped = await itemIdToItem(res.items);
			this.setState({ cart: { userId: res.userId, items: mapped } });
		} else {
			this.setState({
				cart: {
					userId: "",
					items: []
				}
			});
		}
	};

	calculateCartValue = () => {
		let value = 0;
		this.state.cart.items.forEach(item => {
			if (item !== undefined) {
				value += item.price;
			}
		});
		return value;
	};

	handleCheckout = () => {
		if (this.state.cart.items.length > 0) {
			window.location.href = "/cart/payment";
		}
	};

	handleEmptyCart = async () => {
		if (this.state.cart.items.length > 0) {
			await ApiHelper.cart.empty();
			window.location.reload();
		}
	};
	handleRemove = async (itemId: string) => {
		await ApiHelper.cart.remove(itemId);
		window.location.reload();
	};

	render() {
		return (
			<div className="body-wrapper flex-center">
				<div className="body-heading">Your Cart</div>
				<div className="body-content">
					<div style={{ margin: "10px" }}>
						<Button
							style={{ margin: "10px" }}
							onClick={() => {
								this.handleEmptyCart();
							}}
							variant="danger"
						>
							Empty Cart
						</Button>
						<Button
							style={{ margin: "10px" }}
							onClick={() => {
								this.handleCheckout();
							}}
						>
							Continue to checkout
						</Button>
					</div>
					<Table>
						<tr>
							<th>Item</th>

							<th>Price</th>
							<th>Actions</th>
						</tr>
						{this.state.cart.items.map(item => {
							if (item !== undefined) {
								return (
									<tr>
										<td>
											<Link to={`/item/${item._id}/view`}>{item.name}</Link>
										</td>

										<td>${item.price}</td>
										<td>
											<Button
												onClick={() => {
													this.handleRemove(item._id);
												}}
											>
												Remove
											</Button>
										</td>
									</tr>
								);
							}
						})}
						<tr>
							<th>Total:</th>
							<td>${this.calculateCartValue()}</td>
							<td />
						</tr>
					</Table>
				</div>
			</div>
		);
	}
}
