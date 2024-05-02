import React from 'react';
import "./categoryList.css"
const CategoryList = () => {
    return (
        <nav>
            <ul className="categories">
                <li>
                    <a href="#">Plantas</a>
                </li>
                <li>
                    <a href="#">Maceteros</a>
                </li>
                <li>
                    <a href="#">Accesorios</a>
                </li>
            </ul>
        </nav>
    );
};

export default CategoryList;