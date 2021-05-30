import actiontypes from '../actiontypes';

let initState = {
    // users: null,
    userToken: null,
    loggedIn: false,
    user: null,
    loading: true
};

const userPageReducer = (state = initState, action) => {
    switch(action.type) {
        // case actiontypes().productPage.setProducts:
        //     return {
        //         ...state,
        //         products: action.payload
        //     }

        case actiontypes().userPage.register: 
            return {
                ...state,
                user: action.payload
            }

        case actiontypes().userPage.setOneUser:
            return {
                ...state,
                product: action.payload
            }

        case actiontypes().userPage.loading:
            return {
                ...state,
                loading: action.payload
            }



        default:
            return state
    }
}

export default userPageReducer;