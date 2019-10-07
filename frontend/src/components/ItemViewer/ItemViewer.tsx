import React from "react";
import "../../styles/App.css";
import ItemCard from "../ItemCard/ItemCard";
import { Container, Row } from "react-bootstrap";
import Axios from "axios";
import env from "../../common/ConfigHelper";

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
		const res = await Axios.get(env.API_HOSTNAME + "/item", {
			withCredentials: true
		});
		this.setState({ items: res.data });
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
