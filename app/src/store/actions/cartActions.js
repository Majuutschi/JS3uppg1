import actiontypes from '../actiontypes';

export const addToCart = product => {
    return {
        type: actiontypes().cart.add,
        payload: product
    }
}

export const subFromCart = id => {
    return {
        type: actiontypes().cart.sub,
        payload: id
    }
}

export const removeFromCart = id => {
    return {
        type: actiontypes().cart.remove,
        payload: id
    }
} 