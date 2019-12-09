import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default class Signup extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        await api.post('/user',{
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        window.location.reload();
    };

    setName = e => {
        this.setState({
            name: e.target.value
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
            <div id="body-signup">
                <div className="container-signup">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row-signup">
                            <h2>Sign Up</h2>
                            <div className="col-signup">
                                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.setName} required />
                                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.setEmail}  required />
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.setPassword} required />
                                <input type="submit" value="Sign up" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bottom-container-signup">
                    <div className="row-signup">
                        <div className="col-signup">
                            <Link to="/signin"><div className="btn-signup" >Sign in</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
