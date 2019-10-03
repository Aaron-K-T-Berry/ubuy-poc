import React from "react";
import "../../styles/App.css";
import "./../AccountsViewerSeller/styles/AccountsViewerTableSeller.css";
import { Button, ButtonGroup } from "react-bootstrap";

export interface UserProp {
	user: {
        id: string;
        name: string;
        address: string;
	};
}

export default class SellerRow extends React.Component<UserProp, {}> {
    render() {
        return(
            <tr>
                <td className="table-column-id">
                    {this.props.user.id}
                </td>

                <td className="table-column-name">
                    {this.props.user.name}
                </td>

                <td className="table-column-address">
                    ${this.props.user.address}
                </td>

               

             

                <td className="table-column-button">
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
