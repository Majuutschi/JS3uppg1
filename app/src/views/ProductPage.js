import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import { getProducts } from '../store/actions/productPageActions';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    const products = useSelector(state => state.productPage.products);
    const loading = useSelector(state => state.productPage.loading);


    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-lg-3 g-4">
                { loading && !products && 
                <div className="text-center">
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                }
                
                {
                    products && products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Shop
