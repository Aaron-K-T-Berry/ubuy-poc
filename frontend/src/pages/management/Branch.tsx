import React from "react";
import "../../styles/App.css";
import PageWrapper from "../../components/Page";
import { Container, Row, Col } from "react-bootstrap";
import { LinkList } from "./components/LinkBuilder";
import BranchLinks from "./data/BranchLinkList";

export interface ManageBranchProps {}
export interface ManageBranchState {}

export default class ManageBranch extends React.Component<
	ManageBranchProps,
	ManageBranchState
> {
	render() {
		return (
			<>
				<PageWrapper heading="Branch Management">
					<Container>
						<Row>
							<Col>{LinkList("User management", BranchLinks.UserLinks)}</Col>
							<Col>{LinkList("Item management", BranchLinks.ItemLinks)}</Col>
							<Col>{LinkList("Branch management", BranchLinks.BranchLinks)}</Col>
							<Col>{LinkList("Order management", BranchLinks.OrderLinks)}</Col>
						</Row>
					</Container>
				</PageWrapper>
			</>
		);
	}
}
