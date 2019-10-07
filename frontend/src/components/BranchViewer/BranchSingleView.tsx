import React from "react";
import "../../styles/App.css";
import "./styles/BranchSingleView.css";
import { Button } from "react-bootstrap";
import Axios from "axios";
import env from "../../common/ConfigHelper";

export interface BranchSingleViewState {
	item: any;
}

export interface BranchSingleViewProps {
	itemID: string;
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
		try {
			const res = await Axios.get(
				`${env.API_HOSTNAME}/branch/${this.props.itemID}`,
				{ withCredentials: true }
			);
			if (res.status === 200) {
				if (res.data !== null) {
					this.setState({ item: res.data });
				}
			} else {
				console.log(`${res.status} code returned trying to get single branch`);
			}
		} catch (err) {
			console.log(err);
		}
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
