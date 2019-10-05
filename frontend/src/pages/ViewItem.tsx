import React from "react";
import "../styles/App.css";
import ItemSingleView from "../components/ItemViewer/ItemSingleView";
import dummy_data from "../components/ItemViewer/data/itemsStub";

export interface ViewItemState {}
export interface ViewItemProps {
	itemID: number;
}

export default class ViewItem extends React.Component<
	ViewItemProps,
	ViewItemState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			items: dummy_data
		};
	}

	render() {
		return <ItemSingleView itemID={101} />;
	}
}
