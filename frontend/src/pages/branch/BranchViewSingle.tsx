import React from "react";
import "../../styles/App.css";
import BranchSingleView from "../../components/BranchViewer/BranchSingleView";

export interface BranchViewSingleState {
	id: string;
}
export interface BranchViewSingleProps {
	match: {
		isExact: boolean;
		path: string;
		url: string;
		params: {
			id: string;
		};
	};
}

export default class BranchViewSingle extends React.Component<
	BranchViewSingleProps,
	BranchViewSingleState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			id: this.props.match.params.id
		};
	}

	componentDidMount = () => {};

	render() {
		return <BranchSingleView branchID={this.state.id} />;
	}
}
