import React from "react";
import "../../styles/App.css";
import { Card, Button } from "react-bootstrap";

export interface ItemProp {
	item: {
		name: string;
		price: string;
		desc: string;
		photo: string;
	};
}

export default class ItemCardCart extends React.Component<ItemProp, {}> {
	render() {
		return (
			<Card style={{ width: "280px", height: "200px" }}>
				<Card.Body>
					<Card.Title>{this.props.item.name}</Card.Title>
					<Card.Subtitle>${this.props.item.price}</Card.Subtitle>
				</Card.Body>
				<Button className="button-card" variant="danger">
					Remove
				</Button>
			</Card>
		);
	}
}
