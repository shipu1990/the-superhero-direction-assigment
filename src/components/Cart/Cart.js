import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let name = '';
    for(const artist of cart){
        total = total + artist.honorarium;
        name = name + artist.name + ', ' ;
    }

    return (
        <div className="cart-inner">
           <h2 className="cart-number">Total Artist Number : {props.cart.length}</h2>
           <p className="cart-para">Artist Budget Amount: {total}</p>
           <p className="cart-para">Artist Name: {name}</p> 
        </div>
    );
};

export default Cart;