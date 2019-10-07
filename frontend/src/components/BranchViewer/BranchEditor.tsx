import React from "react";
import "../../styles/App.css";
import "./styles/BranchSingleView.css";
import {
	Button,
	Form,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label,
	ButtonGroup
} from "react-bootstrap";
import Axios from "axios";
import env from "../../common/ConfigHelper";
import { Redirect } from "react-router";
import { Modal } from "react-bootstrap";

export interface EditItemState {
	branch: any;
	updateBranchSuccess: boolean;
	deleteBranchSuccess: boolean;
	showModal: boolean;
}

export interface EditItemProps {
	branchID: string;
}

export default class EditItem extends React.Component<
	EditItemProps,
	EditItemState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			branch: {
				_id: "",
				name: "",
				address: ""
			},
			updateBranchSuccess: false,
			deleteBranchSuccess: false,
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
				`${env.API_HOSTNAME}/branch/${this.props.branchID}`,
				{ withCredentials: true }
			);
			if (res.status === 200) {
				this.setState({ branch: res.data });
			} else {
				console.log(`${res.status} code returned trying to get single branch`);
			}
		} catch (err) {
			console.log(err);
		}
	};

	handleChange = (event: any) => {
		const targetId = event.target.id;
		const targetValue = event.target.value;
		this.setState({ branch: { ...this.state.branch, [targetId]: targetValue } });
		event.preventDefault();
	};

	handleUpdate = async () => {
		try {
			const res = await Axios.patch(
				`${env.API_HOSTNAME}/branch/${this.props.branchID}`,
				this.state.branch,
				{ withCredentials: true }
			);

			if (res.status === 200) {
				console.log("Branch patched successfully:", res.data);
				this.setState({ ...this.state, updateBranchSuccess: true });
			} else {
				console.log(
					`${res.status} code was returned while trying to patch branch`
				);
			}
		} catch (err) {
			console.log(err);
		}
	};

	handleDelete = async () => {
		try {
			const res = await Axios.delete(
				`${env.API_HOSTNAME}/branch/${this.props.branchID}`,
				{ withCredentials: true }
			);
			if (res.status === 200) {
				console.log(`Item ${this.state.branch._id} was successfully branch`);
				this.setState({ ...this.state, deleteBranchSuccess: true });
			} else {
				console.log(
					`${res.status} code was returned when trying to delete branch`
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
					{/* <img
						alt="Product"
						className="product-img height"
						src={this.state.branch.photo}
					/> */}
				</div>

				<Form className="item-content height bold">
					<Group>
						<Label>Branch Name:</Label>
						<Input
							size="lg"
							type="text"
							id="name"
							value={this.state.branch.name}
							onChange={this.handleChange}
						/>
					</Group>

					<Group>
						<Label>Branch Address:</Label>
						<Input
							size="lg"
							type="text"
							id="address"
							onChange={this.handleChange}
							value={this.state.branch.address}
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
						<Modal.Title>Deleting Branch</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						You are about to delete a branch from the Ubuy store are you sure?
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
				{this.state.updateBranchSuccess && (
					<Redirect
						to={{
							pathname: "/common/success",
							state: {
								heading: "Branch updated successfully!",
								bodyText: `The branch (id: ${this.state.branch._id}) has been updated on the ubuy store.`
							}
						}}
					/>
				)}
				{this.state.deleteBranchSuccess && (
					<Redirect
						to={{
							pathname: "/common/success",
							state: {
								heading: "Branch deleted successfully!",
								bodyText: `The branch (id: ${this.state.branch._id}) has been deleted from the ubuy store.`
							}
						}}
					/>
				)}
			</div>
		);
	}
}
