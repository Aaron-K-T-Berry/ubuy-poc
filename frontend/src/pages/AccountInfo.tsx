import React from "react";
import "../styles/App.css";
import PageContent from "../PageContent";
import {
	Button,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label
} from "react-bootstrap";
import axios from "axios";

export interface AccountInfoProps {}

export interface AccountInfoState {
	firstName: string;
	lastName: string;
	email: string;
}

export default class AccountInfo extends React.Component<
	AccountInfoProps,
	AccountInfoState
> {
	constructor(props: any) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			email: ""
		};
	}

	async componentDidMount() {
		const res = await axios.get("http://localhost:4000/user", {
			withCredentials: true
		});
		const user: AccountInfoState = {
			firstName: res.data.user.firstName,
			lastName: res.data.user.lastName,
			email: res.data.user.email
		};
		this.setState({ ...user });
	}

	componentWillUnmount() {}

	render() {
		return (
			<div className="content-body flex-center">
				<div className="body-heading">Account Information</div>
				<div className="input">
					<Group>
						<Label>{PageContent.firstName.label}</Label>
						<Input
							type="text"
							placeholder={PageContent.firstName.placeholder}
							value={this.state.firstName}
							disabled
						/>

						<Label>{PageContent.lastName.label}</Label>
						<Input
							type="text"
							value={this.state.lastName}
							placeholder={PageContent.lastName.placeholder}
							disabled
						/>

						<Label>{PageContent.email.label}</Label>
						<Input
							type="text"
							placeholder={PageContent.email.placeholder}
							disabled
							value={this.state.email}
						/>
					</Group>
					<Button>Edit</Button>
				</div>
			</div>
		);
	}
}
