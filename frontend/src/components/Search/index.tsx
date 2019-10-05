import React from "react";
import "../../styles/App.css";
import "./styles/Search.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default class Search extends React.Component {
	render() {
		return (
			<div>
				<InputGroup>
					<FormControl placeholder="Search..." />
					<InputGroup.Append>
						<Button variant="primary">Go</Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
		);
	}
}
