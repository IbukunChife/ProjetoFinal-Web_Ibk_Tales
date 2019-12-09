import React from 'react';
import './styles.css';

const Cart = () => (
    <div id="body-cart">
        <div className="card-cart">
            <h2>Cart</h2>
            <hr />
            <div className="row-cart">
                <div className="column-cart">
                    <div className="card-img-cart">
                        <img src="jeans3.jpg" />
                    </div>
                    <div className="card-desc-cart">
                        <h2>Tailored Jeans</h2>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div className="card-price-cart">
                        <p className="price-cart">$19.99</p>
                        <p><button className="removebtn-cart">Remove</button></p>
                    </div>
                </div>
                <hr />
            </div>           

            <div className="row-pay-cart">
            <hr />
                <div className="column-pay-cart">
                    <div className="card-pay-cart">
                        <h2>Total</h2>
                        <p className="price-pay-cart">$19.99</p>
                        <p><button className="paybtn-cart">Pay</button></p>
                    </div>
                </div>
            </div>            
        </div>
    </div>
);

export default Cart;