import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, subFromCart } from '../../store/actions/cartActions';


const ShoppingCartProduct = ({product}) => {
    const dispatch = useDispatch();

    const add = e => {
        e.stopPropagation();
        dispatch(addToCart(product))
    }

    const sub = e => {
        e.stopPropagation();
        dispatch(subFromCart(product._id))
    }
    const del = e => {
        e.stopPropagation();
        dispatch(removeFromCart(product._id))
    }

    return (
        <div className="cart-item">
            <div className="p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={product.image} alt="" className="img-fluid image-width" />
                    <div className="ms-2">
                        <div><strong>{ product.name }</strong></div>
                        <div><small> { product.quantity } st x  { product.price } SEK</small></div>
                    </div>
                </div>
                <div>
                    <div className="btn-group btn-group-sm me-2" role="group" area-label="quantity">
                        <button className="btn btn-success" id="minus" onClick={sub} >-</button>
                        <div className="py-1 px-2 bg-success text-white">{ product.quantity }</div>
                        <button className="btn btn-success" onClick={add} >+</button>
                    </div>

                    <button className="btn btn-outline-danger btn-sm" onClick={del} >X</button>
                </div>
            </div>
            <div className="dropdown-divider"></div>
        </div>
    )
}

export default ShoppingCartProduct
