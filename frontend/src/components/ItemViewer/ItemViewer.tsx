import React from "react";
import "../../styles/App.css";
import dummy_data, { Item } from "./data/itemsStub";
import ItemCard from "../ItemCard";
import { Container, Row } from "react-bootstrap";

export interface ItemState {
	items: Item[];
}

export default class ItemViewer extends React.Component<{}, ItemState> {
	constructor(props: any) {
		super(props);
		this.state = {
			items: dummy_data
		};
	}
	render() {
		return (
			<div>
				<Container fluid>
					<Row noGutters={true} className="justify-content-md-center">
						{this.state.items.map(item => {
							return <ItemCard key={item.id} item={item} />;
						})}
					</Row>
				</Container>
			</div>
		);
	}
}
