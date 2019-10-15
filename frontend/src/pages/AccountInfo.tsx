import React from "react";
import "../styles/App.css";
import ApiHelper from "../common/ApiHelper";
import { CookieHelper } from "../common/AuthHelper";
import jwtDecode from "jwt-decode";
import { findBranchDetails } from "../common/Mappers/BranchMapper";
import { findItemDetail } from "../common/Mappers/ItemMapper";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface AccountInfoProps {}

export interface AccountInfoState {
	user: {
		_id: string;
		email: string;
		firstName: string;
		lastName: string;
	};
	orders: {
		_id: string;
		orderTime: string;
		billingAddress: string;
		deliveryAddress: string;
		items: any[];
		status: string;
	}[];
}

export default class AccountInfo extends React.Component<
	AccountInfoProps,
	AccountInfoState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			user: {
				_id: "",
				email: "",
				firstName: "",
				lastName: ""
			},
			orders: []
		};
	}

	async componentDidMount() {
		const token = CookieHelper.getToken();
		const jwt: { email: string } = jwtDecode(token as string);
		const result = await ApiHelper.user.getSingle(jwt.email);
		const userOrders = await ApiHelper.order.getUserOrders(result._id);
		const branches = await ApiHelper.branch.getAll();
		const items = await ApiHelper.item.getAll();

		const mappedState = {
			user: result,
			orders: await Promise.all(
				userOrders.map(async (order: any) => {
					return {
						_id: order._id,
						items: await Promise.all(
							order.items.map(async (item: any) => {
								return {
									quantity: item.quantity,
									branch: findBranchDetails(item.branchId, branches),
									item: findItemDetail(item.itemId, items)
								};
							})
						),
						billingAddress: order.billingAddress,
						deliveryAddress: order.deliveryAddress,
						status: order.status,
						orderTime: order.orderTime
					};
				})
			)
		};
		this.setState({ ...(mappedState as any) });
	}

	calculateTotal = (order: any) => {
		let currentValue = 0;
		order.items.forEach((lineItem: any) => {
			console.log(lineItem);
			
			if (lineItem.item !== undefined) {
				currentValue = currentValue + lineItem.quantity * lineItem.item.price;
			}
		});
		return currentValue;
	};

	render() {
		return (
			<div className="body-wrapper flex-center">
				<div className="body-heading">
					Account Information
					<Button
						onClick={() => {
							window.location.href = `/account/user/edit/${this.state.user._id}`;
						}}
					>
						Update Account Info
					</Button>
				</div>
				<div className="body-content input">
					<b>Email:</b>
					<p>{this.state.user.email}</p>
					<b>First Name:</b>
					<p>{this.state.user.firstName}</p>
					<b>Last Name:</b>
					<p>{this.state.user.lastName}</p>

					<b>Orders:</b>
					<Table striped bordered className="table">
						<thead>
							<tr>
								<th>Order Id</th>
								<th>Date</th>
								<th>Total Value</th>
							</tr>
						</thead>
						<tbody>
							{this.state.orders.map(order => {
								return (
									<tr>
										<td>
											<Link
												to={`/order/view/${this.state.user._id}/${order._id}`}
											>
												{order._id}
											</Link>
										</td>
										<td>{new Date(order.orderTime).toLocaleString()}</td>
										<td>${this.calculateTotal(order)}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}
