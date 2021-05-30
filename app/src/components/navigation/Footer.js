import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="foot-link">
                <Link to="login">Logga in</Link>
                <Link to="/register">Registrera dig</Link>
            </div>
            <div className="foot-text">
                © 2021 
                <Link to="/" className="foot-logo"><i className="fas fa-splotch"></i> stuff.se</Link>
            </div>
        </div>
    )
}

export default Footer
