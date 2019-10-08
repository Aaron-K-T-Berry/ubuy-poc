import React from "react";
import "../../styles/App.css";
import {
	Button,
	FormControl as Input,
	FormLabel as Label,
	InputGroup
} from "react-bootstrap";
import BranchSelector from "../Selectors/BranchSelector";
import ApiHelper from "../../common/ApiHelper";
// import CategorySelector from "../Selectors/CategorySelector";

// Add state here
export interface ItemAdderState {
	item: {
		name: string;
		price: string;
		description: string;
		quantity: string;
		photo: string;
		branch: string[];
	};
	allBranches: any[];
	selectedBranches: any[];
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
			item: {
				name: "",
				price: "",
				description: "",
				quantity: "",
				photo: "",
				branch: []
			},
			allBranches: [],
			selectedBranches: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleBranchSelector = this.handleBranchSelector.bind(this);
	}

	handleChange(event: any) {
		// @ts-ignore
		this.setState({
			...this.state,
			item: { ...this.state.item, [event.target.id]: event.target.value }
		});
	}

	handleBranchSelector(selectedItems: any[]) {
		const mappedItems = selectedItems.map(item => item.id);
		this.setState({
			...this.state,
			selectedBranches: selectedItems,
			item: { ...this.state.item, branch: mappedItems }
		});
	}

	async componentDidMount() {
		this.setState({
			...this.state,
			allBranches: await ApiHelper.branch.getAll()
		});
	}

	render() {
		return (
			<div className="input">
				<Label>Item Name:</Label>

				<InputGroup>
					<Input
						type="text"
						id="name"
						value={this.state.item.name}
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
						value={this.state.item.price}
						onChange={this.handleChange}
					></Input>
				</InputGroup>

				<Label>Description:</Label>
				<InputGroup>
					<Input
						as="textarea"
						id="description"
						value={this.state.item.description}
						onChange={this.handleChange}
					/>
				</InputGroup>

				<Label>Quantity:</Label>
				<InputGroup>
					<Input
						id="quantity"
						type="number"
						value={this.state.item.quantity}
						onChange={this.handleChange}
					/>
				</InputGroup>

				<Label>Upload Photo:</Label>
				<InputGroup>
					<Input
						type="text"
						id="photo"
						value={this.state.item.photo}
						onChange={this.handleChange}
						placeholder="/images/products/example-product/example.jpg"
					/>
				</InputGroup>

				<Label>Branch:</Label>
				<BranchSelector
					handleChange={this.handleBranchSelector}
					allBranches={this.state.allBranches}
					selectedBranches={this.state.selectedBranches}
				/>

				{/* Below parts not supported by api yet */}
				{/* <Label>Categories:</Label>
				<CategorySelector /> */}

				<Button
					onClick={() => {
						this.props.handleSubmit(this.state.item);
					}}
				>
					Add Item
				</Button>
			</div>
		);
	}
}
