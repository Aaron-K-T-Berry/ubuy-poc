import React from "react";
import "../../styles/App.css";
import dummy_data, { User } from "./data/SellersStub";
import ItemCard from "../ItamCard/ItemCard";
import { Container, Row } from "react-bootstrap";

export interface SellerState {
	user: User[];
}

export default class AccountViewerSeller extends React.Component<{}, SellerState> {
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
