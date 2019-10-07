import React from "react";
import "../styles/App.css";
import ItemAdder from "../components/ItemAdder/ItemAdder";
import Axios from "axios";
import env from "../common/ConfigHelper";
import { Redirect } from "react-router-dom";

export interface AddItemState {
	itemAddSuccess: boolean;
}

export interface AddItemProps {}

export default class AddItem extends React.Component<
	AddItemProps,
	AddItemState
> {
	constructor(props: any) {
		super(props);
		this.state = { itemAddSuccess: false };

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(state: any) {
		try {
			const res = await Axios.put(env.API_HOSTNAME + "/item", state, {
				withCredentials: true
			});
			if (res.status === 200) {
				this.setState({ itemAddSuccess: true });
			} else {
				console.log(`${res.status} code received when trying to add item`);
			}
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div className="content-body flex-center">
				<div className="body-heading">Add New Item</div>
				<div className="body-content">
					<ItemAdder handleSubmit={this.handleSubmit} />
				</div>
				{this.state.itemAddSuccess && (
					<Redirect
						to={{
							pathname: "/common/success",
							state: {
								heading: "Item added successfully!",
								bodyText: "The item added should now be available on Ubuy."
							}
						}}
					/>
				)}
			</div>
		);
	}
}
