import React from 'react';

export const Footer = (props) => {
    return (
        <footer className="page-footer #ffffff white">

            <div className="footer-copyright">
                <div className="container center-align black-text">
                  Copyright © Marko &amp; Emil {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
}