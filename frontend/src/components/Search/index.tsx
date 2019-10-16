import React from "react";
import "../../styles/App.css";
import "./styles/Search.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import ApiHelper from "../../common/ApiHelper";
import { Redirect } from "react-router";

export interface SearchState {
	query: string;
	results: any[];
	redirect: boolean;
}

export default class Search extends React.Component<{}, SearchState> {
	constructor(props: any) {
		super(props);
		this.state = {
			query: "",
			results: [],
			redirect: false
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event: any) => {
		this.setState({ ...this.state, query: event.target.value });
	};

	handleSearch = async () => {
		if (this.state.query !== "") {
			const results = (await ApiHelper.item.search(this.state.query)) as {
				data: any[];
			};
			if (results !== undefined && results.data !== undefined) {
				this.setState({ ...this.state, results: results.data, redirect: true });
			}
		}
	};

	render() {
		return (
			<div className="search">
				<InputGroup>
					<FormControl
						type="text"
						id="query"
						placeholder="Search our range"
						onChange={this.handleChange}
					/>
					<InputGroup.Append>
						<Button variant="primary" onClick={this.handleSearch}>
							Search
						</Button>
					</InputGroup.Append>
				</InputGroup>

				{this.state.redirect && (
					<Redirect
						to={{
							pathname: "/search/result",
							state: {
								results: this.state.results
							}
						}}
					/>
				)}
			</div>
		);
	}
}
