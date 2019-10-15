import React from "react";
import "../../styles/App.css";
import "./styles/ItemCard.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ApiHelper from "../../common/ApiHelper";

export interface ItemProp {
	item: any;
	cartContext: any;
	cartFunc: any;
}

export default class ItemCard extends React.Component<ItemProp, {}> {
	handleAddToCart = async () => {
		await ApiHelper.cart.put(this.props.item._id);
		const updatedCart = await this.props.cartContext.getCart();
		this.props.cartFunc({ ...this.props.cartContext, cart: updatedCart });
	};

	render() {
		return (
			<Card style={{ width: "18rem" }}>
				<Link className="link" to={`/item/${this.props.item._id}/view/`}>
					<Card.Img variant="top" src={this.props.item.photo} />
				</Link>
				<Card.Body>
					<Card.Title>{this.props.item.name}</Card.Title>
					<Card.Subtitle>${this.props.item.price}</Card.Subtitle>
					<Card.Text>{this.props.item.desc}</Card.Text>
				</Card.Body>

				<Button
					className="button-card"
					variant="info"
					onClick={this.handleAddToCart}
				>
					Add to cart
				</Button>
			</Card>
		);
	}
}
