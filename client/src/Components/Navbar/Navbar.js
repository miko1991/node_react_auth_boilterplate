import React, {useContext, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "./Navbar.css";
import AppContext from "../../Contexts/AppContext";
import AccountSubmenu from "./AccountSubmenu/AccountSubmenu";
import Submenu from "./Submenu/Submenu";
import config from "../../config";

const Navbar = ({isAdmin}) => {
    const history = useHistory();
    const {user, logout} = useContext(AppContext);

    return (
        <nav className="navbar">
            <div className="navbar__logo">App</div>
            <ul className="navbar__list">
                <AccountSubmenu/>
            </ul>
        </nav>
    );
};

export default Navbar;
