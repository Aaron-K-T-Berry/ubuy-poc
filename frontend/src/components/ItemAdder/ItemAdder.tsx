import React from "react";
import "../../styles/App.css";
import {
	Button,
	FormControl as Input,
	FormLabel as Label,
    InputGroup
} from "react-bootstrap";
import BranchSelector from "../Selectors/BranchSelector";
import CategorySelector from "../Selectors/CategorySelector";

// Add state here
export interface ItemAdderState {

}

// Add passed in props here
export interface ItemAdderProps {

}

export default class ItemAdder extends React.Component<ItemAdderProps, ItemAdderState> {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit() {
        // add item;
    }

    decrementQty() {

    }

    incrementQty() {
    }

    render() {
        return (
            <div className="input">
                <Label>Item Name:</Label>
                <InputGroup>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Item Name"
                    />
                </InputGroup>

                <Label>Price:</Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Input
                        placeholder="0.00"
                    >

                    </Input>
                </InputGroup>

                <Label>Description:</Label>
                <InputGroup>
                    <Input
                        as="textarea"
                        id="desc"
                        placeholder="Description"
                        aria-label="With text area"
                    />
                </InputGroup>

                <Label>Quantity:</Label>
                <InputGroup>
                    <Input
                        id="qty"
                        value="1"
                    />
                    <InputGroup.Append>
                        <Button id="decrement" onClick={this.decrementQty} variant="danger"> - </Button>
                        <Button id="increment" onClick={this.incrementQty} variant="success"> + </Button>
                    </InputGroup.Append>
                </InputGroup>

                <Label>Categories:</Label>
                <CategorySelector />

                <Label>Upload Photo:</Label>
                <InputGroup>
                    <Button id="uploadPhoto" variant="info">Upload</Button>
                </InputGroup>

                <Label>Branch:</Label>
                <BranchSelector />
            </div>
        );
    }

}
