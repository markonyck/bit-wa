import React from 'react';
import { Link } from 'react-router-dom'

export const Header = (props) => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">BIT BLOG</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/about">Home</Link></li>
                    <li><Link to="/about">Authors</Link></li>
                    <li><Link to="/about">About</Link>About</li>
                </ul>
            </div>
        </nav>
    )
}
