import React from "react";
import "../../styles/App.css";
import ItemSingleView from "../../components/ItemViewer/ItemSingleView";

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
	cartContext: any;
	cartFunc: any; 
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
		return (
			<ItemSingleView
				cartContext={this.props.cartContext}
				cartFunc={this.props.cartFunc}
				itemID={this.state.id}
			/>
		);
	}
}
