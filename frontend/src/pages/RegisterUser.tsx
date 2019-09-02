import React from "react";
import "../styles/App.css";
import {
	Button,
	Form,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label
} from "react-bootstrap";
import axios from "axios";

// Add state here
export interface RegisterState {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

// Add passed in props here
export interface RegisterProps {}

export default class RegisterCustomer extends React.Component<
	RegisterProps,
	RegisterState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: any) {
		// @ts-ignore
		// TODO fix this type error
		this.setState({ [event.target.id]: event.target.value });
	}

	async handleSubmit(event: any) {
		// TODO get the endpoint from config
		const res = await axios.post("http://localhost:4000/user/register", {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		});
		console.log(res);
	}

	render() {
		return (
			<div className="registerBody">
				<div className="h1"> Create New Account </div>
				<div className="input">
					<Label>First Name:</Label>
					<Input
						type="text"
						id="firstName"
						placeholder="William"
						value={this.state.firstName}
						onChange={this.handleChange}
					/>

					<Label>Last Name:</Label>
					<Input
						type="text"
						id="lastName"
						placeholder="Perdormo"
						value={this.state.lastName}
						onChange={this.handleChange}
					/>

					<Label>Email:</Label>
					<Input
						type="text"
						id="email"
						placeholder="name@example.com"
						value={this.state.email}
						onChange={this.handleChange}
					/>

					<Label>Password:</Label>
					<Input
						type="password"
						id="password"
						value={this.state.password}
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
					>
						Create Account
					</Button>
				</div>
			</div>
		);
	}
}
