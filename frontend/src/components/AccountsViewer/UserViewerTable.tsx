import React from "react";
import "../../styles/App.css";
import "./styles/AccountsViewerTable.css";
import dummy_data, { UserRow as User } from "./data/UsersStub";
import Table from 'react-bootstrap/Table';
import UserRow from "./UserRow";

export interface UserState {
    users: User[];
}

export default class UserViewerTable extends React.Component<{}, UserState> {
	constructor(props: any) {
        super(props);
        this.state = {
			users: dummy_data
		};
    }

	render() {
		return (
            <Table striped bordered className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map(user => {
                        return <UserRow user={user} />
                    })}
                </tbody>
            </Table>
		);
	}
}
