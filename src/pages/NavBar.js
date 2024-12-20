// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // You can style the navbar here

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/travel-plan">
                        <button className="navbar-button">Travel Plan</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
