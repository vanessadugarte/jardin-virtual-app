import React from 'react';
import "./itemListContainer.css"
import useCount from "../../hooks/useCount.js";
import Item from "../itemList/Item.jsx";
const ItemListContainer = ({greeting}) => {

    return (
        <div className="greeting">
          <h1>{greeting}</h1>
        <Item item={{id: 3,
            name: "Monstera Deliciosa",
            price: 9990,
            image: "https://media.admagazine.com/photos/61f0e1a0089751617cd2fe3e/1:1/w_1919,h_1919,c_limit/bugambilia.jpg",
            description: "También llamada Costilla de Adán, es una planta tropical conocida por sus grandes hojas perforadas y su fácil cuidado. Es una opción popular para decorar interiores gracias a su exuberante follaje",
            stock: 7}}/>
        </div>
    );
};

export default ItemListContainer;