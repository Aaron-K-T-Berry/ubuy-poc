import React from "react";
import "../../styles/App.css";
import {
	Button,
	FormControl as Input,
	FormLabel as Label,
	InputGroup
} from "react-bootstrap";

// Add state here
export interface BranchAdderState {
	name: string;
	address: string;
}

// Add passed in props here
export interface BranchAdderProps {
	handleSubmit: any;
}

export default class BranchAdder extends React.Component<
	BranchAdderProps,
	BranchAdderState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			name: "",
			address: ""
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
				<Label>Branch Name:</Label>
				<InputGroup>
					<Input
						type="text"
						id="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</InputGroup>

				<Label>Branch Address:</Label>
				<InputGroup>
					<Input
						id="address"
						type="text"
						value={this.state.address}
						onChange={this.handleChange}
					></Input>
				</InputGroup>

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
