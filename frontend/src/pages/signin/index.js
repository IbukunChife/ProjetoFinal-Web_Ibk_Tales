import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Signin extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        const responseUser = await api.get("/user");
        responseUser.data.forEach(element => {
            if (this.state.email === element.email) {
                localStorage.setItem('user', element._id)
                if (element.isAdmin) {
                    this.props.history.push("/admin");
                } else {
                    this.props.history.push("/");
                }
            }
        });

    };

    setEmail = e => {
        this.setState({
            email : e.target.value
        });
    };
    setPassword = e => {
        this.setState({
            password : e.target.value
        });
    }

    render() {
        return (
            <div id="body-signin">
                <div className="container-signin">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row-signin">
                            <h2>Sign In</h2>
                            <div className="col-signin">
                                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.setEmail}  required />
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.setPassword} required />
                                <input type="submit" value="Sign in" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bottom-container-signin">
                    <div className="row-signin">
                        <div className="col-signin">
                            <a href="#" className="btn-signin">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}