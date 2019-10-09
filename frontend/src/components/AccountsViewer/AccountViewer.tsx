import React from "react";
import "../../styles/App.css";
import dummy_data, { UserRow as User } from "./data/UsersStub";
import { Container, Row } from "react-bootstrap";

export interface UserState {
	user: User[];
}

export default class AccountViewer extends React.Component<{}, UserState> {
	constructor(props: any) {
		super(props);
		this.state = {
			user: dummy_data
		};
	}
	render() {
		return (
			<div>
				<Container fluid>
				
				</Container>
			</div>
		);
	}
}
