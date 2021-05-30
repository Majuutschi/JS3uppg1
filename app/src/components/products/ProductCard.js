import React from 'react';
import {Link} from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="col">
            <div className="card container h-100">
                <div className="bg-image ripple mt-4">
                    <img src={product.image} alt="product" className="img-fluid" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.desc.slice(0, 50)}...</p>
                    <p className="mb-3">Pris: {product.price} SEK</p>
                    <Link to={`/shop/${product._id}`}><button className="btn-mag">Läs mer</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
