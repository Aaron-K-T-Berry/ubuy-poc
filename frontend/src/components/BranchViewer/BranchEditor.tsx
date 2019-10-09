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
import { Redirect } from "react-router";
import { Modal } from "react-bootstrap";
import ApiHelper from "../../common/ApiHelper";

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
		this.setState({
			...this.state,
			branch: await ApiHelper.branch.getSingle(this.props.branchID)
		});
	};

	handleChange = (event: any) => {
		const targetId = event.target.id;
		const targetValue = event.target.value;
		this.setState({
			branch: { ...this.state.branch, [targetId]: targetValue }
		});
		event.preventDefault();
	};

	handleUpdate = async () => {
		this.setState({
			...this.state,
			updateBranchSuccess: await ApiHelper.branch.update(
				this.props.branchID,
				this.state.branch
			)
		});
	};

	handleDelete = async () => {
		this.setState({
			...this.state,
			deleteBranchSuccess: await ApiHelper.branch.delete(this.props.branchID)
		});
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
