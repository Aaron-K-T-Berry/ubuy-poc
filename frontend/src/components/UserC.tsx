import React from "react";
import "../styles/App.css";
import { Card, Button } from "react-bootstrap";

export interface UserProp {
	user: {
		firstName: string;
	lastName: string;
	email: string;
	password?: string;
	address: string | undefined;
	};
}

export default class UserC extends React.Component<UserProp, {}> {
	render() {
		return (
			<Card style={{ width: "250px", height: "150px" }}>
				<Card.Body>
					<Card.Title>{this.props.user.firstName}</Card.Title>
					<Card.Subtitle>${this.props.user.lastName}</Card.Subtitle>
				</Card.Body>
				<Button className="button-card" variant="danger">
					Remove
				</Button>
			</Card>
		);
	}
}
