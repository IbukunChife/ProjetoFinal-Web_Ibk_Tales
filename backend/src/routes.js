const express = require('express');
const routes = express.Router();
const multer = require('multer')
const uploadConfig = require('./config/imageUploads')
const upload = multer(uploadConfig)

const UserController = require('./controllers/UserController');
routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.post('/user/:id', UserController.destroy);

routes.post('/user_cart/:id/add_cart/:product', UserController.addCart);
routes.post('/user_cart/:id/rem_cart/:product', UserController.remCart);
routes.post('/finalizar_compra/:id', UserController.finalizarCompra);

const ProductController = require('./controllers/ProductController');
routes.get('/product', ProductController.index);
routes.get('/product/:id', ProductController.show);
// routes.post('/product/:id/images',upload.single('images'),ProductController.store);
routes.post('/product',upload.single('images'),ProductController.store);
routes.post('/product_atualizar/:id', ProductController.update);
routes.post('/product/:id', ProductController.destroy);

routes.get('/', (req,res)=>{
    return res.send("Bem-vindo no projeto NetClothes");
})

module.exports = routes;