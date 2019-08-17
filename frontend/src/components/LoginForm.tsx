import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Label from 'react-bootstrap/FormLabel'

export default class LoginForm extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup controlId="formEmail">
                    <Label> Email Address:</Label>
                    <FormControl type="text" placeholder="name@example.com"/>
                </FormGroup>

                <FormGroup controlId="formPassword">
                    <Label> Password: </Label>
                    <FormControl type="password" placeholder="Password"/>
                </FormGroup>

                <Label id="labelFeedback"></Label>
                <Button id="buttonLogin" block>Log In</Button>
            </Form>
        );
    }
}