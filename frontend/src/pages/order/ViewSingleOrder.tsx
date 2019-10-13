import React from "react";
import "../../styles/App.css";
import OrderSingleView from "../../components/OrderViewer/OrderSingleView";
import { supportsHistory } from "history/DOMUtils";

export interface ViewSingleOrderState {
	userId: string;
	orderId: string;
}
export interface ViewSingleOrderProps {
	match: {
		isExact: boolean;
		path: string;
		url: string;
		params: {
			userId: string;
			orderId: string;
		};
	};
}

export default class ViewSingleOrder extends React.Component<
	ViewSingleOrderProps,
	ViewSingleOrderState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			userId: this.props.match.params.userId,
			orderId: this.props.match.params.orderId
		};
	}

	render() {
		return <OrderSingleView orderId={this.state.orderId} userId={this.state.userId}/>;
	}
}
