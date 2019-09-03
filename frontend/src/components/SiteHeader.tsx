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
                <Link to="/login"> <h2> Login </h2></Link>
              </Col>
              <Col>
                <Link to="/register/user"> <h2> Register </h2> </Link>
              </Col>
              <Col>
                <Link to="/account"> <h2> Account </h2> </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}
