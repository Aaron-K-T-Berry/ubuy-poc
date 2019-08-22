import React from "react";
import "../styles/Login.css";
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
			<div>
				<div className="h1">Account Information</div>
				<div className="input-wrapper">
					<div className="input">
						<Group >
							<Label>First Name:</Label>
							<Input
								type="text"
								placeholder="This should be acc first name."
								value={this.state.firstName}
								disabled
							/>

							<Label>Last Name:</Label>
							<Input
								type="text"
								value={this.state.lastName}
								placeholder="Should be user's last name"
								disabled
							/>

							<Label>Email:</Label>
							<Input
								type="text"
								placeholder="User's email"
								disabled
								value={this.state.email}
							/>
						</Group>
						<Button>Edit</Button>
					</div>
				</div>
			</div>
		);
	}
}
