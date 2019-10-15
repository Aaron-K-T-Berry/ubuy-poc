import React from "react";
import "../styles/App.css";
import ItemViewer from "../components/ItemViewer/ItemViewer";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

export interface HomePageProps {
	cartFunc: any;
	cartContext: any;
}

export default class HomePage extends React.Component<HomePageProps, {}> {
	render() {
		return (
			<div>
				<Container className="content-body">
					<Row>
						<div className="body-heading">Recommendations</div>
					</Row>
					<Row>
						<ItemViewer
							cartFunc={this.props.cartFunc}
							cartContext={this.props.cartContext}
						/>
					</Row>
				</Container>
			</div>
		);
	}
}
