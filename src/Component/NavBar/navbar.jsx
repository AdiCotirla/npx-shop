import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavBarItem from '../NavBar-items/navbar';
import "./navbar.css"
import {FaShoppingCart} from 'react-icons/fa'

const NavBar = () => {
    return (
        <div className="menu">
            <ul className="menu-list">
                <div className="navbar-left list">
                    <NavBarItem to="/npx-shop/" title="HOME" />
                    <NavBarItem to="/npx-shop/supreme" title="SUPREME" />
                    <NavBarItem to="/npx-shop/offwhite" title="OFF-WHITE" />
                </div>
                <div className="navbar-center list">
                <li>
                <Link
                    to="/npx-shop">
                    <h1>FIRE-<br/>STOCK</h1>
                </Link>
            </li>
                </div>
                <div className="navbar-right list">
                    <NavBarItem to="/npx-shop/bape" title="BAPE" />
                    <NavBarItem to="/npx-shop/brands" title="BRANDS" />
                    <NavBarItem to="/npx-shop/contact" title="CONTACT US" />
                </div>
                    <Link to="/cart"><FaShoppingCart className="cart"/></Link>
            </ul>
        </div>
    )
}

export default NavBar
