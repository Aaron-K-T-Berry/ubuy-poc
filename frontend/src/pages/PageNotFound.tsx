import React from "react";
import "../styles/App.css";

export interface NotFoundProps {}

export interface NotFoundState {}

export default class PageNotFound extends React.Component<
	NotFoundProps,
	NotFoundState
> {
	render() {
		return (
			<div className="centre">
				<h2>404 - Not Found</h2>
				<p>The resource you have requested does not exist</p>
			</div>
		);
	}
}
