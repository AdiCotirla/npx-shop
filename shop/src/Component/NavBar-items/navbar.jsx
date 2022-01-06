import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavBarItem = (to) => {
    return (
            <li>
                <Link
                    to={to.to}>
                    {to.title}
                </Link>
            </li>

    );
}

export default NavBarItem
