import React, {useEffect, useState} from 'react';
import "./itemListContainer.css"
import {getProducts} from "../../mock/asynMock.js";
import ItemList from "../itemList/ItemList.jsx";
import Item from "../itemList/Item.jsx";
import useProducts from "../../hooks/useProducts.js";

const ItemListContainer = ({greeting}) => {
    const {isLoading: productsLoading, products} = useProducts();
    const {product, isLoading: product4Loading} = useProducts(4);
if (productsLoading) return <h1>cargando...</h1>

    console.log({product4Loading, product})
    return (
        <div className="greetingFather">
        <div className="greeting">
          <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
            </div>
    );
};

export default ItemListContainer;