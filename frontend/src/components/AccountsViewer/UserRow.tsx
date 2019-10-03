import React from "react";
import "../../styles/App.css";
import "./../AccountsViewer/styles/AccountsViewerTable.css";
import { Button, ButtonGroup } from "react-bootstrap";

export interface UserProp {
	user: {
        firstName: string;
        lastName: string;
        email: string;
        password?: string;
        address: string | undefined;
	};
}

export default class UserRow extends React.Component<UserProp, {}> {
    render() {
        return(
            <tr>
                <td className="table-column-id">
                    {this.props.user.firstName}
                </td>

                <td className="table-column-name">
                    {this.props.user.lastName}
                </td>

                <td className="table-column-price">
                    ${this.props.user.email}
                </td>

                <td className="table-column-desc">
                    {this.props.user.address}
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
