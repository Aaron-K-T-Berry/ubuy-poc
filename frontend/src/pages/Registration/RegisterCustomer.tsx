import React from "react";
import "../../styles/App.css";
import axios from "axios";
import UserRegistrationForm, {
	UserTypes,
	UserRegistrationFormState
} from "../../Components/UserRegistrationForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import env from "../../common/ConfigHelper";

// Add state here
export interface RegisterState {}

// Add passed in props here
export interface RegisterProps {}

export default class RegisterCustomer extends React.Component<
	RegisterProps,
	RegisterState
> {
	constructor(props: any) {
		super(props);
		this.state = {};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(state: UserRegistrationFormState) {
		// TODO get the endpoint from config
		try {
			await axios.post(`${env.API_HOSTNAME}/user/register`, {
				firstName: state.firstName,
				lastName: state.lastName,
				email: state.email,
				userType: state.userType,
				password: state.password
			});
		} catch (error) {
			const errorCode = error.response.data.ApiCode;
			this.notify(errorCode);
		}
	}

	notify = (errorCode: string) => {
		toast("There was an error submitting: " + errorCode);
	};

	render() {
		const validationKeys = [
			"firstName",
			"lastName",
			"email",
			"password",
			"passwordConfirm"
		];

		return (
			<div className="body-wrapper flex-center">
				<div className="body-heading">Create New Account</div>
				<div className="body-content">
					<UserRegistrationForm
						userType={UserTypes.Customer}
						handleRegister={this.handleSubmit}
						validationKeys={validationKeys}
					/>
				</div>
			</div>
		);
	}
}
