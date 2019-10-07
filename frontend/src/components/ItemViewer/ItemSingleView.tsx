import React from "react";
import "../../styles/App.css";
import "./styles/ItemSingleView.css";
import dummy_data, { Item } from "./data/itemsStub";
import { Button } from "react-bootstrap";
import Axios from "axios";
import env from "../../common/ConfigHelper";

export interface ViewItemState {
	item: any;
}

export interface ViewItemProps {
	itemID: string;
}

export default class ViewItem extends React.Component<
	ViewItemProps,
	ViewItemState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			item: {
				_id: "",
				name: "",
				photo: "",
				price: "",
				desc: "",
				branch: ""
			}
		};
	}

	async componentDidMount() {
		try {
			const res = await Axios.get(
				`${env.API_HOSTNAME}/item/${this.props.itemID}`,
				{ withCredentials: true }
			);
			if (res.status === 200) {
				if (res.data !== null) {
					this.setState({ item: res.data });
				}
			} else {
				console.log(`${res.status} code returned trying to get single item`);
			}
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div className="content-body flex-center">
				<div className="img-container">
					<img
						alt="Product"
						className="product-img height"
						src={this.state.item.photo}
					/>
					<div className="middle">
						<Button className="hover-button">Click to view larger image</Button>
					</div>
				</div>
				<div className="item-content height">
					<div className="item-name">{this.state.item.name}</div>
					<div className="item-body">
						<em className="price">${this.state.item.price}</em>
						<Button className="button-cart" variant="success">
							Add to cart
						</Button>
					</div>
					<b> Description: </b>
					{this.state.item.desc}
				</div>
			</div>
		);
	}
}
