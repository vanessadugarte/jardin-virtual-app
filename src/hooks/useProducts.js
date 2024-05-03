import React, {useState} from 'react';
import {useEffect} from "react";
import {getProducts} from "../mock/asynMock.js";

export const UseProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(false));
    }, []);

    return {products, isLoading};
}


export default UseProducts;