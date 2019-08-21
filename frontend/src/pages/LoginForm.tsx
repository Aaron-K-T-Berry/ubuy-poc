import React from "react";
import "../styles/Login.css";
import { Link, Redirect } from "react-router-dom";
import {
	Button,
	Form,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label
} from "react-bootstrap";
import axios from "axios";

// Add state here
export interface LoginState {
	email: string;
	password: string;
	loginSuccess: boolean;
}

// Add passed in props here
export interface LoginProps {}

export default class LoginForm extends React.Component<LoginProps, LoginState> {
	constructor(props: any) {
		super(props);
		this.state = {
			email: "",
			password: "",
			loginSuccess: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.test = this.test.bind(this);
	}

	handleChange(event: any) {
		// @ts-ignore
		// TODO fix this type error
		this.setState({ [event.target.id]: event.target.value });
	}

	async handleSubmit(event: any) {
		// TODO get the endpoint from config
		const res = await axios.post(
			"http://localhost:4000/auth/authenticate",
			{
				email: this.state.email,
				password: this.state.password
			},
			{ withCredentials: true }
		);
		if (res.status === 200) {
			this.setState({ loginSuccess: true });
		}
	}
	async test(event: any) {
		// TODO get the endpoint from config
		const res = await axios.get("http://localhost:4000/auth/checkToken", {
			withCredentials: true
		});
	}

	render() {
		return (
			<Form>
				<div className="h1">uBuy</div>

				<div className="input-wrapper">
					<div className="input">
						<Group>
							<Label> Email Address:</Label>
							<Input
								type="text"
								placeholder="name@example.com"
								id="email"
								onChange={this.handleChange}
							/>
						</Group>
						<Group>
							<Label> Password: </Label>
							<Input
								type="password"
								placeholder="Password"
								id="password"
								onChange={this.handleChange}
							/>
						</Group>

						<Label id="labelFeedback" />

						<Button id="buttonLogin" block onClick={this.handleSubmit}>
							Log In
						</Button>

						{/* Handle redirect after successful login */}
						{this.state.loginSuccess && <Redirect to={"/account"} />}

						<Link to="/reset"> Forgot your password? </Link>

						<div className="register">
							<div className="h2">New Customer? </div>
							<Link to="/register">
								<Button id="buttonRegisterUser" block>
									Register
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</Form>
		);
	}
}
