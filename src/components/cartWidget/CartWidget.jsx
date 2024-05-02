import React, {useState} from 'react';
import CartIcon from "../CartIcon.jsx";
import "./cartWidget.css"

const CartWidget = () => {
    const [cartItems, setCartItems] = useState(4);
    return (
        <div className="cartContainer">
           <CartIcon ancho={40} alto={40}/>
            <span>{cartItems}</span>
        </div>
    );
};

export default CartWidget;