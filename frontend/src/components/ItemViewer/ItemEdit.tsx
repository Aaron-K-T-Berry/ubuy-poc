import React from "react";
import "../../styles/App.css";
import "./styles/ItemSingleView.css";
import dummy_data, { Item } from "./data/itemsStub";
import {
	Button,
	Form,
	FormGroup as Group,
	FormControl as Input,
	FormLabel as Label,
	InputGroup,
	ButtonGroup
} from "react-bootstrap";

export interface EditItemState {
	items: Item[];
}

export interface EditItemProps {
	itemID: number;
}

export default class EditItem extends React.Component<
	EditItemProps,
	EditItemState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			items: dummy_data
		};
	}

	render() {
		return (
			<div className="content-body flex-center">
				<div className="img-container">
					<img
						alt="Product"
						className="product-img height"
						src={`../../images/placeholder_assets/${this.state.items[0].img}`}
					/>
					<div className="middle">
						<Button className="hover-button"> Change image </Button>
					</div>
				</div>

				<Form className="item-content height bold">
					<Group>
						<Label>Item Name:</Label>
						<Input
							size="lg"
							type="text"
							placeholder={this.state.items[0].name}
							disabled={true}
						/>
					</Group>

					<Group>
						<Label>Price:</Label>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>$</InputGroup.Text>
							</InputGroup.Prepend>
							<Input
								type="number"
								placeholder={this.state.items[0].price}
								disabled={true}
							/>
						</InputGroup>
					</Group>

					<Group>
						<Label>Item Description:</Label>
						<Input
							as="textarea"
							rows="3"
							placeholder={this.state.items[0].desc}
							disabled={true}
						/>
					</Group>
					<ButtonGroup>
						<Button variant="success"> Edit </Button>
						<Button variant="danger"> Delete </Button>
					</ButtonGroup>
				</Form>
			</div>
		);
	}
}
