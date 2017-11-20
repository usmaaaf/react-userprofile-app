import React, {Component} from 'react';

import {Button} from 'react-bootstrap'

import './login.css';



export class Login extends Component {

    userMatch(e){
        e.preventDefault();

        const login = this.props.userState.filter((user) => user.email === this.refs.email.value && user.password === this.refs.pass.value );
        if(login.length > 0)
        {
            this.props.correctLogin(login);
        } else {
            this.props.wrongLogin();
        }
        
    }

    render() {
        return (
            <div className="Login">
                <h2>Chae kay Dhabay mein Khushamdeed</h2>
                <h2>Bare meherbani Login Kerein</h2>
                <form onSubmit={(e) => this.userMatch(e)}>
                    <label className="col-form-label">
                        Email:
                    </label>
                    <input
                        className="form-control regInput" type="email" placeholder="Email" ref="email"/>
                    <br/>
                    <label className="col-form-label">
                        Password:
                    </label>
                    <input
                        className="form-control regInput" type="password" placeholder="Password" ref="pass"/>
                    <br/>
                    <Button type="submit" value="login">Submit</Button>
                </form>

            </div>
        );
    }
}
