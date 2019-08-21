import React from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import {Button, Form, FormGroup as Group, FormControl as Input, FormLabel as Label} from 'react-bootstrap';

export default class AccountInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="h1">Account Information</div>
                <div className="input-wrapper">
                    <div className="input">
                    <Group controlId="formInfo">
                        <Label>First Name:</Label>
                        <Input type="text" placeholder="This should be acc first name." disabled/>

                        <Label>Last Name:</Label>
                        <Input type="text" placeholder="Should be user's last name" disabled/>

                        <Label>Email:</Label>
                        <Input type="text" placeholder="User's email" disabled/>
                    </Group>
                        <Button>Edit</Button>
                    </div>
                </div>
            </div>
        );
    }
}