import React from "react";
import "../../styles/App.css";
import OrderTable from "../../components/OrderViewer/OrderViewerTable";
import ApiHelper from "../../common/ApiHelper";
import { findBranchDetails } from "../../common/Mappers/BranchMapper";
import { findItemDetail } from "../../common/Mappers/ItemMapper";

export interface ViewAllOrdersProps {}
export interface ViewAllOrdersState {
	orders: any[];
}

export default class ViewAllOrders extends React.Component<
	ViewAllOrdersProps,
	ViewAllOrdersState
> {
	constructor(props: any) {
		super(props);
		this.state = { orders: [] };
	}

	async componentDidMount() {
		const orders = await ApiHelper.order.getAll();
		const branches = await ApiHelper.branch.getAll();
		const items = await ApiHelper.item.getAll();

		const mappedOrders = await Promise.all(
			orders.map(async (order: any) => {
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
					user: await ApiHelper.user.getSingleAdmin(order.userId),
					billingAddress: order.billingAddress,
					deliveryAddress: order.deliveryAddress,
					status: order.status,
					orderTime: order.orderTime
				};
			})
		);
		this.setState({ ...this.state, orders: mappedOrders });
	}

	handleViewOrder(userId: string, orderId: string) {
		window.open(`/order/view/${userId}/${orderId}`, "_blank");
	}
	handleEditOrder(userId: string, orderId: string) {
		window.open(`/order/edit/${userId}/${orderId}`, "_blank");
	}

	render() {
		return (
			<div className="content-body">
				<div className="body-heading">View All Orders</div>
				<div>
					<OrderTable
						orders={this.state.orders}
						handleViewOrder={this.handleViewOrder}
						handleEditOrder={this.handleEditOrder}
					/>
				</div>
			</div>
		);
	}
}
