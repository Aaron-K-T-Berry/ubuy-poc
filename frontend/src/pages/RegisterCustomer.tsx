import React, { FormEvent } from "react";
import "../styles/Register.css";
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
			email: "",
			password: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: any) {
		// @ts-ignore
		this.setState({ [event.target.id]: event.target.value });
	}

	async handleSubmit(event: any) {
		const res = await axios.post("http://localhost:4000/auth/register", {
			email: this.state.email,
			password: this.state.password
		});
		console.log(res);
	}

	render() {
		return (
			<Form>
				<div className="h1"> Create New Account </div>
				<div className="input-wrapper">
					<div className="input">
						<Group>
							<Label>First Name:</Label>
							<Input type="text" id="firstName" placeholder="William" />

							<Label>Last Name:</Label>
							<Input type="text" id="lastName" placeholder="Perdormo" />

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
						</Group>

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
			</Form>
		);
	}
}
