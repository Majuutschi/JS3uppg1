const actiontypes = () => {
    return {
        productPage: {
            loading: 'LOADING',
            getProducts: 'GET_PRODUCTS',
            setProducts: 'SET_PRODUCTS',
            setOneProduct: 'SET_ONE_PRODUCT'
        },
        cart: {
            add: 'ADD_TO_CART',
            sub: 'SUB_IN_CART',
            remove: 'REMOVE_FROM_CART',
            total: 'TOTAL',
            quantity: 'QUANTITY'
        },
        userPage: {
            setOneUser: 'SET_ONE_USER',
            loading: 'LOADING',
            register: 'REGISTER_USER',
            login: 'LOGIN_USER',
            updateUser: 'UPDATE_USER'
        }
    }
}

export default actiontypes;