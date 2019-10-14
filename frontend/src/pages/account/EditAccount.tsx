import React from "react";
import "../../styles/App.css";
import ApiHelper from "../../common/ApiHelper";
import { CookieHelper } from "../../common/AuthHelper";
import jwtDecode from "jwt-decode";
import {
	Button,
	Form,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label,
	ButtonGroup,
	Modal
} from "react-bootstrap";
import "../../components/ItemViewer/styles/ItemSingleView.css";
import { Redirect } from "react-router";

export interface EditAccountProps {
	match: {
		isExact: boolean;
		path: string;
		url: string;
		params: {
			userId: string;
		};
	};
}

export interface EditAccountState {
	user: {
		_id: string;
		email: string;
		firstName: string;
		lastName: string;
	};
	modal: {
		show: boolean;
		content: {
			title: string;
			body: string;
			buttonText: string;
		};
		handleProceed: any;
	};
	updateSuccess: boolean;
}

export default class EditAccount extends React.Component<
	EditAccountProps,
	EditAccountState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			user: {
				_id: "",
				email: "",
				firstName: "",
				lastName: ""
			},
			modal: {
				show: false,
				content: {
					title: "",
					body: "",
					buttonText: ""
				},
				handleProceed: {}
			},
			updateSuccess: false
		};

		this.handleExitPage = this.handleExitPage.bind(this);
	}

	async componentDidMount() {
		const token = CookieHelper.getToken();
		const jwt: { email: string } = jwtDecode(token as string);
		const result = await ApiHelper.user.getSingle(jwt.email);

		const mappedState = {
			user: result
		};
		this.setState({ ...(mappedState as any) });
	}

	handleChange = (event: any) => {
		const targetId = event.target.id;
		const targetValue = event.target.value;
		this.setState({ user: { ...this.state.user, [targetId]: targetValue } });
		event.preventDefault();
	};

	handleShowModal = (
		content: {
			title: string;
			body: string;
			buttonText: string;
		},
		handleProceed: any
	) => {
		this.setState({
			...this.state,
			modal: { ...this.state.modal, content, show: true, handleProceed }
		});
	};

	handleHideModal = () => {
		this.setState({
			...this.state,
			modal: { ...this.state.modal, show: false }
		});
	};

	handleExitPage = () => {
		window.location.href = `/account/user`;
	};

	handleUpdateAccount = async () => {
		const res = await ApiHelper.user.updateUser(
			this.state.user._id,
			this.state.user
		);
		if (res !== undefined)
			this.setState({ ...this.state, updateSuccess: true });
	};

	render() {
		return (
			<div className="body-wrapper flex-center">
				<div className="body-heading">Account Information</div>
				<div className="body-content input">
					<Form className=" bold">
						<Group>
							<Label>Email:</Label>
							<Input
								size="lg"
								type="text"
								id="email"
								value={this.state.user.email}
								onChange={this.handleChange}
							/>
						</Group>

						<Group>
							<Label>First Name:</Label>
							<Input
								size="lg"
								type="text"
								id="firstName"
								value={this.state.user.firstName}
								onChange={this.handleChange}
							/>
						</Group>

						<Group>
							<Label>Last Name:</Label>
							<Input
								size="lg"
								type="text"
								id="lastName"
								value={this.state.user.lastName}
								onChange={this.handleChange}
							/>
						</Group>
					</Form>
					<ButtonGroup>
						<Button
							variant="danger"
							onClick={() => {
								this.handleShowModal(
									{
										title: "Are you sure you want to exit?",
										body: "By exiting you will lose your current changes.",
										buttonText: "Continue"
									},
									this.handleExitPage
								);
							}}
						>
							Cancel
						</Button>
						<Button
							variant="success"
							onClick={() => {
								this.handleShowModal(
									{
										title: "Update account info?",
										body:
											"Are you sure you want to update your account information?",
										buttonText: "Update"
									},
									this.handleUpdateAccount
								);
							}}
						>
							Update
						</Button>
					</ButtonGroup>
				</div>

				<Modal show={this.state.modal.show} onHide={this.handleHideModal}>
					<Modal.Header closeButton>
						<Modal.Title>{this.state.modal.content.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{this.state.modal.content.body}</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleHideModal}>
							Cancel
						</Button>
						<Button
							variant="primary"
							onClick={() => {
								this.state.modal.handleProceed();
							}}
						>
							{this.state.modal.content.buttonText}
						</Button>
					</Modal.Footer>
				</Modal>

				{this.state.updateSuccess && (
					<Redirect
						to={{
							pathname: "/common/success",
							state: {
								heading: "User info updated successfully!",
								bodyText:
									"The changes to the user account should now reflect on the ubuy store"
							}
						}}
					/>
				)}
			</div>
		);
	}
}
