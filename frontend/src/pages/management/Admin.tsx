import React from "react";
import "../../styles/App.css";
import PageWrapper from "../../components/Page";
import { Container, Col, Row } from "react-bootstrap";
import AdminLinks from "./data/AdminLinkLists";
import { LinkList } from "./components/LinkBuilder";

export interface ManageAdminProps {}
export interface ManageAdminState {}

export default class ManageAdmin extends React.Component<
	ManageAdminProps,
	ManageAdminState
> {
	render() {
		return (
			<>
				<PageWrapper heading="Admin Management">
					<Container>
						<Row>
							<Col>{LinkList("User management", AdminLinks.UserLinks)}</Col>
							<Col>{LinkList("Item management", AdminLinks.ItemLinks)}</Col>
							<Col>{LinkList("Branch management", AdminLinks.BranchLinks)}</Col>
							<Col>{LinkList("Order management", AdminLinks.OrderLinks)}</Col>
						</Row>
					</Container>
				</PageWrapper>
			</>
		);
	}
}
