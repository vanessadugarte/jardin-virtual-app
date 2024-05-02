import React from 'react';
import Brand from "../brand/Brand.jsx";
import navBar from "../navbar/NavBar.jsx";
import "./layout.css"
import NavBar from "../navbar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
export const Layout = ({children}) => {
    return (
        <div className="layoutContainer">
           <div className="header_wrapper">
               <Brand/>
               <NavBar/>
           </div>
            <main className="mainContainer">{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;