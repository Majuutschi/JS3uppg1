import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, setOneProduct } from '../store/actions/productPageActions';
import { addToCart } from '../store/actions/cartActions';

const ProductDetails = () => {

    const id = useParams().id;
    const dispatch = useDispatch();

    // Lägg till i varukorgen
    const handleClick = () => {
        dispatch(addToCart(product))
    }

    // Hämta en produkt
    useEffect(() => {
        dispatch(getOneProduct(id))

        return () => {
            dispatch(setOneProduct(null))
        }
        
    }, [dispatch, id])

    const product = useSelector(state => state.productPage.product);
    const loading = useSelector(state => state.productPage.loading);

    const _product = ( product && 
        
            <div className="d-flex">
                <div className="bg-image mt-3">
                        <img src={product.image} alt="product" className="img-fluid"/>
                </div>

                <div className="card-body p-5">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="card-text">{ product.desc }</p>
                    <h6>Pris: { product.price } SEK</h6>
                    <button className="btn btn-success mt-3" onClick={handleClick} >LÄGG I KUNDVAGNEN</button>
                </div>
            </div> )

    return (
        <div className="container mt-5 height mb-5">
            
            { loading && !product && 
                <div className="text-center">
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            
            { _product }
            
        </div>
    )
}

export default ProductDetails
