import React from 'react';
import { Link } from 'react-router-dom'

export const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">BIT BLOG</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}
