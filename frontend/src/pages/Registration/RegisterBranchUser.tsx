import React from "react";
import "../../styles/App.css";
import axios from "axios";
import UserRegistrationForm, {
	UserTypes,
	UserRegistrationFormState
} from "../../components/UserRegistrationForm";
import { toast } from "react-toastify";

// Add state here
export interface RegisterState {}

// Add passed in props here
export interface RegisterProps {}

export default class RegisterBranchUser extends React.Component<
	RegisterProps,
	RegisterState
> {
	constructor(props: any) {
		super(props);
	}

	async handleSubmit(state: UserRegistrationFormState) {
		try {
			const res = await axios.post(
				"http://localhost:4000/user/register/internal",
				{
					firstName: state.firstName,
					lastName: state.lastName,
					email: state.email,
					address: state.address,
					password: state.password,
					userType: state.userType,
					branchID: state.branchID
				}
			);
		} catch (error) {
			const errorCode = error.response.data.ApiCode;
			this.notify(errorCode);
		}
	}

	notify = (errorCode: string) =>
		toast("There was an error submitting: " + errorCode);

	render() {
		const validationKeys = [
			"firstName",
			"lastName",
			"email",
			"branchID",
			"password",
			"passwordConfirm"
		];

		return (
			<div className="content-body flex-center">
				<div className="h3"> Create New Branch User </div>
				<UserRegistrationForm
					userType={UserTypes.Internal}
					handleRegister={this.handleSubmit}
					validationKeys={validationKeys}
				/>
			</div>
		);
	}
}
