import React from 'react';
import CategoryList from "../CategoryList.jsx";
import CartWidget from "../CartWidget.jsx";
import "./navbar.css"

const NavBar = () => {
    return (
        <div className="navbar__wrapper">
            <CategoryList/>
            <CartWidget/>
        </div>
    );
};

export default NavBar;