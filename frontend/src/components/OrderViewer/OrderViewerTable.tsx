import React from "react";
import "../../styles/App.css";
import "./styles/OrderViewerTable.css";
import Table from "react-bootstrap/Table";
import OrderRow from "./OrderRow";

export interface OrderViewerTableProps {
	orders: any[];
	handleViewOrder: any;
	handleEditOrder: any;
}
export interface OrderViewerTableState {}

export default class OrderViewerTable extends React.Component<
	OrderViewerTableProps,
	OrderViewerTableState
> {
	render() {
		return (
			<Table striped bordered className="table">
				<thead>
					<tr>
						<th>User</th>
						<th>Cart Size</th>
						<th>Delivery Address</th>
						<th>Order Time (Local)</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{this.props.orders.map(order => {
						return (
							<OrderRow
								order={order}
								handleViewItem={this.props.handleViewOrder}
								handleEditItem={this.props.handleEditOrder}
							/>
						);
					})}
				</tbody>
			</Table>
		);
	}
}
