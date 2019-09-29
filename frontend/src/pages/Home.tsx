import React from "react";
import "../styles/App.css";
import ItemViewer from "../components/ItemViewer/ItemViewer";
import Search from "../components/Search/Search";
import {Container} from "react-bootstrap"
import { Row, Col } from "react-bootstrap";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Container className="content-body">
          <Row className="search flex-center">
            <Col>
              <Search />
            </Col>
          </Row>
          <Row>
            <div className="body-heading">Recommendations</div>
          </Row>
          <Row>
            <ItemViewer />
          </Row>
        </Container>
      </div>
    );
  }
}
