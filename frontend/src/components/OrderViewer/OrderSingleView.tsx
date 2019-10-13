import React from "react";
import "../../styles/App.css";
import "./styles/OrderSingleView.css";
import { Table } from "react-bootstrap";
import ApiHelper from "../../common/ApiHelper";
import { findBranchDetails } from "../../common/Mappers/BranchMapper";
import { findItemDetail } from "../../common/Mappers/ItemMapper";
import { Link } from "react-router-dom";

export interface OrderSingleState {
	order: {
		_id: string;
		user: {
			firstName: string;
			lastName: string;
		};
		billingAddress: string;
		deliveryAddress: string;
		status: string;
		orderTime: string;
		items: any[];
	};
}

export interface OrderSingleProps {
	orderId: string;
	userId: string;
}

export default class OrderSingleView extends React.Component<
	OrderSingleProps,
	OrderSingleState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			order: {
				_id: "",
				user: {
					firstName: "",
					lastName: ""
				},
				billingAddress: "",
				deliveryAddress: "",
				status: "",
				orderTime: "",
				items: []
			}
		};
	}

	async componentDidMount() {
		const order = await ApiHelper.order.getSingle(
			this.props.userId,
			this.props.orderId
		);
		const branches = await ApiHelper.branch.getAll();
		const items = await ApiHelper.item.getAll();

		const mappedOrders = {
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
			user: await ApiHelper.user.getSingleAdmin(order.userId),
			billingAddress: order.billingAddress,
			deliveryAddress: order.deliveryAddress,
			status: order.status,
			orderTime: order.orderTime
		};
		this.setState({ order: mappedOrders });
	}

	render() {
		return (
			<div className="content-body flex-center">
				<div className="item-content height">
					<b>Order ID:</b>
					<p>{this.state.order._id}</p>

					<b>Status:</b>
					<p>{this.state.order.status.toUpperCase()}</p>

					<b>Order time:</b>
					<p>{new Date(this.state.order.orderTime).toLocaleString()}</p>

					<b>User:</b>
					<p>
						{this.state.order.user.firstName}, {this.state.order.user.lastName}
					</p>

					<b>Billing Address:</b>
					<p>{this.state.order.billingAddress}</p>

					<b>Delivery Address:</b>
					<p>{this.state.order.deliveryAddress}</p>

					<b>Order Items:</b>
					<Table striped bordered className="table">
						<thead>
							<tr>
								<th>Item Name</th>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{this.state.order.items.map(lineItem => {
								return (
									<tr>
										<td>
											<Link to={`/item/${lineItem.item._id}/view`}>
												{lineItem.item.name}
											</Link>
										</td>
										<td>{lineItem.quantity}</td>
										<td>${lineItem.item.price}</td>
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
