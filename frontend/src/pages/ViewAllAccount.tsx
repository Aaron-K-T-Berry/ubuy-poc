import React from "react";
import "../styles/App.css";
import UserTable from "../components/AccountsViewer/UserViewerTable";

export interface ViewUserState {}
export interface ViewUserProps {}

export default class ViewAllAccount extends React.Component<
	ViewUserProps,
	ViewUserState
> {
	render() {
		return (
			<div className="content-body">
				<div className="body-heading">View All Accounts</div>
				<div>
					<UserTable />
				</div>
			</div>
		);
	}
}
