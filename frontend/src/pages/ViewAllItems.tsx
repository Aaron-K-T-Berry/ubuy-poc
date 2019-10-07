import React from "react";
import "../styles/App.css";
import ItemTable from "../components/ItemViewer/ItemViewerTable";
import Axios from "axios";
import env from "../common/ConfigHelper";

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
			const res = await Axios.get(env.API_HOSTNAME + "/item", {
				withCredentials: true
			});

			if (res.status === 200) {
				if (res.data !== undefined) {
					this.setState({ items: res.data });
					console.log(`Fetched ${res.data.length} items from the backend`);
				} else {
					console.log("Call for all items returned no data");
				}
			} else {
				console.log(`${res.status} code returned trying to get all items`);
			}
		} catch (err) {
			console.log(err);
		}
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
