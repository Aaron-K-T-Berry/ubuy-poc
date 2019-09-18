import React from "react";
import "../../styles/App.css";
import dummy_branch_data, { Branch } from "./data/branchStub";
import { DropdownButton, Dropdown } from "react-bootstrap";

export interface BranchState {
    branches: Branch[];
}

export default class BranchSelector extends React.Component<{}, BranchState>{
    constructor(props: any) {
        super(props);
        this.state = {
            branches: dummy_branch_data
        };
    }

    render() {
        return (
            <DropdownButton 
                            title="Select Branches" 
                            id="branch"
                            variant="info"
            >
                {this.state.branches.map(branch => {
                    return <Dropdown.Item eventKey={branch.id}>{branch.name}</Dropdown.Item>
                })}
            </DropdownButton>
        );
    }
}