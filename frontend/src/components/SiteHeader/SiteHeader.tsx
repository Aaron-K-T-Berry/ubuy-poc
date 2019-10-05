import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "../../styles/App.css";
import "./styles/Animations.css";
import "./styles/SiteHeader.css";
import Search from "../Search";
import AuthHelper from "../../common/AuthHelper";

export interface SiteHeaderProps {
	isAuthenticated: boolean;
}
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
								<Link style={{ textDecoration: "none" }} to="/">
									<h1 className="logo">
										<img
											className="logo-image"
											src="/images/branding/logo.jpg"
											alt="uBay-logo"
										></img>
										Buy
									</h1>
								</Link>
							</Col>
						</Row>
						<Row>
							<Col>
								<Search />
							</Col>
						</Row>
						<Row>
							{this.props.isAuthenticated ? (
								// Show when the user is authenticated
								<>
									<Col>
										<NavLink
											style={{ textDecoration: "none" }}
											activeStyle={{ color: "steelblue" }}
											to="/account/user"
										>
											{" "}
											<h2> Account </h2>{" "}
										</NavLink>
									</Col>
									<Col>
										<NavLink
											style={{ textDecoration: "none" }}
											activeStyle={{
												color: "steelblue",
												borderBottom: "1px, solid, red"
											}}
											to="/cart"
										>
											{" "}
											<img
												src="/images/branding/credit_card_shopping.png"
												width="50"
												height="50"
												alt="uBay-logo"
											/>{" "}
										</NavLink>
									</Col>
									<Col>
										<NavLink
											style={{ textDecoration: "none" }}
											activeStyle={{ color: "steelblue" }}
											onClick={() => {
												AuthHelper.logout();
											}}
											to="/"
										>
											{" "}
											<h3 className="outsign">Logout</h3>{" "}
										</NavLink>
									</Col>
								</>
							) : (
								// What to show when unauthenticated
								<>
									<Col>
										<NavLink
											style={{ textDecoration: "none" }}
											activeStyle={{ color: "steelblue" }}
											to="/register/user"
										>
											{" "}
											<h2> Register </h2>{" "}
										</NavLink>
									</Col>
									<Col>
										<NavLink
											style={{ textDecoration: "none" }}
											activeStyle={{ color: "steelblue" }}
											to="/login"
										>
											{" "}
											<h2> Login </h2>
										</NavLink>
									</Col>
								</>
							)}
						</Row>
					</Container>
				</Navbar>
			</div>
		);
	}
}
