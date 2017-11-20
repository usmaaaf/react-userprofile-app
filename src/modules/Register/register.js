import React, {Component} from 'react';

import {Button} from 'react-bootstrap'
import uuid from 'uuid';

import './register.css'

export class Register extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            isLogin: false
        }
    }

    register(event) {
        event.preventDefault();
        if (this.refs.confirmpass.value !== this.refs.pass.value) {
            this
                .props
                .notPass();
        } else {

            const email = this.refs.email.value;
            const password = this.refs.pass.value;
            const confirmPassword = this.refs.confirmpass.value;

            const user = {
                id: uuid.v4(),
                name: '',
                email: email,
                password: password
            }
            this
                .props
                .addUser(user);
        }
    }

    render() {
        return (
            <div className="Register">
            <h2>Register Kerein</h2>
                <form className="form-group" onSubmit={(e) => this.register(e)}>

                    <label className="col-form-label">
                        Email:
                    </label>
                    <input
                        className="form-control regInput"
                        type="email"
                        placeholder="email"
                        ref="email"/>
                    <br/>
                    <label className="col-form-label">
                        Password:
                    </label>
                    <input
                        className="form-control regInput"
                        type="password"
                        placeholder="Password"
                        ref="pass"/>
                    <br/>
                    <label className="col-form-label">
                        Confirm Password:
                    </label>
                    <input
                        className="form-control regInput"
                        type="password"
                        placeholder="Confirm Password"
                        ref="confirmpass"/>
                    <br/>
                    <Button type="submit" value="submit">Register</Button>
                </form>

            </div>
        );
    }
}
