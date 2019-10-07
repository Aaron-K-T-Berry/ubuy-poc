import React from "react";
import "../../styles/App.css";
import "./styles/BranchViewerTable.css";
import { Button, ButtonGroup } from "react-bootstrap";

export interface BranchRowProp {
	item: {
		_id: number;
		name: string;
		address: string;
	};
	handleViewItem: any;
	handleEditItem: any;
}

export interface BranchRowState {}

export default class BranchRow extends React.Component<
	BranchRowProp,
	BranchRowState
> {
	render() {
		return (
			<tr>
				<td className="table-column-id">{this.props.item._id}</td>
				<td className="table-column-name">{this.props.item.name}</td>
				<td className="table-column-address">{this.props.item.address}</td>
				<td className="table-column-items"></td>
				<td className="table-column-actions">
					<ButtonGroup>
						<Button
							variant="info"
							onClick={() => {
								this.props.handleViewItem(this.props.item._id);
							}}
						>
							View
						</Button>
						<Button
							variant="warning"
							onClick={() => {
								this.props.handleEditItem(this.props.item._id);
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
