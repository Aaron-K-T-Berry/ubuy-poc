import React from "react";
import "../../styles/App.css";
import "./styles/BranchSingleView.css";
import ApiHelper from "../../common/ApiHelper";

export interface BranchSingleViewState {
	item: any;
}

export interface BranchSingleViewProps {
	branchID: string;
}

export default class BranchSingleView extends React.Component<
	BranchSingleViewProps,
	BranchSingleViewState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			item: {
				_id: "",
				name: "",
				address: ""
			}
		};
	}

	async componentDidMount() {
		const branch = await ApiHelper.branch.getSingle(this.props.branchID);
		this.setState({ item: branch });
	}

	render() {
		return (
			<div className="content-body flex-center">
				<div className="img-container">
					{/* <img
						alt="Product"
						className="product-img height"
						src={this.state.item.photo}
					/>
					<div className="middle">
						<Button className="hover-button">Click to view larger image</Button>
					</div> */}
				</div>
				<div className="item-content height">
					<div className="item-name">{this.state.item.name}</div>
					<div className="item-body">
						<h4>Address:</h4>
						<p>{this.state.item.address}</p>
					</div>
				</div>
			</div>
		);
	}
}
