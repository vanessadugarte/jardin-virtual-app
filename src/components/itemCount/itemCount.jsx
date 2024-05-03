import "./itemCount.css"
import React from 'react';

export const ItemCount = ({stock, count, increment, decrement}) => {
    return (
        <div className="itemCountContainer">
            <div className="itemCountCounterContainer">
                <button className="itemCountButton" onClick={decrement} disabled={count <= 0}>
                    -
                </button>
                <span className="itemCountButton">{count}</span>
                <button className="itemCountButton" onClick={increment} disabled={count >= stock}>
                    +
                </button>
            </div>
        </div>
    );
};

export default ItemCount;