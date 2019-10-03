import React from "react";
import "../../styles/App.css";
import "./styles/AccountsViewerTableSeller.css";
import dummy_data, { SellerRow as User } from "./data/SellersStub";
import Table from 'react-bootstrap/Table';
import SellerRow from "./SellerRow";

export interface SellerState {
	users: User[];
}

export default class SellerViewerTable extends React.Component<{}, SellerState> {
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
                        <th>ID</th>
                        <th>Name</th>
                        
                        <th>Address</th>
                      
                        <th>View/Edit/Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map(user => {
                        return <SellerRow user={user} />
                    })}
                </tbody>
            </Table>
		);
	}
}