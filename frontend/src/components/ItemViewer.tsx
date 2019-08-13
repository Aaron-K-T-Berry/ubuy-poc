import React from "react";
import axios from "axios";

export default class ItemViewer extends React.Component<{}, { items: [] }> {
	constructor(props: any) {
		super(props);
		this.state = { items: [] };

		this.handleGet = this.handleGet.bind(this);
	}

	getTime = () => {
		return new Date().getTime();
	};

	async handleGet() {
		const response = await axios.get("http://localhost:4000/item");
		this.setState({ items: response.data });
		console.log(this.state.items);
	}

	List = ({ list }: any) => (
		<ol>
			{list.map((item: any) => (
				<li key={item._id}>{item.name}</li>
			))}
		</ol>
	);

	render() {
		return (
			<div>
				<button onClick={this.handleGet}>Get All Items in DB</button>
				<this.List list={this.state.items} />
			</div>
		);
	}
}
