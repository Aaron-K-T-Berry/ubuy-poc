import React from "react";
import "../styles/App.css";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup as Group,
  FormControl as Input,
  FormLabel as Label,
  Col,
  Container,
  Row
} from "react-bootstrap";
import axios from "axios";

// Add state here
export interface LoginState {
  email: string;
  password: string;
  loginSuccess: boolean;
}

// Add passed in props here
export interface LoginProps {}

export default class LoginForm extends React.Component<LoginProps, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginSuccess: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.test = this.test.bind(this);
  }

  handleChange(event: any) {
    // @ts-ignore
    // TODO fix this type error
    this.setState({ [event.target.id]: event.target.value });
  }

  async handleSubmit(event: any) {
    // TODO get the endpoint from config
    const res = await axios.post(
      "http://localhost:4000/auth/authenticate",
      {
        email: this.state.email,
        password: this.state.password
      },
      { withCredentials: true }
    );
    if (res.status === 200) {
      this.setState({ loginSuccess: true });
    }
  }
  async test(event: any) {
    // TODO get the endpoint from config
    const res = await axios.get("http://localhost:4000/auth/checkToken", {
      withCredentials: true
    });
  }

  render() {
    return (
      <Container className="homeBody" fluid={true}>
        <Row>
          <Col className="homeBody">
            <h2>Existing Customer?</h2>
            <div className="input-wrapper">
              <Group className="input">
                <Label> Email Address:</Label>
                <Input
                  type="text"
                  placeholder="name@example.com"
                  id="email"
                  onChange={this.handleChange}
                />

                <Label> Password: </Label>
                <Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={this.handleChange}
                />

                <Button
                className="button"
                id="buttonLogin"
                onClick={this.handleSubmit}
              >
                Log In
              </Button>
              {this.state.loginSuccess && <Redirect to={"/account"} />}
              </Group>
            </div>            
          </Col>
          <Col className="homeBody">
            <h2>New Customer?</h2>
            <div className="input">
              <Link to="/register">
                <Button className="button-register" id="buttonRegisterUser">
                  Register
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
