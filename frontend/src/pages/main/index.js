import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        categoriasList: []
    };

    removeDups(names) {
        let unique = {};
        names.forEach(function (i) {
            if (!unique[i]) {
                unique[i] = true;
            }
        });
        return Object.keys(unique);
    }

    componentDidMount() {
        this.loadProducts();
    };

    loadProducts = async () => {
        let categorias = [];
        let productsList = [];

        const response = await api.get('/product');
        response.data.forEach(element => {
            categorias.push(element.categoria)
        });

        categorias = this.removeDups(categorias);

        categorias.forEach(element => {
            let products = [];
            response.data.forEach(p => {
                if (element === p.categoria) {
                    products.push(p);
                }
            });
            productsList.push(
                {
                    nome: element,
                    products: products
                }
            )
        });
        this.setState({ categoriasList: productsList });
    };
    render() {
        return (
            <div id="body-main">
                <div className="header-main">
                    <h2>Blog Name</h2>
                </div>
                {this.state.categoriasList.map(categoria => (
                    <div key={categoria.nome} className="card-session-main">
                        <h2>{categoria.nome} </h2>
                        <hr />
                        <div className="row-main">
                            {categoria.products.map(product => (
                                <div key={product._id} className="column-main">
                                    <div className="card-product-main">
                                        <Link to={`/product/${product._id}`}>
                                            <div className="product-image-main" style={{ backgroundImage: `url(${product.url})` }} />
                                        </Link>
                                        <h2>{product.title}</h2>
                                        <p className="price-main">R${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };
}