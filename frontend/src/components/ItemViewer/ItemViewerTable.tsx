import React from "react";
import "../../styles/App.css";
import "./styles/ItemViewerTable.css";
import dummy_data, { ItemRow as Item } from "./data/itemsStub";
import Table from 'react-bootstrap/Table';
import ItemRow from "./ItemRow";

export interface ItemState {
	items: Item[];
}

export default class ItemViewerTable extends React.Component<{}, ItemState> {
	constructor(props: any) {
		super(props);
		this.state = {
			items: dummy_data
		};
    }
    
	render() {
		return (
            <Table striped bordered className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Branch</th>
                        <th>View/Edit/Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map(item => {
                        return <ItemRow item={item} />
                    })}
                </tbody>
            </Table>
		);
	}
}