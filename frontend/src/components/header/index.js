import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Admin extends Component {
    state = {
        id: ''
    }

    async componentDidMount() {
        const id = localStorage.getItem('user');
        this.setState({ id: id });
    };

    render() {
        const { id } = this.state;
        return (
            <header id="header-main">
                <div className="header-text">
                    <h1>Netclothes</h1>
                </div>
                <div className="topnav" id="myTopnav">
                    <Link to="/"><div className="active">Home</div></Link>
                    <div className="dropdown">
                        <button className="dropbtn">Masculino</button>
                        <div className="dropdown-content">
                            <Link to="/masculino/camisa" style={{ textDecoration: "none" }}><div className="link" >Camisa</div></Link>
                            <Link to="/masculino/calca" style={{ textDecoration: "none" }}><div className="link" >Calça</div></Link>
                            <Link to="/masculino/tenis" style={{ textDecoration: "none" }}><div className="link" >Tênis</div></Link>
                            <Link to="/masculino/acessorios" style={{ textDecoration: "none" }}><div className="link" >Acessórios</div></Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Feminino</button>
                        <div className="dropdown-content">
                            <Link to="/feminino/blusa" style={{ textDecoration: "none" }}><div className="link" >Blusa</div></Link>
                            <Link to="/feminino/calca" style={{ textDecoration: "none" }}><div className="link" >Calça</div></Link>
                            <Link to="/feminino/tenis" style={{ textDecoration: "none" }}><div className="link" >Tênis</div></Link>
                            <Link to="/feminino/acessorios" style={{ textDecoration: "none" }}><div className="link" >Acessórios</div></Link>
                        </div>
                    </div>
                    <div className="right">
                        <Link to="/signup"><div className="link" >Login</div></Link>
                        <Link to={`/user/${id}`}><div className="link" >User</div></Link>
                        <div className="link" >Cart</div>
                    </div>
                </div>
            </header>
        )
    }
}