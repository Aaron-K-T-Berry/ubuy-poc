import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
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
              <Col>
              <Link style={{ textDecoration: 'none' }} to="/">
                <h1 className="logo"><img src="./placeholder_assets/logo.jpg" width="50" height="50" alt="uBay-logo"></img>Buy</h1>
              </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <NavLink style={{ textDecoration: 'none' }} activeStyle={{ color: 'steelblue' }} to="/login"> <h2> Login </h2></NavLink>
              </Col>
              <Col>
                <NavLink style={{ textDecoration: 'none' }} activeStyle={{ color: 'steelblue' }} to="/register/user"> <h2> Register </h2> </NavLink>
              </Col>
              <Col>
                <NavLink style={{ textDecoration: 'none' }} activeStyle={{ color: 'steelblue' }} to="/account"> <h2> Account </h2> </NavLink>
              </Col>
              <Col>
                <NavLink style={{ textDecoration: 'none' }} activeStyle={{ color: 'steelblue' }} to="/cart"> <h2> Cart </h2> </NavLink>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}
