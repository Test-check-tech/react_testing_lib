import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
            redirect: false,
            Token: []
        }
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }
    dismissError() {
        this.setState({
            error: ''
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        if (!this.state.username) {
            return this.setState({
                error: 'Username is required'
            });
        }
        if (!this.state.password) {
            return this.setState({
                error: 'Password is required'
            });
        }
        if (this.state.username && this.state.password) {
            this.setState({
                error: '',
            });
            const details = {
                username: this.state.username,
                password: this.state.password
            };
            fetch('http://localhost:8080/api/authenticate', {
                method: 'POST',
                body: JSON.stringify(details),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then((data) => {
                    this.setState({ Token: data })
                    if (this.state.Token.jwt) {
                        localStorage.setItem('token',this.state.Token.jwt);
                        console.log(this.state.Token);
                    } else {
                        alert("check Username and Password")
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    };
    renderRedirect = () => {
        if (this.state.Token.jwt) {
            return <Redirect to='/Dashboard' />
        }
    }
    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };
    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    };
    render() {
        return (
            <div>
                <form>
                    <table>
                        <th> <p>User Name:</p></th>
                        <td> <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} /></td>
                        <th> <p>Password:</p></th>
                        <td> <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} /></td>
                    </table>
                </form>
                {this.renderRedirect()}
                <button onClick={this.handleSubmit}>login</button>
                {
                    this.state.error &&
                    <h3 data-test="error" onClick={this.dismissError}>
                        <button onClick={this.dismissError}>✖</button>
                        {this.state.error}
                    </h3>
                }
            </div>
        )
    }
}
export default Login;