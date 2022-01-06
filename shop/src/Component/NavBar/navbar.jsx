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
                    <NavBarItem to="/" title="HOME" />
                    <NavBarItem to="/supreme" title="SUPREME" />
                    <NavBarItem to="/offwhite" title="OFF-WHITE" />
                </div>
                <div className="navbar-center list">
                <li>
                <Link
                    to="/">
                    <h1>FIRE-<br/>STOCK</h1>
                </Link>
            </li>
                </div>
                <div className="navbar-right list">
                    <NavBarItem to="/bape" title="BAPE" />
                    <NavBarItem to="/brands" title="BRANDS" />
                    <NavBarItem to="/contact" title="CONTACT US" />
                </div>
                    <Link to="/cart"><FaShoppingCart className="cart"/></Link>
            </ul>
        </div>
    )
}

export default NavBar
