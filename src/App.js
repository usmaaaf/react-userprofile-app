import React, {Component} from 'react';

import { Button, ButtonToolbar, Navbar, Nav } from 'react-bootstrap';

import './App.css';
import {Register} from './modules';
import {Login} from './modules';
import {Dashboard} from './modules';
import {Reset} from './modules';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLogin: true,
      isRegister: false,
      isDashboard: false,
      isReset: false,
      errorMessage: "Password does not match! Enter correct password",
      loginError: "Wrong email or Password",
      currentUser: []
    }
    console.log(this.state.users);
  }

  handleNewUser(newuser) {
    let currentstate = this.state.users;
    currentstate.push(newuser);
    this.setState({users: currentstate, isLogin: true, isRegister: false, isDashboard: false, isReset: false});
  }

  handleLoginRoute() {
    this.setState({isLogin: true, isRegister: false, isDashboard: false, isReset: false});
  }

  handleRegisterRoute() {
    this.setState({isLogin: false, isRegister: true, isDashboard: false, isReset: false})
  }

  handleDashboardRoute() {
    this.setState({isLogin: false, isRegister: false, isDashboard: true, isReset: false});
  }

  handleResetRoute() {
    this.setState({isLogin: false, isRegister: false, isDashboard: false, isReset: true})
  }

  handlelogOutRoute() {
    this.setState({currentUser: ""});
    this.handleLoginRoute();
  }

  handleErrorMessage() {
    alert(this.state.errorMessage);
  }

  handleWrongLogin() {
    alert(this.state.loginError);
  }
  handleCorrectLogin(loginDetails) {
    this.handleDashboardRoute();
    this.setState({currentUser: loginDetails});
  }

  handleUserUpdate(user) {
    let current = this.state.users;
    var update = current.map((currentuser) => {
      if (currentuser.id === user.id) {
        return user;
      } else {
        return currentuser;
      }
    })
    this.setState({users: update});
  }

  loginOpen(){
    this.handleLoginRoute();
  }

  render() {
    return (
      <div className="App">
      <Navbar>
      <Nav pullLeft>
        <p id="desi-crav">DesiCrav</p>
      </Nav>
      <Nav pullRight>
      
      <div className="nav-buttons">
      
        <ButtonToolbar>
          {(this.state.isLogin || this.state.isRegister || this.state.isReset)
            ? <div>
                <Button className="button-seperate" onClick={() => this.handleLoginRoute()}>
                  Login
                </Button>

                <Button onClick={() => this.handleRegisterRoute()}>
                  Register
                </Button>
              </div>
            : null}

          {(!this.state.isDashboard)
            ? <Button onClick={() => this.handleResetRoute()}>
                Reset
              </Button>
            : null}

          {(this.state.isDashboard)
            ? <div>
                <Button className="button-seperate" onClick={() => this.handleDashboardRoute()}>
                  Dashboard
                </Button>
                <Button onClick={() => this.handlelogOutRoute()}>
                  Log Out
                </Button>
              </div>
            : null}
        </ButtonToolbar>
        </div>
        </Nav>
        </Navbar>

        {(this.state.isRegister)
          ? <Register
              addUser={(newuser) => this.handleNewUser(newuser)}
              notPass={() => this.handleErrorMessage()}/>
          : (this.state.isLogin)
            ? <Login
                userState={this.state.users}
                wrongLogin={() => this.handleWrongLogin()}
                correctLogin={(login) => this.handleCorrectLogin(login)}/>
            : (this.state.isReset)
              ? <Reset reset={() => this.loginOpen()}/>
              : (this.state.isDashboard)
                ? <Dashboard
                    currentUser={this.state.currentUser}
                    updateUser={(user) => this.handleUserUpdate(user)}/>
                : null}
      </div>

    );
  }
}

export default App;
