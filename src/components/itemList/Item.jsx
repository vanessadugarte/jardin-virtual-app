import useCount from "../../hooks/useCount.js";
import itemCount, {ItemCount} from "../itemCount/itemCount.jsx";
import "./item.css"
import React from 'react';

export const Item = ({item}) => {
    const {count, increment, decrement} = useCount(0);

    const onAdd = (nombreDeItem, cantidadaLlevar) => {
        console.log("nombreDeItem:", nombreDeItem)
        console.log("cantidadaLllevar:", cantidadaLlevar);
    };

    console.log({count, item});
    return (
        <div className="itemContainer">
            <div className="itemImageContainer">
                <img className="itemImg" src={item.image} alt={item.title}/>
            </div>
            <h2 className="itemTitle">{item.title}</h2>
            <p className="itemDescription">{item.description}</p>
            <p className="itemPrice">{item.price}</p>
            <div className="itemCounterContainer">
                <ItemCount
                    stock={item.stock}
                    count={count}
                    increment={increment}
                    decrement={decrement}
                />
            </div>
            <div className="itemCartContainer">
                <button className="itemCartButton" onClick={() => onAdd(item, count)}>
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};

export default Item;