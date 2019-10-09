import React from "react";
import "../../styles/App.css";
import ItemCard from "../ItemCard/ItemCard";
import { Container, Row } from "react-bootstrap";
import ApiHelper from "../../common/ApiHelper";

export interface ItemState {
	items: any[];
}

export default class ItemViewer extends React.Component<{}, ItemState> {
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
							return <ItemCard key={item._id} item={item} />;
						})}
					</Row>
				</Container>
			</div>
		);
	}
}
