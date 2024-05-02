import React from 'react';
import CartIcon from "./CartIcon.jsx";

const CartWidget = () => {
    return (
        <div>
           <CartIcon ancho={40} alto={40}/>
            <span>3</span>
        </div>
    );
};

export default CartWidget;