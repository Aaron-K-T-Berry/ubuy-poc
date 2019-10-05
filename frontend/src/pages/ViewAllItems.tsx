import React from "react";
import "../styles/App.css";
import ItemTable from "../components/ItemViewer/ItemViewerTable";

export interface ViewAllItemsState {}
export interface ViewAllItemsProps {}

export default class ViewAllItems extends React.Component<
	ViewAllItemsProps,
	ViewAllItemsState
> {
	render() {
		return (
			<div className="content-body">
				<div className="body-heading">View All Items</div>
				<div>
					<ItemTable />
				</div>
			</div>
		);
	}
}
