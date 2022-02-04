import React, { Component } from 'react';

class ConditionalRendering extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};

        this.loginClick = this.handleLoginClick.bind(this);
        this.logoutClick = this.handleLogoutClick.bind(this);
    }
    
    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    };

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    };

    render() {


        function UserGreeting(props) {
            return <h1>Welcome back!</h1>
        };

        function GuestGreeting(props) {
            return <h1>Please Login.</h1>
        };

        function Greeting(props) {

            if (props.isLoggedIn) return <UserGreeting />;

            return <GuestGreeting/>;
        };

        function LoginButton(props) {
            return (
              <button onClick={props.onClick}>
                Login
              </button>
            );
          }
          
          function LogoutButton(props) {
            return (
              <button onClick={props.onClick}>
                Logout
              </button>
            );
          }

        return (
            
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {this.state.isLoggedIn ? <LogoutButton onClick={this.logoutClick} /> : <LoginButton onClick={this.loginClick} />}
            </div>
        );
    }
}

export default ConditionalRendering;
