import React from "react";
import "../../styles/App.css";
import ItemCard from "../ItemCard/ItemCard";
import { Container, Row } from "react-bootstrap";
import ApiHelper from "../../common/ApiHelper";

export interface ItemState {
	items: any[];
}

export interface ItemProps {
	cartFunc: any;
	cartContext: any;
}

export default class ItemViewer extends React.Component<ItemProps, ItemState> {
	constructor(props: any) {
		super(props);
		this.state = {
			items: []
		};
	}

	async componentDidMount() {
		this.setState({ items: await ApiHelper.item.getAll() });
	}

	render() {
		return (
			<div>
				<Container fluid>
					<Row noGutters={true} className="justify-content-md-center">
						{this.state.items.map(item => {
							return (
								<ItemCard
									cartContext={this.props.cartContext}
									key={item._id}
									item={item}
									cartFunc={this.props.cartFunc}
								/>
							);
						})}
					</Row>
				</Container>
			</div>
		);
	}
}
