import React from 'react';
import "./item.css"

const ItemList = ({products}) => {
    return (
        <div className="itemListContainer">
            {products.map((product) =>(
                <Item key={product.id} item={product}/>
            ))}
        </div>
    );
};

export default ItemList;