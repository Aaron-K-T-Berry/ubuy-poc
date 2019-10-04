import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import React from "react";
import "../styles/App.css";
import {
	Form,
	FormControl as Input,
	FormLabel as Label
} from "react-bootstrap";
import PageContent from "../PageContent";

export default class CartView extends React.Component {
	render() {
		return (
			<div>
				<Container className="content-body">
					<Row>
						<Col className="content-body">
							<div className="body-heading">
								{PageContent.checkoutPage.checkout_cust_label}

							</div>
							<Col>
								<div className="body-heading">
									{PageContent.checkoutPage.cart_cust_label}
										<data>
									<text> :$88</text>
								</data>
								</div>
								<div className="input">
									<h2>Billing address</h2>
									<Form.Group>
										<Label>First Name:</Label>
										<Input type="text" id="firstNameco" placeholder="" />
									</Form.Group>
									<Form.Group>
										<Label>LastName:</Label>
										<Input type="text" id="LastNameco" placeholder="" />
									</Form.Group>
									<Form.Group>
										<Label>E-Mail:</Label>
										<Input
											type="text"
											id="emailco"
											placeholder="you@example.com"
										/>
									</Form.Group>
									<Form.Group>
										<Label>Adress</Label>
										<Input
											type="text"
											id="addressco"
											placeholder="1234 Main St"
										/>
									</Form.Group>
									<Form.Group>
										<Label>Adress 2</Label>
										<Input
											type="text"
											id="addressco2"
											placeholder="1234 Main St (optional)"
										/>
									</Form.Group>
								</div>
								<Form.Group>
									<label>State select </label>
									<div>
										<select id="exampleFormControlSelect1">
											<option>QLD </option>
											<option>SA </option>
											<option>TAS</option>
											<option>VIC</option>
											<option>WA </option>
											<option>NSW</option>
										</select>
									</div>
								</Form.Group>
								<Form.Group>
									<Label>ZIP</Label>
									<Input type="text" id="zipco" placeholder="" />
								</Form.Group>
							</Col>
						</Col>

						<Col>
							<div className="body-heading">
								{PageContent.checkoutPage.checkout_payment_label}
							</div>
							<div>
								<input
									type="radio"
									name="exampleRadios"
									id="credit"
									value="option1"
									checked
								></input>
								<label>Credit Card</label>
							</div>
							<div>
								<input
									type="radio"
									name="exampleRadios"
									id="debit"
									value="option2"
								></input>
								<label>Debit Card</label>
							</div>
							<div>
								<input
									type="radio"
									name="exampleRadios"
									id="paypal"
									value="option2"
								></input>
								<label>Paypal</label>
							</div>

							<Form.Group>
								<Label>Name on Card</Label>
								<Input type="text" id="nameoncard" placeholder="" />
								<Label>Card number</Label>
								<Input type="text" id="cardnumber" placeholder="" />
								<Label>Expiration</Label>
								<Input type="text" id="expiration" placeholder="" />
								<Label>CVV number</Label>
								<Input type="text" id="cvvnumber" placeholder="" />
							</Form.Group>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
