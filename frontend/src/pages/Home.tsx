import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class HomePage extends React.Component {
	render() {
		return (
			<body>
				<h1>Ubuy</h1>
				<Container>
					<Col>
						<Link to="/login"> Login </Link>
					</Col>
					<Col>
						<Link to="/register"> Register </Link>
					</Col>
					<Col>
						<Link to="/account"> Account </Link>
					</Col>
				</Container>
			</body>
		);
	}
}
