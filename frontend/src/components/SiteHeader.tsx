import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "../styles/App.css";

export interface SiteHeaderProps {}
export interface SiteHeaderState {}

export default class SiteHeader extends React.Component<
  SiteHeaderProps,
  SiteHeaderState
> {
  render() {
    return (
      <div className="site-header">
        <Navbar>
          <Container>
            <Row>
              <Link to="/">
                <h1>uBuy</h1>
              </Link>
            </Row>
            <Row>
              <Col>
                <Link to="/login"> <h3> Login </h3></Link>
              </Col>
              <Col>
                <Link to="/register"> <h3> Register </h3> </Link>
              </Col>
              <Col>
                <Link to="/account"> <h3> Account </h3> </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}
