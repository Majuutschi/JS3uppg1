import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartProduct from './ShoppingCartProduct'

const ShoppingCart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
    const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);

    const empty = (
        <div>
            <div className="p-2 d-flex justify-content-between align-items-center">
                Här var det tomt
            </div>
            <div className="dropdown-divider"></div>
        </div>
    )

    
    return (
        <div className="container my-1">
            {
                shoppingCart && shoppingCart.map(product => (
                    <ShoppingCartProduct key={product._id} product={product} />
                ))
            }
            {
                shoppingCart.length < 1 && empty
            }
            
                <div className="p-2 d-flex justify-content-between align-items-center">
                    <div>
                        <div className="total-price">
                            Att betala: <span className="text-secondary">{ totalCartAmount } SEK</span>
                        </div>
                    </div>
                    <button className="btn btn-success">Checkout</button>
                </div>
        </div>
    )
}

export default ShoppingCart
