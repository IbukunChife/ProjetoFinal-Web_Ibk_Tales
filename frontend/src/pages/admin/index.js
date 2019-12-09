import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api';
import Main from '../main';

export default class Admin extends Component {
    state = {
        user: {},
        title: '',
        price: '',
        categoria: '',
        description: '',
        images: '',
        genero: '',
        preview: Object
    }

    async componentDidMount() {
        const id = localStorage.getItem('user');
        const responseUser = await api.get(`/user/${id}`);
        this.setState({user:responseUser.data});
    };

    handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        data.append('images', this.state.images);
        data.append('title', this.state.title);
        data.append('price', this.state.price);
        data.append('categoria', this.state.categoria);
        data.append('description', this.state.description);
        data.append('genero', this.state.genero);

        await api.post('/product', data);
        window.location.reload();
    };

    setTitle = e => {
        this.setState({
            title: e.target.value
        });
    };
    setPrice = e => {
        this.setState({
            price: e.target.value
        });
    };
    setCategoria = e => {
        this.setState({
            categoria: e.target.value
        });
    }
    setImage = e => {
        this.setState({
            images: e.target.files[0],
            preview: URL.createObjectURL(e.target.files[0])
        });
    }
    setDescription = e => {
        this.setState({
            description: e.target.value
        })
    }
    setGenero = e => {
        this.setState({
            genero: e.target.value
        })
    }

    render() {
        const { user } = this.state;
        if (!user.isAdmin) {
            return(
                <Main />
            )
        } else {
            return (
                <div id="body-admin">
                    <div className="container-admin">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row-admin">
                                <h2>Add Product</h2>
                                <div className="col-admin">
                                    <div className="upload-admin" >
                                        <label for="image">
                                            Image
                                    </label>
                                        <input type="file" id="image" accept=".png, .jpg" value={this.state.image} onChange={this.setImage} style={{ backgroundImage: `url(${this.state.preview})` }} required />
                                    </div>
                                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.setTitle} required />
                                    <input type="number" name="price" placeholder="Price" value={this.state.price} onChange={this.setPrice} required />
                                    <input type="text" name="categoria" placeholder="Category" value={this.state.categoria} onChange={this.setCategoria} required />
                                    <div className="genero-admin" >
                                        <label>
                                            Gênero
                                    </label>
                                        <select name="genero" value={this.state.genero} onChange={this.setGenero} required>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                        </select>
                                    </div>
                                    <textarea name="description" placeholder="Description" value={this.state.description} onChange={this.setDescription} required />
                                    <input type="submit" value="Add" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
}
