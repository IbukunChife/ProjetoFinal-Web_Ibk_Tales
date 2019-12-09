import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import upperCase from 'upper-case';

export default class Category extends Component {
    state = {
        products: [],
        categoria: ''
    };

    async componentDidMount() {
        const categoria = upperCase(this.props.match.params.categoria);
        const genero = upperCase(this.props.match.params.genero);
        const response = await api.get('/product');
        let productsList = []
        console.log(response.data);

        response.data.forEach(element => {
            if (genero === upperCase(element.genero) && categoria === upperCase(element.categoria)) {
                productsList.push(element);
            }
        });
        console.log(productsList);
        this.setState({ categoria: categoria });
        this.setState({ products: productsList });
    };

    render() {
        return (
            <div id="body-category">
                <div className="header-category">
                    <h3>{this.state.categoria}</h3>
                </div>
                <div className="card-category">
                    <div className="row-category">
                        {this.state.products.map(product => (
                            <div key={product._id} className="column-category">
                                <div className="card-product-category">
                                    <Link to={`/product/${product._id}`}>
                                        <div className="product-image-category" style={{ backgroundImage: `url(${product.url})` }} />
                                    </Link>
                                    <h2>{product.title}</h2>
                                    <p className="price-category">R${product.price} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}