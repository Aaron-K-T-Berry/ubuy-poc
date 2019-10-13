import React from "react";
import "../../styles/App.css";
import "./styles/AccountsViewerTable.css";
import dummy_data, { UserRow as User } from "./data/UsersStub";
import Table from "react-bootstrap/Table";
import UserRow from "./UserRow";

export interface UserProps {
	users: User[];
	handleEditUser: any;
	handleViewUser: any;
}
export interface UserState {}

export default class UserViewerTable extends React.Component<
	UserProps,
	UserState
> {
	constructor(props: any) {
		super(props);
	}
 
	render() {
		return (
			<Table striped bordered className="table">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>E-mail</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{this.props.users.map(user => {
						return (
							<UserRow
								user={user}
								handleEditUser={this.props.handleEditUser}
								handleViewUser={this.props.handleViewUser}
							/>
						);
					})}
				</tbody>
			</Table>
		);
	}
}
