import React from "react";
import "../../styles/App.css";
import "./styles/ItemViewerTable.css";
import { Button, ButtonGroup } from "react-bootstrap";

export interface ItemRowProp {
	item: {
		_id: number;
		name: string;
		price: string;
		branch: string;
		description: string;
	};
	handleViewItem: any;
	handleEditItem: any;
}

export interface ItemRowState {}

export default class ItemRow extends React.Component<
	ItemRowProp,
	ItemRowState
> {

	render() {
		return (
			<tr>
				<td className="table-column-id">{this.props.item._id}</td>

				<td className="table-column-name">{this.props.item.name}</td>

				<td className="table-column-price">${this.props.item.price}</td>

				<td className="table-column-desc">{this.props.item.description}</td>

				<td className="table-column-branch">{this.props.item.branch}</td>

				<td className="table-column-button">
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
