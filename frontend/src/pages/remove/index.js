import React, { Component } from 'react';
import api from '../../services/api';

export default class Remove extends Component {

    async componentDidMount() {
        const  product_id = this.props.match.params;
        const user_id = localStorage.getItem('user');
        console.log(product_id);
        await api.post(`/product/${product_id}`);
        this.props.history.push(`/user/${user_id}`);
    };

    render(){
        return(
            <div>

            </div>
        )
    }
}