import React from "react";
import "../styles/App.css";
import {Jumbotron, Container} from "react-bootstrap";
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
            <Jumbotron fluid>
                <Container>
                    <div>
                        <img src={`./images/placeholder_assets/${this.state.items[1].img}`}/>
                    </div>
                    <div>
                        <h1>{this.state.items[1].name}</h1>
                        
                    </div>
                </Container>
            </Jumbotron>
        );
    }
}