import React from "react";
import "../styles/App.css";
import dummy_data from "../../public/placeholder_assets/itemsStub";
import ItemCard from "./ItemCard";
import {Container, Row} from "react-bootstrap";

export interface ItemState {
    items: {
            name: string,
            price: string,
            desc: string,
            img: string
    }[]    
}

export default class ItemViewer extends React.Component<{}, ItemState> {
    constructor(props: any){
        super(props);
    }
    render() {
        let itemCards = dummy_data.map(item =>{
            return (
                <ItemCard item={item} />
            )
        })
        return (
            <div >
                <Container fluid>
                    <Row noGutters={true} className="justify-content-md-center">
                        {itemCards}
                    </Row>
                </Container>
            </div>
      );
    }
}