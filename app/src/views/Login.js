import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { login } from '../store/actions/userPageActions';

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        dispatch(login())

        try { history.push(history.location.state.from.pathname) }
        catch { history.push('/') }
    }


    return (
        <div className="login container">
            <h3>Logga in</h3>
            <form  onSubmit={handleSubmit} className="login-form">
                <label htmlFor="email">E-postadress: </label>
                <input type="text" id="email"  />
                <label htmlFor="password">Lösenord: </label>
                <input type="password" id="password"  />
                <button className="btn-mag">Logga in</button>
            </form>

            <div>Inte medlem? <Link to="/register">Skapa konto</Link> </div>
        </div>
    )
}

export default Login
