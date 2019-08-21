import React from 'react';
import "./styles/Register.css";
import {Button, Form, FormGroup as Group, FormControl as Input, FormLabel as Label} from 'react-bootstrap';

export default class RegisterCustomer extends React.Component {
    render() {
        return (
            <Form>
                <div className="h1"> Create New Account </div>

                <div className="input-wrapper">
                    <div className="input">
                        <Group controlId="formEmail">
                            <Label>First Name:</Label>
                            <Input type="text" placeholder="William"/>
                            
                            <Label>Last Name:</Label>
                            <Input type="text" placeholder="Perdormo"/>
                            
                            <Label>Email:</Label>
                            <Input type="text" placeholder="name@example.com"/>

                            <Label>Password:</Label>
                            <Input type="password" placeholder="At least 6 characters long"/>

                            <Label>Confirm Password:</Label>
                            <Input type="password" placeholder="Re-type password"/>
                        </Group>
                        
                        <Button className="register" id="buttonRegister" block>Create Account</Button>
                    </div>
                </div>
            </Form>
        );
    }
}