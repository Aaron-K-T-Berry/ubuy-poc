import React from "react";
import "../styles/App.css";
import {Card, Button, Container, Row, Col} from "react-bootstrap";
let items:Card[] = [];

export default class ItemViewer extends React.Component {
    constructor(props: any){
        super(props);
        
    }

    /* 
    addItem(name : string, price : string, desc : string, img : string) {
        items.push(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(img)} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>${price}</Card.Subtitle>
                    <Card.Text>
                        {desc}}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        );
    }

    returnItems(){
        return (
            <div>
                {items}
            </div>
        );
    } */


    render() {
      return (
        <div >
            <Container fluid>
                <Row noGutters={true} className="justify-content-md-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../mouse_placeholder.jpg')} />
                        <Card.Body>
                            <Card.Title>gaeming mouse</Card.Title>
                            <Card.Subtitle>$7.99</Card.Subtitle>
                            <Card.Text>
                                uNtEtHeReD. uNlEaShED. uNsToPpABlE.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../mouse_placeholder.jpg')} />
                        <Card.Body>
                            <Card.Title>gaeming mouse</Card.Title>
                            <Card.Subtitle>$7.99</Card.Subtitle>
                            <Card.Text>
                                uNtEtHeReD. uNlEaShED. uNsToPpABlE.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../mouse_placeholder.jpg')} />
                        <Card.Body>
                            <Card.Title>gaeming mouse</Card.Title>
                            <Card.Subtitle>$7.99</Card.Subtitle>
                            <Card.Text>
                                uNtEtHeReD. uNlEaShED. uNsToPpABlE.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../mouse_placeholder.jpg')} />
                        <Card.Body>
                            <Card.Title>gaeming mouse</Card.Title>
                            <Card.Subtitle>$7.99</Card.Subtitle>
                            <Card.Text>
                                uNtEtHeReD. uNlEaShED. uNsToPpABlE.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../mouse_placeholder.jpg')} />
                        <Card.Body>
                            <Card.Title>gaeming mouse</Card.Title>
                            <Card.Subtitle>$7.99</Card.Subtitle>
                            <Card.Text>
                                uNtEtHeReD. uNlEaShED. uNsToPpABlE.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    {/* Replace this with actual card loader later*/}
                </Row>
            </Container>
            
        </div>
      );
    }
}