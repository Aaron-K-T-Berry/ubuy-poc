import React from "react";
import "../../styles/App.css";

export interface PageWrapperProps {
	heading: string;
}

export default class PageWrapper extends React.Component<PageWrapperProps, {}> {
	render() { 
		return (
			<>
        <h3>{this.props.heading}</h3>
				{this.props.children}
			</>
		);
	}
}
