import React, {Component} from 'react';
import Avatar from './avatar.png';
import './dashboard.css';
import {Button, Image} from 'react-bootstrap'

export class Dashboard extends Component {
    constructor(){
        super();
        this.state={
            user: [], 
            name: '',
            email: ''
        }
    }

    componentDidMount(){
        this.setState({
            user: this.props.currentUser,
            name: this.props.currentUser[0].name,
            email: this.props.currentUser[0].email
        });
    };

    
    infoEdit(e){
        e.preventDefault();
        const updateuser = this.state.user;
        updateuser[0].email = this.state.email;
        updateuser[0].name = this.state.name;
        this.props.updateUser(updateuser);
        this.setState({
            user: updateuser
        });

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }


  
    render() {
        return (
            <div className="Dashboard">
            <h2> Aapka Apna Dashboard</h2>  
            <div className="image-div">          
                <Image id="avatar-img" src={Avatar} alt="avatar" circle responsive/>
            </div>
            <div>
            <form onSubmit={(e) => this.infoEdit(e)}>
            <label className="col-form-label">
                        Name:
                    </label>
                    <input
                        className="form-control regInput"  onChange={(e) => this.handleChange(e)} name="name" type="name" value={this.state.name} />
                    <br/>

                    <label className="col-form-label">
                        Email:
                    </label>
                    <input
                        className="form-control regInput" name="email" onChange={(e) => this.handleChange(e)} type="email" value={this.state.email} />
                    <br/>
                    
                    <Button type="submit" value="Update Profile">Profile Update kerein</Button>
                </form>

            </div>
            </div>
        );
    }
}
