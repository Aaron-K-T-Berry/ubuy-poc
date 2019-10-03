import React from "react";
import "../../styles/App.css";
import dummy_data, { User } from "./data/UsersStub";
import ItemCard from "../ItamCard/ItemCard";
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
