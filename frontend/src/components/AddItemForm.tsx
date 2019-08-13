import React from "react";
import axios from "axios";

export default class AddItemForm extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			name: "",
			quantity: "",
			price: ""
		};

		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(e: any) {
		this.setState({ [e.target.name]: e.target.value });
	}

	async handleSubmit() {
		const response = await axios.post("http://localhost:4000", this.state);
		console.log(response);
	}

	render() {
		return (
			<div>
				<div>
					<label>Name</label>
					<input type="Text" name="name" onChange={this.onChange} />
				</div>

				<div>
					<label>quantity</label>
					<input type="Text" name="quantity" onChange={this.onChange} />
				</div>

				<div>
					<label>price</label>
					<input type="Text" name="price" onChange={this.onChange} />
				</div>

				<button onClick={this.handleSubmit}>Submit</button>
			</div>
		);
	}
}
