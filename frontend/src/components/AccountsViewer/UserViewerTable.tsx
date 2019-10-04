import React from "react";
import "../../styles/App.css";
import "./styles/AccountsViewerTable.css";
import Table from 'react-bootstrap/Table';
import UserRow from "./UserRow";

export interface UserState {
}

export default class UserViewerTable extends React.Component<{}, UserState> {
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
                        <th>Address</th>
                      
                        <th>View/Edit/Remove</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
		);
	}
}