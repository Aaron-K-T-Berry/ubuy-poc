import React from "react";
import "../../styles/App.css";
import "@kenshooui/react-multi-select/dist/style.css";
import MultiSelect from "@kenshooui/react-multi-select";

export interface BranchSelectorProps {
	handleChange: Function;
	allBranches: any[];
	selectedBranches: any[];
}
export interface BranchSelectorState {}

export default class BranchSelector extends React.Component<
	BranchSelectorProps,
	BranchSelectorState
> {
	render() {
		return (
			<MultiSelect
				items={this.props.allBranches.map(branch => {
					return { id: branch._id, label: branch.name };
				})}
				selectedItems={this.props.selectedBranches}
				onChange={this.props.handleChange}
			/>
		);
	}
}
