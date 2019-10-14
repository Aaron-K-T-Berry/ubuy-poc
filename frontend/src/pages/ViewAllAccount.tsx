import React from "react";
import "../styles/App.css";
import UserTable from "../components/AccountsViewer/UserViewerTable";
import ApiHelper from "../common/ApiHelper";

export interface ViewUserState {
	users: any[];
}
export interface ViewUserProps {}

export default class ViewAllAccount extends React.Component<
	ViewUserProps,
	ViewUserState
> {
	constructor(props: any) {
		super(props);
		this.state = { users: [] };
	}

	async componentDidMount() {
		const users = await ApiHelper.user.getAllAdmin();
		this.setState({ users });
	}

	handleViewUser() {}

	handleEditUser() {}

	render() {
		return (
			<div className="content-body">
				<div className="body-heading">View All Accounts</div>
				<div>
					<UserTable
						users={this.state.users}
						handleEditUser={this.handleEditUser}
						handleViewUser={this.handleViewUser}
					/>
				</div>
			</div>
		);
	}
}
