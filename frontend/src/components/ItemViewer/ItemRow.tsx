import React from "react";
import "../../styles/App.css";
import { Button, ButtonGroup } from "react-bootstrap";

export interface ItemProp {
	item: {
        id: number;
		name: string;
        price: string;
        branch: string;
        desc: string;
	};
}

export default class ItemRow extends React.Component<ItemProp, {}> {
    render() {
        return(
            <tr>
                <td>
                    {this.props.item.id}
                </td>

                <td>
                    {this.props.item.name}
                </td>

                <td>
                    ${this.props.item.price}
                </td>

                <td>
                    {this.props.item.desc}
                </td>

                <td>
                    {this.props.item.branch}
                </td>

                <td>
                    <ButtonGroup>
                        <Button variant="info">View</Button>
                        <Button variant="warning">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}
