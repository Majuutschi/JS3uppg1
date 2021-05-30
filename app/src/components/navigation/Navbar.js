import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../cart/ShoppingCart';

const Navbar = () => {

    const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);

    return (
        <div className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink exact to="/" className="nav-logga navbar-brand me-5"><i className="fas fa-splotch"></i> stuff.se</NavLink>

                {/* Toggle */}
                <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarToggle"
                aria-controls="navbarToggle"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarToggle">
                    <ul className="nav-links navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active-link">Startsidan</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/shop" className="nav-link" activeClassName="active-link">Shoppen</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">

                        <li className="nav-item dropdown me-3">
                            <span className="nav-link dropdown" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                { totalCartQuantity } <i className="fas fa-cart-plus"></i>
                            </span>
                        
                            <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
                                <ShoppingCart />
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink exact to="/login" className="nav-link" activeClassName="active-link">Logga in</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}

export default Navbar
