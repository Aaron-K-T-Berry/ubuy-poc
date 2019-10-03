import React from "react";
import "../../styles/App.css";
import "./styles/ItemViewerTable.css";
import { Button, ButtonGroup } from "react-bootstrap";

export interface ItemProp {
	item: {
		id: number;
		name: string;
		price: string;
		branch: string;
		desc: string;
	};
}

export default class ItemRow extends React.Component<ItemProp, {}> {
	render() {
		return (
			<tr>
				<td className="table-column-id">{this.props.item.id}</td>

				<td className="table-column-name">{this.props.item.name}</td>

				<td className="table-column-price">${this.props.item.price}</td>

				<td className="table-column-desc">{this.props.item.desc}</td>

				<td className="table-column-branch">{this.props.item.branch}</td>

				<td className="table-column-button">
					<ButtonGroup>
						<Button variant="info">View</Button>
						<Button variant="warning">Edit</Button>
						<Button variant="danger">Delete</Button>
					</ButtonGroup>
				</td>
			</tr>
		);
	}
}
