import React from "react";
import "../../styles/App.css";
import "./../AccountsViewer/styles/AccountsViewerTable.css";
import { Button, ButtonGroup } from "react-bootstrap";

export interface UserProp {
	user: {
		firstName: string;
		lastName: string;
		email: string;
		address: string | undefined;
	};
	handleEditUser: any;
	handleViewUser: any;
}

export default class UserRow extends React.Component<UserProp, {}> {
	render() {
		return (
			<tr>
				<td>{this.props.user.firstName}</td>
				<td>{this.props.user.lastName}</td>
				<td>{this.props.user.email}</td>

				<td className="table-column-button">
					<ButtonGroup>
						<Button variant="info">View</Button>
						<Button variant="warning">Edit</Button>
					</ButtonGroup>
				</td>
			</tr>
		);
	}
}
