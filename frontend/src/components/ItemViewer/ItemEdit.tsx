import React from "react";
import "../../styles/App.css";
import "./styles/ItemSingleView.css";
import {
	Button,
	Form,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label,
	InputGroup,
	ButtonGroup
} from "react-bootstrap";
import { Redirect } from "react-router";
import { Modal } from "react-bootstrap";
import BranchSelector from "../Selectors/BranchSelector";
import ApiHelper from "../../common/ApiHelper";

export interface EditItemState {
	allBranches: any[];
	item: any;
	updateItemSuccess: boolean;
	deleteItemSuccess: boolean;
	showModal: boolean;
	selectedBranches: any[];
}

export interface EditItemProps {
	itemID: string;
}

export default class EditItem extends React.Component<
	EditItemProps,
	EditItemState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			allBranches: [],
			item: {
				_id: "",
				name: "",
				photo: "",
				price: "",
				desc: "",
				branch: []
			},
			updateItemSuccess: false,
			deleteItemSuccess: false,
			showModal: false,
			selectedBranches: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleBranchSelector = this.handleBranchSelector.bind(this);
		this.mapSelectedBranches = this.mapSelectedBranches.bind(this);
		this.lookupBranchDetails = this.lookupBranchDetails.bind(this);
	}

	componentDidMount = async () => {
		const items = await ApiHelper.item.getSingle(this.props.itemID);
		this.setState({
			...this.state,
			item: items,
			allBranches: await ApiHelper.branch.getAll(),
			selectedBranches: items.branch
		});
	};

	handleChange = (event: any) => {
		const targetId = event.target.id;
		const targetValue = event.target.value;
		this.setState({ item: { ...this.state.item, [targetId]: targetValue } });
		event.preventDefault();
	};

	handleUpdate = async () => {
		this.setState({
			...this.state,
			updateItemSuccess: await ApiHelper.item.update(
				this.props.itemID,
				this.state.item
			)
		});
	};

	handleDelete = async () => {
		this.setState({
			...this.state,
			deleteItemSuccess: await ApiHelper.item.delete(this.props.itemID)
		});
	};

	handleShowModal = () => {
		this.setState({ ...this.state, showModal: true });
	};

	handleBranchSelector(selectedItems: any[]) {
		const mappedItems = selectedItems.map(item => item.id);
		this.setState({
			...this.state,
			selectedBranches: selectedItems,
			item: { ...this.state.item, branch: mappedItems }
		});
	}

	lookupBranchDetails(allBranches: any[], branchId: string) {
		return allBranches.filter(branch => branch._id === branchId)[0];
	}

	mapSelectedBranches(selectedBranches: any[]) {
		const mapped = selectedBranches.map(branch => {
			if (branch.id === undefined) {
				const foundBranch = this.lookupBranchDetails(
					this.state.allBranches,
					branch
				);
				return { id: foundBranch._id, label: foundBranch.name };
			}
			return branch;
		});
		return mapped;
	}

	render() {
		return (
			<div className="content-body flex-center">
				<div className="img-container">
					<img
						alt="Product"
						className="product-img height"
						src={this.state.item.photo}
					/>
				</div>

				<Form className="item-content height bold">
					<Group>
						<Label>Item Name:</Label>
						<Input
							size="lg"
							type="text"
							id="name"
							value={this.state.item.name}
							onChange={this.handleChange}
						/>
					</Group>

					<Group>
						<Label>Item Image Path:</Label>
						<Input
							size="lg"
							type="text"
							id="photo"
							onChange={this.handleChange}
							value={this.state.item.photo}
						/>
					</Group>

					<Group>
						<Label>Item Price:</Label>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>$</InputGroup.Text>
							</InputGroup.Prepend>
							<Input
								type="number"
								id="price"
								onChange={this.handleChange}
								value={this.state.item.price}
							/>
						</InputGroup>
					</Group>

					<Group>
						<Label>Item Quantity:</Label>
						<InputGroup>
							<Input
								type="number"
								id="quantity"
								onChange={this.handleChange}
								value={this.state.item.quantity}
							/>
						</InputGroup>
					</Group>

					<Group>
						<Label>Item Description:</Label>
						<Input
							as="textarea"
							rows="3"
							id="description"
							onChange={this.handleChange}
							value={this.state.item.description}
						/>
					</Group>

					<Label>Branch:</Label>
					<BranchSelector
						handleChange={this.handleBranchSelector}
						allBranches={this.state.allBranches}
						selectedBranches={this.mapSelectedBranches(
							this.state.selectedBranches
						)}
					/>

					<ButtonGroup>
						<Button variant="danger" onClick={this.handleShowModal}>
							Delete
						</Button>
						<Button variant="success" onClick={this.handleUpdate}>
							Update
						</Button>
					</ButtonGroup>
				</Form>

				{/* Confirm delete modal */}
				<Modal
					show={this.state.showModal}
					onHide={() => {
						this.setState({ ...this.state, showModal: false });
					}}
				>
					<Modal.Header closeButton>
						<Modal.Title>Deleting Item</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						You are about to delete an item from the Ubuy store are you sure?
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={() => {
								this.setState({ ...this.state, showModal: false });
							}}
						>
							Cancel
						</Button>
						<Button variant="primary" onClick={this.handleDelete}>
							Delete Item
						</Button>
					</Modal.Footer>
				</Modal>

				{/* Redirects */}
				{this.state.updateItemSuccess && (
					<Redirect
						to={{
							pathname: "/common/success",
							state: {
								heading: "Item updated successfully!",
								bodyText: `The item (id: ${this.state.item._id}) has been updated on the ubuy store.`
							}
						}}
					/>
				)}
				{this.state.deleteItemSuccess && (
					<Redirect
						to={{
							pathname: "/common/success",
							state: {
								heading: "Item deleted successfully!",
								bodyText: `The item (id: ${this.state.item._id}) has been deleted from the ubuy store.`
							}
						}}
					/>
				)}
			</div>
		);
	}
}
