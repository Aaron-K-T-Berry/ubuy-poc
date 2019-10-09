import React from "react";
import "../../styles/App.css";
import "./styles/ItemViewerTable.css";
import Table from "react-bootstrap/Table";
import ItemRow from "./ItemRow";

export interface ItemViewerTableProps {
	items: any[];
	handleViewItem: any;
	handleEditItem: any;
}
export interface ItemViewerTableState {}

export default class ItemViewerTable extends React.Component<
	ItemViewerTableProps,
	ItemViewerTableState
> {


	render() {
		return (
			<Table striped bordered className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
						<th>Description</th>
						<th>Branch</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{this.props.items.map(item => {
						return (
							<ItemRow
								item={item}
								handleViewItem={this.props.handleViewItem}
								handleEditItem={this.props.handleEditItem}
							/>
						);
					})}
				</tbody>
			</Table>
		);
	}
}
