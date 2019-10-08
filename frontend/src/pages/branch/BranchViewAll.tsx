import React from "react";
import "../../styles/App.css";
import BranchTable from "../../components/BranchViewer/BranchViewerTable";
import ApiHelper from "../../common/ApiHelper";

export interface ViewAllItemsProps {}
export interface ViewAllItemsState {
	items: any[];
}

export default class ViewAllItems extends React.Component<
	ViewAllItemsProps,
	ViewAllItemsState
> {
	constructor(props: any) {
		super(props);
		this.state = { items: [] };
	}

	async componentDidMount() {
		const branches = await ApiHelper.branch.getAll();
		this.setState({ items: branches });
	}

	handleViewItem(branchId: string) {
		window.open(`/branch/${branchId}/view`, "_blank");
	}
	handleEditItem(branchId: string) {
		window.open(`/branch/${branchId}/edit`, "_blank");
	}

	render() {
		return (
			<div className="content-body">
				<div className="body-heading">View All Branches</div>
				<div>
					<BranchTable
						items={this.state.items}
						handleViewItem={this.handleViewItem}
						handleEditItem={this.handleEditItem}
					/>
				</div>
			</div>
		);
	}
}
