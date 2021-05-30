import axios from 'axios';
import actiontypes from '../actiontypes';

export const getOneUser = id => {
    
    return async dispatch => {
        dispatch(loading(true));

        const res = await axios.get(`http://localhost:9999/api/users/${id}`);
        dispatch(setOneUser(res.data));
        dispatch(loading(false))
    }
}

export const loading = payload => {
    return {
        type: actiontypes().userPage.loading,
        payload
    }
}

export const setOneUser = user => {
    return {
        type: actiontypes().userPage.getOneUser,
        payload: user
    }
}

export const registerUser = ({ firstName, lastName, email, password}, dispatch) => {
    
    const user = JSON.stringify({ firstName, lastName, email, password });

    axios.post('http://localhost:9999/api/users/register', user)
        .then((res) => {
            console.log('success')
            dispatch({ type: actiontypes().userPage.loading })
        })
        .catch((err) => {
            console.log('failed')
        })
            
        dispatch('login', {user})
}


export const login = () => {
    return (dispatch, payload) => {
        axios.post('http://localhost:9999/api/users/login', payload.user)
            .then(res => {

            })
    }
}