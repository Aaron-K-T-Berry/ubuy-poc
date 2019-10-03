import React from "react";
import "../../styles/App.css";
import dummy_data, { User } from "./data/SellersStub";
import UserC from "../SellerC";
import { Container,Button, Row } from "react-bootstrap";

export interface SellerState {
	users: User[];
}

export default class SellerViewerCart extends React.Component<{}, SellerState> {
	constructor(props: any) {
		super(props);
		this.state = {
			users: dummy_data
		};
	}
	render() {
		return (
			<div>
				<Container fluid>
					<Row noGutters={true} className="justify-content-md-center">
						{this.state.users.map(user => {
							return <UserC key={user.id} user={user} />;
						})}
				
					</Row>
				
				</Container>

			</div>
		);
	}
}
