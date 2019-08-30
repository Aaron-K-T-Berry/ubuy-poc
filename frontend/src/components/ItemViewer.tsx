import React from "react";
import "../styles/App.css";
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
        this.state = {
            items: [
                {
                    name: "nice mouse bro",
                    price: "7.99",
                    desc: "wow",
                    img: "mouse.jpg"
                },
                {
                    name: "wow rays",
                    price: "11.99",
                    desc: "let there be light",
                    img: "rtx.jpg"
                },
                {
                    name: "greatest mouse of all time",
                    price: "1199.99",
                    desc: "GOAT",
                    img: "ball_mouse.jpg"
                },
                {
                    name: "cheese grater",
                    price: "5999.99",
                    desc: "that is base price btw.",
                    img: "cheesegrater.jpg"
                },
                {
                    name: "xDr PrO dIsPlAy",
                    price: "4999.99",
                    desc: "The first 32-inch Retina 6K display ever. Over a billion colours presented with exceptional accuracy." +
                            "Introducing Apple Pro Display XDR, the world’s best pro display. *Monitor stand not included.",
                    img: "xD.jpg"
                },
                {
                    name: "monitor stand",
                    price: "999.99",
                    desc: "monitor stand included",
                    img: "stand_XD.jpg"
                }
            ]
        }
    }
    render() {
        let itemCards = this.state.items.map(item =>{
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