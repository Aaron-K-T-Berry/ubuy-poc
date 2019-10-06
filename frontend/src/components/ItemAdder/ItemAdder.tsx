import React from "react";
import "../../styles/App.css";
import {
	Button,
	FormControl as Input,
	FormLabel as Label,
	InputGroup
} from "react-bootstrap";
import BranchSelector from "../Selectors/BranchSelector";
import CategorySelector from "../Selectors/CategorySelector";

// Add state here
export interface ItemAdderState {}

// Add passed in props here
export interface ItemAdderProps {}

export default class ItemAdder extends React.Component<
	ItemAdderProps,
	ItemAdderState
> {
	constructor(props: any) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit() {
		// add item;
	}

	render() {
		return (
			<div className="input">
				<Label>Item Name:</Label>
				<InputGroup>
					<Input type="text" id="newItemName" />
				</InputGroup>

				<Label>Price:</Label>
				<InputGroup>
					<InputGroup.Prepend>
						<InputGroup.Text>$</InputGroup.Text>
					</InputGroup.Prepend>
					<Input placeholder="0.00" id="newItemPrice"></Input>
				</InputGroup>

				<Label>Description:</Label>
				<InputGroup>
					<Input as="textarea" id="newItemDesc" placeholder="Description" />
				</InputGroup>

				<Label>Quantity:</Label>
				<InputGroup>
					<Input id="newItemQuantity" value="1" />
				</InputGroup>

				<Label>Categories:</Label>
				<CategorySelector />

				<Label>Upload Photo:</Label>
				<InputGroup>
					<Button id="uploadPhoto" variant="info">
						Upload
					</Button>
				</InputGroup>
				<Label>Branch:</Label>

				<BranchSelector />
			</div>
		);
	}
}
