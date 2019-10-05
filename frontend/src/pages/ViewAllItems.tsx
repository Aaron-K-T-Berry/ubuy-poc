import React from "react";
import "../styles/App.css";
import ItemTable from "../components/ItemViewer/ItemViewerTable";

export interface ViewItemState {}

export interface ViewItemProps {}

export default class ViewAllItems extends React.Component<
	ViewItemProps,
	ViewItemState
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
