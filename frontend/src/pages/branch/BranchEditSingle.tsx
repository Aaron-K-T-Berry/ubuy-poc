import React from "react";
import "../../styles/App.css";
import BranchEditor from "../../components/BranchViewer/BranchEditor";

export interface BranchEditSingleState {
	branchID: string;
}

export interface BranchEditSingleProps {
	match: {
		isExact: boolean;
		path: string;
		url: string;
		params: {
			id: string;
		};
	};
}

export default class BranchEditSingle extends React.Component<
	BranchEditSingleProps,
	BranchEditSingleState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			branchID: this.props.match.params.id
		};
	}

	render() {
		return <BranchEditor branchID={this.state.branchID} />;
	}
}
