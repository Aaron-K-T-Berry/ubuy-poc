import React from "react";
import "../../styles/App.css";
import ItemTable from "../../components/ItemViewer/ItemViewerTable";
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
		const items = await ApiHelper.item.getAll();
		const branches = await ApiHelper.branch.getAll();
		this.setState({ items: this.mapBranchesToItems(items, branches) });
	}

	lookupBranchDetails(branches: any[], branchId: string) {
		return branches.filter(branch => branch._id === branchId)[0];
	}

	mapBranchesToItems(items: any[], branches: any[]) {
		return items.map(item => {
			return {
				...item,
				branch: item.branch.map((b: any) =>
					this.lookupBranchDetails(branches, b)
				)
			};
		});
	}

	handleViewItem(itemId: string) {
		window.open(`/item/${itemId}/view`, "_blank");
	}
	handleEditItem(itemId: string) {
		window.open(`/item/${itemId}/edit`, "_blank");
	}

	render() {
		return (
			<div className="content-body">
				<div className="body-heading">View All Items</div>
				<div>
					<ItemTable
						items={this.state.items}
						handleViewItem={this.handleViewItem}
						handleEditItem={this.handleEditItem}
					/>
				</div>
			</div>
		);
	}
}
