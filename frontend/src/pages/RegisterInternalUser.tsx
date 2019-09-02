import React from "react";
import "../styles/App.css";
import {
	Button,
	FormControl as Input,
	FormLabel as Label
} from "react-bootstrap";
import axios from "axios";
import { has } from "lodash";

export interface UserForm {
	firstName: string;
	lastName: string;
	email: string;
	address: string | undefined;
	password: string;
	userType: string;
	branchID: string;
}

// Add state here
export interface RegisterState {
	userForm: UserForm;
	formFilled: Boolean;
}

// Add passed in props here
export interface RegisterProps {}

export default class RegisterInternalUser extends React.Component<
	RegisterProps,
	RegisterState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			userForm: {
				firstName: "",
				lastName: "",
				email: "",
				address: undefined,
				password: "",
				userType: "INTERNAL",
				branchID: ""
			},
			formFilled: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: any) {
		console.log(event.target.id);
		console.log(event.target.value);

		if (has(this.state.userForm, event.target.id)) {
		}

		this.setState({ formFilled: this.checkFormFilled() });
		console.log(this.state);
	}

	checkFormFilled(): boolean {
		const userForm: UserForm = this.state.userForm;

		if (userForm == undefined) {
			return false;
		}

		if (
			userForm.firstName == undefined ||
			userForm.lastName == undefined ||
			userForm.email == undefined ||
			userForm.password == undefined ||
			userForm.branchID == undefined
		) {
			return false;
		}
		return true;
	}

	async handleSubmit(event: any) {
		// TODO get the endpoint from config
		const res = await axios.post(
			"http://localhost:4000/user/register/internal",
			{
				firstName: this.state.userForm.firstName,
				lastName: this.state.userForm.lastName,
				email: this.state.userForm.email,
				address: this.state.userForm.address,
				password: this.state.userForm.password,
				userType: this.state.userForm.userType,
				branchID: this.state.userForm.branchID
			}
		);
		console.log(res);
	}

	render() {
		return (
			<div className="registerBody">
				<div className="h2"> Create New Internal User </div>
				<div className="input">
					<Label>First Name:</Label>
					<Input
						type="text"
						id="firstName"
						placeholder="William"
						value={this.state.userForm.firstName}
						onChange={this.handleChange}
					/>

					<Label>Last Name:</Label>
					<Input
						type="text"
						id="lastName"
						placeholder="Perdormo"
						value={this.state.userForm.lastName}
						onChange={this.handleChange}
					/>

					<Label>Email:</Label>
					<Input
						type="text"
						id="email"
						placeholder="name@example.com"
						value={this.state.userForm.email}
						onChange={this.handleChange}
					/>

					<Label>Branch ID:</Label>
					<Input
						type="text"
						id="branchId"
						placeholder="1234"
						value={this.state.userForm.branchID}
						onChange={this.handleChange}
					/>

					<Label>Password:</Label>
					<Input
						type="password"
						id="password"
						value={this.state.userForm.password}
						onChange={this.handleChange}
						placeholder="At least 6 characters long"
					/>

					<Label>Confirm Password:</Label>
					<Input
						type="password"
						id="passwordConfirm"
						placeholder="Re-type password"
					/>

					<Button
						className="register"
						id="buttonRegister"
						block
						onClick={this.handleSubmit}
						disabled={!this.state.formFilled}
					>
						Create Account
					</Button>
				</div>
			</div>
		);
	}
}
