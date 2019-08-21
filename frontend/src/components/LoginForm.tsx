import React from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import {Button, Form, FormGroup as Group, FormControl as Input, FormLabel as Label} from 'react-bootstrap';

function login() {

}


export default class LoginForm extends React.Component {
    render() {
        return (
            <Form>
                <div className="h1">uBuy</div>
                
                <div className="input-wrapper">
                    <div className="input">
                        <Group controlId="formEmail">
                            <Label> Email Address:</Label>
                            <Input type="text" placeholder="name@example.com"/>
                        </Group>
                        <Group controlId="formPassword">
                            <Label> Password: </Label>
                            <Input type="password" placeholder="Password"/>
                        </Group>
                    
                        <Label id="labelFeedback"></Label>
                        <Link to="/account">
                            <Button id="buttonLogin" block>Log In</Button>
                        </Link>
                        <Link to="/reset"> Forgot your password? </Link>
                        
                        <div className="register">
                            <div className="h2">New Customer? </div>
                            <Link to="/register" >
                                <Button id="buttonRegisterUser" block> Register </Button>
                            </Link>
                        </div>
                    </div>                    
                </div>
                
            </Form>
        );
    }
}