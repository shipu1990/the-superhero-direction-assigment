import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {carts} = props;
    let total = 0;
    for(const artist of carts){
        total = total + artist.honorarium;
    }
    
    return (
        <div className="cart-inner">
           <h2 className="cart-number">Total Artist Number : {props.carts.length}</h2>
           <p className="cart-para">Artist Budget Amount: {total}</p>
           <p  className="cart-para no-mb">Artist Name: </p>
           <ul className="artist-list">
             {
                 carts.map(cart => <li key={cart.id}>{cart.name}</li>)
             }
           </ul>
             
        </div>
    );
};

export default Cart;