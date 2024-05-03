import React, {useEffect, useState} from 'react';
import "./itemListContainer.css"
import useCount from "../../hooks/useCount.js";
import Item from "../itemList/Item.jsx";
import {getProducts} from "../../mock/asynMock.js";
const ItemListContainer = ({greeting}) => {

const [product, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="greeting">
          <h1>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;