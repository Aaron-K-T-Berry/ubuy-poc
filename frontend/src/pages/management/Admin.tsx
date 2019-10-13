import React from "react";
import "../../styles/App.css";
import PageWrapper from "../../components/Page";
import { Container, Col, Row } from "react-bootstrap";
import AdminLinks from "./AdminLinkLists";
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
							<Col className="admin-col-left">{LinkList("User management", AdminLinks.UserLinks)}</Col>
							<Col className="admin-col-mid">{LinkList("Item management", AdminLinks.ItemLinks)}</Col>
							<Col className="admin-col-right">{LinkList("Branch management", AdminLinks.BranchLinks)}</Col>
						</Row>
					</Container>
				</PageWrapper>
			</>
		);
	}
}
