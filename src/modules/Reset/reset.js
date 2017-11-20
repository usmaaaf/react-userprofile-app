import React, {Component} from 'react';

import './reset.css'

export class Reset extends Component {

    renderLogin(e){
        e.preventDefault();
        this.props.reset();
    }
  
    render() {
        return (
            <div className="Register">
            <h2>Password Bhool Gaye Ho Kia?</h2>    
            <input className="form-control resetInput" type="text" placeholder="Enter your email address"/>
            <br/>
            <input className="form-control resetSubmit" type="submit" onClick={(e) => this.renderLogin(e)} value="Reset"/>      
            </div>
        );
    }
}
