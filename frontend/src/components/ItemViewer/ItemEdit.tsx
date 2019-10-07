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
import Axios from "axios";
import env from "../../common/ConfigHelper";
import { Redirect } from "react-router";
import { Modal } from "react-bootstrap";

export interface EditItemState {
	item: any;
	updateItemSuccess: boolean;
	deleteItemSuccess: boolean;
	showModal: boolean;
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
			item: {
				_id: "",
				name: "",
				photo: "",
				price: "",
				desc: "",
				branch: ""
			},
			updateItemSuccess: false,
			deleteItemSuccess: false,
			showModal: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
	}

	componentDidMount = async () => {
		try {
			const res = await Axios.get(
				`${env.API_HOSTNAME}/item/${this.props.itemID}`,
				{ withCredentials: true }
			);
			if (res.status === 200) {
				this.setState({ item: res.data });
			} else {
				console.log(`${res.status} code returned trying to get single item`);
			}
		} catch (err) {
			console.log(err);
		}
	};

	handleChange = (event: any) => {
		const targetId = event.target.id;
		const targetValue = event.target.value;
		this.setState({ item: { ...this.state.item, [targetId]: targetValue } });
		event.preventDefault();
	};

	handleUpdate = async () => {
		try {
			const res = await Axios.patch(
				`${env.API_HOSTNAME}/item/${this.props.itemID}`,
				this.state.item,
				{ withCredentials: true }
			);

			if (res.status === 200) {
				console.log("Item patched successfully:", res.data);
				this.setState({ ...this.state, updateItemSuccess: true });
			} else {
				console.log(
					`${res.status} code was returned while trying to patch item`
				);
			}
		} catch (err) {
			console.log(err);
		}
	};

	handleDelete = async () => {
		try {
			const res = await Axios.delete(
				`${env.API_HOSTNAME}/item/${this.props.itemID}`,
				{ withCredentials: true }
			);
			if (res.status === 200) {
				console.log(`Item ${this.state.item._id} was successfully deleted`);
				this.setState({ ...this.state, deleteItemSuccess: true });
			} else {
				console.log(
					`${res.status} code was returned when trying to delete item`
				);
			}
		} catch (err) {
			console.log(err);
		}
	};

	handleShowModal = () => {
		this.setState({ ...this.state, showModal: true });
	};

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
