import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProducts = () => {
    
    return async dispatch => {
        dispatch(loading(true));

        const res = await axios.get('http://localhost:9999/api/products');

        dispatch(setProducts(res.data));
        dispatch(loading(false))
    }
}

export const loading = payload => {
    return {
        type: actiontypes().productPage.loading,
        payload
    }
}

export const setProducts = products => {
    return {
        type: actiontypes().productPage.setProducts,
        payload: products
    }
}

export const getOneProduct = id => {
    
    return async dispatch => {
        dispatch(loading(true));

        const res = await axios.get(`http://localhost:9999/api/products/${id}`);
        dispatch(setOneProduct(res.data));
        dispatch(loading(false))
    }
}

export const setOneProduct = product => {
    return {
        type: actiontypes().productPage.setOneProduct,
        payload: product
    }
}