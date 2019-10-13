import React from "react";
import "../../styles/App.css";
import "./styles/OrderViewerTable.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface OrderRowProp {
	order: {
		_id: number;
		user: any;
		items: any[];
		billingAddress: string;
		deliveryAddress: string;
		orderTime: string;
		status: string;
	};
	handleViewItem: any;
	handleEditItem: any;
}

export interface OrderRowState {}

export default class OrderRow extends React.Component<
	OrderRowProp,
	OrderRowState
> {
	calculateCartSize = () => {
		let totalItems = 0;
		let totalValue = 0.0;
		this.props.order.items.forEach(item => {
			totalItems += Number.parseInt(item.quantity, 2);
			totalValue += Number.parseFloat(item.item.price);
		});

		return (
			<p>
				${totalValue} | {totalItems} item(s)
			</p>
		);
	};

	render() {
		console.log(this.props.order);

		return (
			<tr>
				<td>
					{this.props.order.user.firstName} {this.props.order.user.lastName}
				</td>
				<td>{this.calculateCartSize()}</td>
				<td>{this.props.order.deliveryAddress}</td>
				<td>{new Date(this.props.order.orderTime).toLocaleString()}</td>
				<td>{this.props.order.status}</td>
				<td>
					<ButtonGroup>
						<Button
							variant="info"
							onClick={() => {
								this.props.handleViewItem(
									this.props.order.user._id,
									this.props.order._id
								);
							}}
						>
							View
						</Button>
						<Button
							variant="warning"
							onClick={() => {
								this.props.handleEditItem(
									this.props.order.user._id,
									this.props.order._id
								);
							}}
						>
							Edit
						</Button>
					</ButtonGroup>
				</td>
			</tr>
		);
	}
}
