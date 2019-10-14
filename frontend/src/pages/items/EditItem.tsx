import React from "react";
import "../../styles/App.css";
import EditItem from "../../components/ItemViewer/ItemEdit";

export interface EditItemState {
	itemId: string;
}

export interface EditItemProps {
	match: {
		isExact: boolean;
		path: string;
		url: string;
		params: {
			id: string;
		};
	};
}

export default class ViewItem extends React.Component<
	EditItemProps,
	EditItemState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			itemId: this.props.match.params.id
		};
	}

	render() {
		return <EditItem itemID={this.state.itemId} />;
	}
}
