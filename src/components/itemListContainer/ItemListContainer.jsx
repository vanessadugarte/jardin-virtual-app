import React from 'react';
import "./itemListContainer.css"
import ItemCount from "../itemCount/itemCount.jsx";
import useCount from "../../hooks/useCount.js";
const ItemListContainer = ({greeting}) => {
    const {count, increment, decrement} = useCount(0);
    return (
        <div className="greeting">
          <h1>{greeting}</h1>
            <ItemCount count={count} decrement={decrement} increment={increment} stock={5}/>
        </div>
    );
};

export default ItemListContainer;