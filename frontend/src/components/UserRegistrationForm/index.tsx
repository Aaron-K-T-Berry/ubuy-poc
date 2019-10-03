import React from "react";
import "../../styles/App.css";
import {
	Form,
	Button,
	FormControl as Input,
	FormLabel as Label
} from "react-bootstrap";

export interface UserRegistrationFormProps {
	userType: UserTypes;
	handleRegister: Function;
	validationKeys: string[];
}
export interface UserRegistrationFormState {
	firstName: string;
	lastName: string;
	email: string;
	address: string | undefined;
	password: string;
	passwordConfirm: string;
	userType: UserTypes;
	branchID: string;
}

export enum UserTypes {
	Internal = "INTERNAL",
	Admin = "ADMIN",
	Customer = "CUSTOMER"
}

export default class UserRegistrationForm extends React.Component<
	UserRegistrationFormProps,
	UserRegistrationFormState
> {
	constructor(props: UserRegistrationFormProps) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			address: undefined,
			password: "",
			passwordConfirm: "",
			userType: props.userType,
			branchID: ""
		};

		this.handleFormChange = this.handleFormChange.bind(this);
		this.showExtraFields = this.showExtraFields.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validateForm = this.validateForm.bind(this);
	}

	handleFormChange(event: any) {
		// @ts-ignore
		this.setState({ [event.target.id]: event.target.value }, () => {});
	}

	handleSubmit() {
		this.props.handleRegister(this.state);
	}

	showExtraFields() {
		const userType = this.state.userType;
		if (userType === "INTERNAL" || userType === "ADMIN") return true;
		return false;
	}

	validateForm(): boolean {
		const validationKeys = this.props.validationKeys;
		let returnValue = true;
		const errors = [];

		validationKeys.forEach(key => {
			// @ts-ignore
			const stateValue = this.state[key];

			// State should not be undefined
			if (stateValue === undefined) {
				errors.push(key);
				returnValue = false;
			}
			// State should be greater than 0
			if (stateValue.length <= 0) {
				errors.push(key);
				returnValue = false;
			}
		});

		return returnValue;
	}

	render() {
		return (
			<div className="input">
				<Form.Group>
					<Label>First Name:</Label>
					<Input
						type="text"
						id="firstName"
						placeholder="William"
						value={this.state.firstName}
						onChange={this.handleFormChange}
					/>
				</Form.Group>

				<Form.Group>
					<Label>Last Name:</Label>
					<Input
						type="text"
						id="lastName"
						placeholder="Perdormo"
						value={this.state.lastName}
						onChange={this.handleFormChange}
					/>
				</Form.Group>

				<Form.Group>
					<Label>Email:</Label>
					<Input
						type="text"
						id="email"
						placeholder="name@example.com"
						value={this.state.email}
						onChange={this.handleFormChange}
					/>
				</Form.Group>

				{this.showExtraFields() && (
					<Form.Group>
						<Label>Branch ID:</Label>
						<Input
							type="text"
							id="branchID"
							placeholder="1234"
							value={this.state.branchID}
							onChange={this.handleFormChange}
						/>
						<Form.Text>
							The unique id of the branch the user belongs to.
						</Form.Text>
					</Form.Group>
				)}

				<Form.Group>
					<Label>Password:</Label>
					<Input
						type="password"
						id="password"
						value={this.state.password}
						onChange={this.handleFormChange}
						placeholder="At least 6 characters long"
					/>
				</Form.Group>

				<Form.Group>
					<Label>Confirm Password:</Label>
					<Input
						type="password"
						id="passwordConfirm"
						value={this.state.passwordConfirm}
						onChange={this.handleFormChange}
						placeholder="Re-type password"
					/>
				</Form.Group>

				<Button
					className="button"
					id="buttonRegister"
					block
					onClick={this.handleSubmit}
					disabled={!this.validateForm()}
				>
					Create Account
				</Button>
			</div>
		);
	}
}
