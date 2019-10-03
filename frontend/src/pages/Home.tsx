import React from "react";
import "../styles/App.css";
import ItemViewer from "../Components/ItemViewer/ItemViewer";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default class HomePage extends React.Component {
	render() {
		return (
			<div>
				<Container className="content-body">
					<Row>
						<div className="body-heading">Recommendations</div>
					</Row>
					<Row>
						<ItemViewer />
					</Row>
				</Container>
			</div>
		);
	}
}
