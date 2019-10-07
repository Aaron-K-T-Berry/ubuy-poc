import React from "react";
import "../styles/App.css";
import ItemSingleView from "../components/ItemViewer/ItemSingleView";

export interface ViewItemState {
	id: string;
}
export interface ViewItemProps {
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
	ViewItemProps,
	ViewItemState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			id: this.props.match.params.id
		};
	}

	componentDidMount = () => {};

	render() {
		return <ItemSingleView itemID={this.state.id} />;
	}
}
