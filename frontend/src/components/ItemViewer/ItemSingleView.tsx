import React from "react";
import "../../styles/App.css";
import "./styles/ItemSingleView.css";
import { Button } from "react-bootstrap";
import ApiHelper from "../../common/ApiHelper";

export interface ViewItemState {
	item: any;
}

export interface ViewItemProps {
	itemID: string;
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
			item: {
				_id: "",
				name: "",
				photo: "",
				price: "",
				desc: "",
				branch: []
			}
		};
	}

	async componentDidMount() {
		const item = await ApiHelper.item.getSingle(this.props.itemID);
		const branchDetails = await ApiHelper.branch.getBatch(item.branch);
		this.setState({ item: { ...item, branch: branchDetails } });
	}

	handleAddToCart = async () => {
		await ApiHelper.cart.put(this.state.item._id);
		const updatedCart = await this.props.cartContext.getCart();
		this.props.cartFunc({ ...this.props.cartContext, cart: updatedCart });
	};

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
						<Button
							className="button-cart"
							variant="success"
							onClick={this.handleAddToCart}
						>
							Add to cart
						</Button>
					</div>
					<b> Description: </b>
					<p>{this.state.item.description}</p>
					<b> Available At: </b>
					<ul>
						{this.state.item.branch.map((branch: any) => {
							return (
								<li>
									{branch.name} - ({branch.address})
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
