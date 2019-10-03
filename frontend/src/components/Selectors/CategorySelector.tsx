import React from "react";
import "../../styles/App.css";
import dummy_category_data, { Category } from "./data/categoryStub";
import { Form } from "react-bootstrap";

export interface CategoryState {
	categories: Category[];
}

export default class CategorySelector extends React.Component<
	{},
	CategoryState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			categories: dummy_category_data
		};
	}

	render() {
		return (
			<Form.Group className="checkbox">
				{this.state.categories.map(category => {
					return (
						<Form.Check
							type="checkbox"
							id={category.id}
							label={category.name}
						/>
					);
				})}
			</Form.Group>
		);
	}
}
