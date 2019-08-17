import React from "react";
import "./styles/Login.css";
import RegisterUser from './RegisterCustomer';
import { Link } from "react-router-dom";
import {Button, Form, FormGroup as Group, FormControl as Input, FormLabel as Label} from 'react-bootstrap';


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
                        <Button id="buttonLogin" block>Log In</Button>
                        <Link to="/reset"> Forgot your password? </Link>
                        
                        <div className="register">
                            <div className="h2">New Customer? </div>
                            <Button id="buttonRegisterUser" block> Register </Button>
                        </div>
                    </div>                    
                </div>
                
            </Form>
        );
    }
}