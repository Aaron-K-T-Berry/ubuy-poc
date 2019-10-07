import React from "react";
import "../../styles/App.css";
import "./styles/BranchViewerTable.css";
import Table from "react-bootstrap/Table";
import BranchRow from "./BranchRow";

export interface BranchViewerTableProps {
	items: any[];
	handleViewItem: any;
	handleEditItem: any;
}
export interface BranchViewerTableState {}

export default class BranchViewerTable extends React.Component<
	BranchViewerTableProps,
	BranchViewerTableState
> {
	render() {
		return (
			<Table striped bordered className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Address</th>
						<th>Items</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{this.props.items.map(item => {
						return (
							<BranchRow
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
