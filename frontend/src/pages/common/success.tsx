import React from "react";
import "../../styles/App.css";
import PageWrapper from "../../components/Page";

export interface SuccessProps {
	location: any | undefined;
}
export interface SuccessState {
	heading: string;
	bodyText: string;
}

export default class Success extends React.Component<
	SuccessProps,
	SuccessState
> {
	constructor(props: any) {
		super(props);

		if (this.props.location.state !== undefined) {
			const propState = this.props.location.state;
			this.state = {
				heading: propState.heading,
				bodyText: propState.bodyText
			};
		} else {
			this.state = {
				heading: "Success!",
				bodyText: "The action completed successfully."
			};
		}
	}

	render() {
		return (
			<>
				<PageWrapper heading={this.state.heading}>
					<p>{this.state.bodyText}</p>
					<div>{this.props.children}</div>
				</PageWrapper>
			</>
		);
	}
}
