import React from "react";
import "../styles/App.css";
import ItemViewer from "../components/ItemViewer";
import Search from "../components/Search";
import {Container} from "react-bootstrap"
import { Row, Col } from "react-bootstrap";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Container className="homeBody">
          <Row className="search">
            <Col>
              <Search />
            </Col>
          </Row>
          <Row>
            <h2>Recommendations</h2>
          </Row>
          <Row>
            <ItemViewer />
          </Row>          
        </Container>
      </div>
    );
  }
}
