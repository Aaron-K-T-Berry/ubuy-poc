import React from "react";
import "../../styles/App.css";
import dummy_data, { User } from "./data/UsersStub";
import UserC from "../UserC";
import { Container,Button, Row } from "react-bootstrap";

export interface ItemState {
	users: User[];
}

export default class UserViewerCart extends React.Component<{}, ItemState> {
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
							return <UserC key={user.firstName} user={user} />;
						})}
				
					</Row>
				
				</Container>

			</div>
		);
	}
}
