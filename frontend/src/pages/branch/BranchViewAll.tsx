import React from "react";
import "../../styles/App.css";
import BranchTable from "../../components/BranchViewer/BranchViewerTable";
import Axios from "axios";
import env from "../../common/ConfigHelper";

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
		try {
			const res = await Axios.get(env.API_HOSTNAME + "/branch", {
				withCredentials: true
			});

			if (res.status === 200) {
				if (res.data !== undefined) {
					this.setState({ items: res.data });
					console.log(`Fetched ${res.data.length} branches from the backend`);
				} else {
					console.log("Call for all branches returned no data");
				}
			} else {
				console.log(`${res.status} code returned trying to get all branches`);
			}
		} catch (err) {
			console.log(err);
		}
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
