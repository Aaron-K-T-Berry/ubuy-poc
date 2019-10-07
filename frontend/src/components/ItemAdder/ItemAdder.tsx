import React from "react";
import "../../styles/App.css";
import {
	Button,
	FormControl as Input,
	FormLabel as Label,
	InputGroup
} from "react-bootstrap";
// import BranchSelector from "../Selectors/BranchSelector";
// import CategorySelector from "../Selectors/CategorySelector";

// Add state here
export interface ItemAdderState {
	name: string;
	price: string;
	description: string;
	quantity: string;
	photo: string;
}

// Add passed in props here
export interface ItemAdderProps {
	handleSubmit: any;
}

export default class ItemAdder extends React.Component<
	ItemAdderProps,
	ItemAdderState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			name: "",
			price: "",
			description: "",
			quantity: "",
			photo: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		// @ts-ignore
		this.setState({ [event.target.id]: event.target.value });
	}

	render() {
		return (
			<div className="input">
				<Label>Item Name:</Label>

				<InputGroup>
					<Input
						type="text"
						id="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</InputGroup>

				<Label>Price:</Label>
				<InputGroup>
					<InputGroup.Prepend>
						<InputGroup.Text>$</InputGroup.Text>
					</InputGroup.Prepend>
					<Input
						id="price"
						type="number"
						value={this.state.price}
						onChange={this.handleChange}
					></Input>
				</InputGroup>

				<Label>Description:</Label>
				<InputGroup>
					<Input
						as="textarea"
						id="description"
						value={this.state.description}
						onChange={this.handleChange}
					/>
				</InputGroup>

				<Label>Quantity:</Label>
				<InputGroup>
					<Input
						id="quantity"
						type="number"
						value={this.state.quantity}
						onChange={this.handleChange}
					/>
				</InputGroup>

				<Label>Upload Photo:</Label>
				<InputGroup>
					<Input
						type="text"
						id="photo"
						value={this.state.photo}
						onChange={this.handleChange}
						placeholder="/images/products/example-product/example.jpg"
					/>
				</InputGroup>

				{/* Below parts not supported by api yet */}
				{/* <Label>Categories:</Label>
				<CategorySelector /> */}

				{/* <Label>Branch:</Label>
				<BranchSelector /> */}

				<Button
					onClick={() => {
						this.props.handleSubmit(this.state);
					}}
				>
					Add Item
				</Button>
			</div>
		);
	}
}
