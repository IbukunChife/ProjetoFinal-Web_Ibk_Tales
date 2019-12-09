import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import User from './pages/user';
import Category from './pages/category';
import Product from './pages/product';
import Cart from './pages/cart';
import Admin from './pages/admin';
import Remove from './pages/remove';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component = {Main} />
            <Route path="/product/:id" component = {Product} />
            <Route path="/user/:id" component = {User} />
            <Route path="/signup" component = {SignUp} />
            <Route path="/signin" component = {SignIn} />
            <Route path="/admin" component = {Admin} />
            <Route path="/remove/:id" component = {Remove} />
            <Route path="/:genero/:categoria" component = {Category} />
        </Switch>
        <Footer />
    </BrowserRouter>

);

export default Routes;