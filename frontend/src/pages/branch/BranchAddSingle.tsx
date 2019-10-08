import React from "react";
import "../../styles/App.css";
import ItemAdder from "../../components/BranchViewer/BranchAdder";
import { Redirect } from "react-router-dom";
import ApiHelper from "../../common/ApiHelper";

export interface BranchAddSingleState {
	branchAddSuccess: boolean;
}

export interface BranchAddSingleProps {}

export default class BranchAddSingle extends React.Component<
	BranchAddSingleProps,
	BranchAddSingleState
> {
	constructor(props: any) {
		super(props);
		this.state = { branchAddSuccess: false };

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(state: any) {
		this.setState({ branchAddSuccess: await ApiHelper.branch.add(state) });
	}

	render() {
		return (
			<div className="content-body flex-center">
				<div className="body-heading">Add New Branch</div>
				<div className="body-content">
					<ItemAdder handleSubmit={this.handleSubmit} />
				</div>
				{this.state.branchAddSuccess && (
					<Redirect
						to={{
							pathname: "/common/success",
							state: {
								heading: "Branch added successfully!",
								bodyText: "The branch added should now be available on Ubuy."
							}
						}}
					/>
				)}
			</div>
		);
	}
}
