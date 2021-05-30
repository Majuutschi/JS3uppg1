import actiontypes from '../actiontypes';

let initState = {
    products: null,
    product: null,
    loading: true
};

const productPageReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().productPage.setProducts:
            return {
                ...state,
                products: action.payload
            }

        case actiontypes().productPage.setOneProduct:
            return {
                ...state,
                product: action.payload
            }

        case actiontypes().productPage.loading:
            return {
                ...state,
                loading: action.payload
            }



        default:
            return state
    }
}

export default productPageReducer;