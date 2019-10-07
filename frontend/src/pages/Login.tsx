import React from "react";
import "../styles/App.css";
import "./styles/Login.css";
import PageContent from "../PageContent";
import { Link, Redirect } from "react-router-dom";
import {
	Button,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label,
	Col,
	Container,
	Row
} from "react-bootstrap";
import axios from "axios";
import env from "../common/ConfigHelper";
import "./styles/Login.css";
import { toast } from "react-toastify";

// Add state here
export interface LoginState {
	email: string;
	password: string;
	loginSuccess: boolean;
	referralError?: string;
}

// Add passed in props here
export interface LoginProps {
	authFunc: any;
	location?: any;
}

export default class LoginForm extends React.Component<LoginProps, LoginState> {
	constructor(props: any) {
		super(props);
		this.state = {
			email: "",
			password: "",
			loginSuccess: false
		};

		if (this.props.location.state) {
			this.state = {
				...this.state,
				referralError: this.props.location.state.reason
			};
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: any) {
		// @ts-ignore
		// TODO fix this type error
		this.setState({ [event.target.id]: event.target.value });
	}

	async handleSubmit() {
		// TODO get the endpoint from config
		const res = await axios.post(
			`${env.API_HOSTNAME}/auth/authenticate`,
			{
				email: this.state.email,
				password: this.state.password
			},
			{ withCredentials: true }
		);
		if (res.status === 200) {
			this.setState({ loginSuccess: true });
			this.props.authFunc({ isAuthed: true, userType: res.data.userType });
		}
	}

	buildReferralError = () => {
		const errorMessage = this.state.referralError;
		toast(errorMessage);
	};

	render() {
		return (
			<Container className="content-body" fluid={true}>
				{this.state.referralError && this.buildReferralError()}
				<Row>
					<Col className="login-body">
						<div className="body-heading">
							{PageContent.loginPage.existing_cust_label}
						</div>
						<div className="input">
							<Group>
								<Label>{PageContent.email.label}</Label>
								<Input
									type="text"
									placeholder={PageContent.email.placeholder}
									id="email"
									onChange={this.handleChange}
								/>

								<Label>{PageContent.password.label}</Label>
								<Input
									type="password"
									placeholder={PageContent.password.login_placeholder}
									id="password"
									onChange={this.handleChange}
								/>

								<Button
									className="button"
									id="buttonLogin"
									onClick={this.handleSubmit}
								>
									Log In
								</Button>
								{this.state.loginSuccess && <Redirect to={"/"} />}
							</Group>
						</div>
						<div className="body-heading">
							{PageContent.loginPage.new_cust_label}
						</div>
						<div className="input">
							<Link to="/register/user">
								<Button
									className="button btn-outline-primary"
									id="buttonRegisterUser"
								>
									Register
								</Button>
							</Link>
						</div>
					</Col>
					<Col className="login-col">
						<div>
							<img
								src="./images/branding/login-image.jpg"
								className="img-split"
								alt=""
							></img>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}
