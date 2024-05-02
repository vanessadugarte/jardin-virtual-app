import React from 'react';
import CartIcon from "../CartIcon.jsx";
import "./cartWidget.css"

const CartWidget = () => {
    return (
        <div className="cartContainer">
           <CartIcon ancho={40} alto={40}/>
            <span>3</span>
        </div>
    );
};

export default CartWidget;