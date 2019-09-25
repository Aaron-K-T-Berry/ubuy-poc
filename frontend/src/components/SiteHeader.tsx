import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/App.css";

export interface SiteHeaderProps { }
export interface SiteHeaderState { }
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
              


              <Col>
                <Link to="/cartView">
                  <h2> Cart  <img width="20%" height="20%" alt="Shopping Cart" src="./placeholder_assets/credit_card_shopping.png" /></h2>
                  
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}
