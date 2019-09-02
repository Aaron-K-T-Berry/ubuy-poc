import React from "react";
import "../styles/App.css";
import PageContent from "../PageContent";
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
		const res = await axios.post("http://localhost:4000/auth/register", {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		});
		console.log(res);
	}

	render() {
		return (
			<div className="content-body flex-center">
				<div className="body-heading">Create New Account</div>
				<div className="input">
					<Label>{PageContent.firstName.label}</Label>
					<Input
						type="text"
						id="firstName"
						placeholder={PageContent.firstName.placeholder}
						value={this.state.firstName}
						onChange={this.handleChange}
					/>

					<Label>{PageContent.lastName.label}</Label>
					<Input
						type="text"
						id="lastName"
						placeholder={PageContent.lastName.placeholder}
						value={this.state.lastName}
						onChange={this.handleChange}
					/>

					<Label>{PageContent.email.label}</Label>
					<Input
						type="text"
						id="email"
						placeholder={PageContent.email.placeholder}
						value={this.state.email}
						onChange={this.handleChange}
					/>

					<Label>{PageContent.password.label}</Label>
					<Input
						type="password"
						id="password"
						value={this.state.password}
						onChange={this.handleChange}
						placeholder={PageContent.password.register_placeholder}
					/>

					<Label>{PageContent.password.confirm_label}</Label>
					<Input
						type="password"
						id="passwordConfirm"
						placeholder={PageContent.password.confirm_placeholder}
					/>
				
					<Button
						className="button"
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
