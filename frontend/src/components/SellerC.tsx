import React from "react";
import "../styles/App.css";
import { Card, Button } from "react-bootstrap";

export interface SellerProp {
	user: {
		id: string;
		name: string;
		address: string;
	};
}

export default class UserC extends React.Component<SellerProp, {}> {
	render() {
		return (
			<Card style={{ width: "250px", height: "150px" }}>
				<Card.Body>
					<Card.Title>{this.props.user.id}</Card.Title>
					<Card.Subtitle>${this.props.user.name}</Card.Subtitle>
				</Card.Body>
				<Button className="button-card" variant="danger">
					Remove
				</Button>
			</Card>
		);
	}
}
