import React, {useEffect, useState} from 'react';
import "./itemListContainer.css"
import {getProducts} from "../../mock/asynMock.js";
import ItemList from "../itemList/ItemList.jsx";
import Item from "../itemList/Item.jsx";
import useProducts from "../../hooks/useProducts.js";

const ItemListContainer = ({greeting}) => {
    const {isLoading, products} = useProducts();

if (isLoading) return <h1>cargando...</h1>

    return (
        <div className="greeting">
          <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;