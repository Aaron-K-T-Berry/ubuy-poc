import React from "react";
import "../styles/App.css";
import {Jumbotron, Container} from "react-bootstrap";

export interface ViewItemState {

}

export interface ViewItemProps {
    item: {
        name: string;
        price: string;
        branch: string;
        desc: string;
        img: string;
    }
}

export default class ViewItem extends React.Component<ViewItemProps, ViewItemState> {
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <Jumbotron fluid>
                <Container>
                    <h1>{this.props.item.name}</h1>
                </Container>
            </Jumbotron>>
        );
    }
}