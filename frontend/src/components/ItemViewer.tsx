import React from "react";
import "../styles/App.css";
import {Card, Button, Container, Row, Col} from "react-bootstrap";

export default class ItemViewer extends React.Component {
    render() {
      return (
        <div >
            <Container fluid={true}>
                <Row noGutters={true} className="justify-content-md-center">
                    {/* Replace this with actual card loader later*/}

                    <Card style={{ width: '18rem' }} className="card">
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