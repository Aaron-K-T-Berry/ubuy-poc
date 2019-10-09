import React from "react";
import "../../styles/App.css";
import "./styles/ItemCard.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface ItemProp {
	item: any;
}

export default class ItemCard extends React.Component<ItemProp, {}> {
	render() {
		return (
			<Link className="link" to={`/item/${this.props.item._id}/view/`}>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={this.props.item.photo} />
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
