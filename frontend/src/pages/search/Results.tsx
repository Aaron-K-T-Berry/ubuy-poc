import React from "react";
import "../../styles/App.css";
import ItemViewer from "../../components/ItemViewer/ItemViewer";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

export interface SearchResultsProps {
	cartFunc: any;
	cartContext: any;
	location?: any;
}

export interface SearchResultsState {
	items: any[];
}

export default class SearchResults extends React.Component<
	SearchResultsProps,
	SearchResultsState
> {
	constructor(props: any) {
		super(props);
		if (this.props.location.state) {
			this.state = {
				...this.state,
				items: this.props.location.state.results
			};
		}
	}

	render() {
		console.log(this.state);

		return (
			<div>
				<Container className="content-body">
					<Row>
						<div className="body-heading">Search Results</div>
					</Row>
					<Row>
						{this.state.items.length > 0 ? (
							<ItemViewer
								getAllItems={false}
								items={this.state.items}
								cartFunc={this.props.cartFunc}
								cartContext={this.props.cartContext}
							/>
						) : (
							<p>No results for your query.</p>
						)}
					</Row>
				</Container>
			</div>
		);
	}
}
