import React from "react";
import "../styles/App.css";
import "./styles/ViewItem.css";
import {Jumbotron, Container, Button} from "react-bootstrap";
import dummy_data, {Item} from "../components/ItemViewer/data/itemsStub";

export interface ViewItemState {
    items: Item[];
}

export interface ViewItemProps {
    itemID: number;
}

export default class ViewItem extends React.Component<ViewItemProps, ViewItemState> {
    constructor(props: any){
        super(props);
        this.state = {
            items: dummy_data
        }
    }

    render(){
        return(
            <div className="content-body flex-center">
                    <div>
                        <img className="product-img height" src={`../images/placeholder_assets/${this.state.items[0].img}`}/>
                    </div>
                    <div className="item-content height">
                        <div className="item-name">
                            {this.state.items[0].name}
                        </div>
                        <div className="item-body">
                            <em className="price">
                                ${this.state.items[0].price}  
                            </em>
                            <Button className="button-cart" variant="success"> Add to cart </Button>
                        </div>                        
                        <b> Description: </b>{this.state.items[0].desc}
                    </div>
            </div>  
        );
    }
}