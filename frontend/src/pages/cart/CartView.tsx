import React from "react";
import "../../styles/App.css";
import {
	Container,
	Table,
	Row,
	Col,
	Form,
	FormControl as Input,
	FormLabel as Label,
	FormGroup as Group,
	ButtonGroup,
	Button,
	Modal
} from "react-bootstrap";
import ApiHelper from "../../common/ApiHelper";
import { itemIdToItem } from "../../common/Mappers/ItemMapper";

export interface PaymentViewState {
	transactDetails: {
		billingAddress: string;
		deliveryAddress: string;
		paymentDetails: string;
	};

	cart: {
		userId: string;
		items: any[];
	};

	modal: {
		show: boolean;
		content: {
			title: string;
			buttonText: string;
			body: string;
		};
		handleProceed: any;
	};
}

export default class PaymentView extends React.Component<{}, PaymentViewState> {
	constructor(props: any) {
		super(props);

		this.state = {
			transactDetails: {
				billingAddress: "",
				deliveryAddress: "",
				paymentDetails: "PayPal"
			},
			cart: {
				userId: "",
				items: []
			},
			modal: {
				show: false,
				content: {
					title: "",
					body: "",
					buttonText: ""
				},
				handleProceed: {}
			}
		};

		this.handleChange = this.handleChange.bind(this);
		this.updatedCartContents();
	}

	// componentDidMount() {
	// 	await this.updatedCartContents();
	// }

	updatedCartContents = async () => {
		const res = await ApiHelper.cart.get();
		if (res !== undefined && res.items !== undefined) {
			const mapped = await itemIdToItem(res.items);
			this.setState({
				...this.state,
				cart: { userId: res.userId, items: mapped }
			});
		} else {
			this.setState({
				...this.state,
				cart: {
					userId: "",
					items: []
				}
			});
		}
	};

	calculateCartValue = () => {
		let value = 0;
		this.state.cart.items.forEach(item => {
			if (item !== undefined) {
				value += item.price;
			}
		});
		return value;
	};

	handleChange(event: any) {
		const target = event.target.id;
		const value = event.target.value;
		const newState = {
			cart: this.state.cart,
			transactDetails: {
				...this.state.transactDetails,
				[target]: value
			}
		};
		this.setState({ ...newState });
	}

	handleShowModal = (
		content: {
			title: string;
			body: string;
			buttonText: string;
		},
		handleProceed: any
	) => {
		this.setState({
			...this.state,
			modal: { ...this.state.modal, content, show: true, handleProceed }
		});
	};

	handleHideModal = () => {
		this.setState({
			...this.state,
			modal: { ...this.state.modal, show: false }
		});
	};

	handleExitPage = () => {
		window.location.href = `/cart`;
	};

	handleProcessPayment = () => {
		
	};

	render() {
		return (
			<>
				<div
					className="body-heading"
					style={{ padding: "10px", borderRadius: "10px" }}
				>
					Checkout
				</div>
				<Container>
					<Row>
						<Col style={{ width: "50%" }}>
							<div className="body-content bold" style={{ width: "100%" }}>
								<Form>
									<Group>
										<Label>Billing Address:</Label>
										<Input
											size="lg"
											type="text"
											id="billingAddress"
											value={this.state.transactDetails.billingAddress}
											onChange={this.handleChange}
										/>
									</Group>

									<Label>Delivery Address:</Label>
									<Input
										size="lg"
										type="text"
										id="deliveryAddress"
										value={this.state.transactDetails.deliveryAddress}
										onChange={this.handleChange}
									/>

									<Label>Payment Provider:</Label>
									<Input
										as="select"
										size="lg"
										id="paymentDetails"
										value={this.state.transactDetails.paymentDetails}
										onChange={this.handleChange}
									>
										<option>PayPal</option>
										<option>MasterCard</option>
										<option>Bank Transfer</option>
									</Input>
								</Form>

								<ButtonGroup>
									<Button
										variant="danger"
										onClick={() => {
											this.handleShowModal(
												{
													title: "Are you sure you want to exit?",
													body:
														"By exiting you will lose your current progress.",
													buttonText: "Continue"
												},
												this.handleExitPage
											);
										}}
									>
										Cancel
									</Button>
									<Button
										variant="success"
										onClick={() => {
											this.handleShowModal(
												{
													title: "Confirm Order?",
													body:
														"Are you sure you want to order your current cart contents?",
													buttonText: "Order"
												},
												this.handleProcessPayment
											);
										}}
									>
										Order
									</Button>
								</ButtonGroup>
							</div>
						</Col>
						<Col>
							<Label className="bold">Order Summary:</Label>
							<Table>
								<tr>
									<th>Item</th>
									<th>Price</th>
								</tr>
								{this.state.cart.items.map(item => {
									if (item !== undefined) {
										return (
											<tr>
												<td>{item.name}</td>
												<td>${item.price}</td>
											</tr>
										);
									}
								})}
								<tr>
									<th>Total:</th>
									<td>${this.calculateCartValue()}</td>
								</tr>
							</Table>
						</Col>
					</Row>
				</Container>

				<Modal show={this.state.modal.show} onHide={this.handleHideModal}>
					<Modal.Header closeButton>
						<Modal.Title>{this.state.modal.content.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{this.state.modal.content.body}</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleHideModal}>
							Cancel
						</Button>
						<Button
							variant="primary"
							onClick={() => {
								this.state.modal.handleProceed();
							}}
						>
							{this.state.modal.content.buttonText}
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}
