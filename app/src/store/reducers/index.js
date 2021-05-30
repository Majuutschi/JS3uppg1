import { combineReducers } from 'redux';

import productPageReducer from './productPageReducer';
import cartReducer from './cartReducer';
import userPageReducer from './userPageReducer';


// rootReducer
export default combineReducers({
    productPage: productPageReducer,
    cartReducer,
    userPage: userPageReducer
})