import React from "react";
import "../../styles/App.css";
import "./styles/ItemCard.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface ItemProp {
	item: {
		id: number;
		name: string;
		price: string;
		desc: string;
		img: string;
	};
}

export default class ItemCard extends React.Component<ItemProp, {}> {
	render() {
		return (
			<Link
				className="link"
				to={{
					pathname: "/item/view",
					state: {
						id: this.props.item.id
					}
				}}
			>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant="top"
						src={`./images/placeholder_assets/${this.props.item.img}`}
					/>
					<Card.Body>
						<Card.Title>{this.props.item.name}</Card.Title>
						<Card.Subtitle>${this.props.item.price}</Card.Subtitle>
						<Card.Text>{this.props.item.desc}</Card.Text>
					</Card.Body>
					<Button className="button-card" variant="info">
						Add to cart
					</Button>
				</Card>
			</Link>
		);
	}
}
