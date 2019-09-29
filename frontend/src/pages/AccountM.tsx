import React from "react";
import "../styles/App.css";
import {
	Row,
	Col,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label
} from "react-bootstrap";
import PageContent from "../PageContent";
import axios from "axios";
export interface AccountInfoState {
	firstName: string;
	lastName: string;
	email: string;
}
export interface AccountInfoProps {}
export default class AccountM extends React.Component<
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
		console.log(res);

		const user: AccountInfoState = {
			firstName: res.data.user.firstName,
			lastName: res.data.user.lastName,
			email: res.data.user.email
		};
		this.setState({ ...user });
	}
	render() {
		return (
			<div>
				<Row>
					<div className="body-heading">AdminView</div>
				</Row>
				<Row>
					<div>
						<h3>Accounts info</h3>
						<div>
							<div id="table">
								<span>
									<a href="User">
										<i aria-hidden="true"></i>
									</a>
								</span>
								<table>
									<thead>
										<tr>
											<th>First Name </th>
											<th>Last Name </th>

											<th> Adress</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Aurelia </td>

											<td>Deepends</td>
											<td></td>
											<td>Madrid</td>
											<td>
												<span>
													<a href="#">
														<i aria-hidden="true"></i>
													</a>
												</span>
												<span>
													<a href="#">
														<i aria-hidden="true"></i>
													</a>
												</span>
											</td>
											<td>
												<span>
													<button type="button">Remove</button>
												</span>
											</td>
										</tr>

										<tr>
											<td>Guerra </td>

											<td>Insectus</td>
											<td></td>
											<td>San Francisco</td>
											<td>
												<span>
													<a href="#">
														<i aria-hidden="true"></i>
													</a>
												</span>
												<span>
													<a href="#">
														<i aria-hidden="true"></i>
													</a>
												</span>
											</td>
											<td>
												<span>
													<button type="button">Remove</button>
												</span>
											</td>
										</tr>

										<tr>
											<td>Guadalupe </td>

											<td>Isotronic</td>
											<td></td>
											<td>Frankfurt am Main</td>
											<td>
												<span>
													<a href="#">
														<i aria-hidden="true"></i>
													</a>
												</span>
												<span>
													<a href="#">
														<i aria-hidden="true"></i>
													</a>
												</span>
											</td>
											<td>
												<span>
													<button type="button">Remove</button>
												</span>
											</td>
										</tr>

										<tr>
											<td>Elisa </td>

											<td>Portica</td>
											<td></td>
											<td>London</td>
											<td>
												<span>
													<a href="#">
														<i aria-hidden="true"></i>
													</a>
												</span>
												<span>
													<a href="#">
														<i aria-hidden="true"></i>
													</a>
												</span>
											</td>
											<td>
												<span>
													<button type="button">Remove</button>
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<Col>
						<div className="content-body flex-center">
							<div className="input">
								<Group>
									<div>
										{" "}
										<h3>Add Account</h3>{" "}
									</div>
									<Label>{PageContent.firstName.label}</Label>
									<Input type="text" value={this.state.firstName} disabled />

									<Label>{PageContent.lastName.label}</Label>
									<Input type="text" value={this.state.lastName} disabled />

									<Label>{PageContent.email.label}</Label>
									<Input type="text" disabled value={this.state.email} />
								</Group>
								<button type="button">Add Account</button>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
