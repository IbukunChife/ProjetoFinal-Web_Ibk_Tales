import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/product/${id}`);
        this.setState({product: response.data});
    };

    render() {
        const {product} = this.state;
        return (
            <div id="body-product">
                <div className="row-product">
                    <div className="leftcolumn-product">
                        <div className="image-product" style={{ backgroundImage: `url(${product.url})` }} />
                        <img style={{ backgroundImage: `url(${product.url})` }} />
                    </div>
                    <div className="rightcolumn-product">
                        <h1>{product.title}</h1>
                        <p className="price-product">R${product.price}</p>
                        <p>{product.description} </p>
                        <p><button>Add to Cart</button></p>
                    </div>
                </div>
            </div>
        );
    }

}