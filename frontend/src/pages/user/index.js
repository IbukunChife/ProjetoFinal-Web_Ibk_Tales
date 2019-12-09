import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default class User extends Component {
    state = {
        user: [],
        products: []
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/user/${id}`);
        this.setState({ user: response.data });

        const responseProducts = await api.get('/product');
        this.setState({ products: responseProducts.data });
    };

    render() {
        const { user } = this.state;
        if (user.isAdmin) {
            return (
                <div id="body-signup">
                    <div className="container-signup">
                        <Link to="/admin"><button>Adicionar produto</button></Link>
                        <div>
                            <p>Name: {this.state.user.name} </p>
                            <p>Email: {this.state.user.email}</p>
                        </div>
                        <div>
                            <table className="table">
                                <thead>
                                    <td>Produto</td>
                                    <td>Remover</td>
                                </thead>
                                <tbody>
                                    {this.state.products.map(product => (
                                        <tr key={product._id}>
                                            <td>
                                                {product.title}
                                            </td>
                                            <td>
                                            <Link to={`/remove/${product._id}`}><button>Remover</button></Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="body-signup">
                    <div className="container-signup">
                        <div>
                            <a href="https://netclotheschatibktalhes.netlify.com">Chat de atendimento</a>
                            <p>Name: {this.state.user.name} </p>
                            <p>Email: {this.state.user.email}</p>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}
