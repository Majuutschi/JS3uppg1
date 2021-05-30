import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../store/actions/userPageActions';




const Register = () => {

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = e => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
    
        dispatch(registerUser())
        
    }


    return (
        <div className="register container">
            <h3>Registrera konto</h3>
            
            <form className="reg-form" onSubmit={handleSubmit}>

                <label htmlFor="firstName">Förnamn: </label>
                <input 
                    type="text" 
                    id="firstName" 
                    value={state.firstName}
                    onChange={handleChange} 
                />

                <label htmlFor="lastName">Efternamn: </label>
                <input 
                    type="text" 
                    id="lastName" 
                    value={state.lastName}
                    onChange={handleChange} 
                />

                <label htmlFor="email">E-postadress: </label>
                <input 
                    type="text" 
                    id="email" 
                    value={state.email}
                    onChange={handleChange} 
                />

                <label htmlFor="password">Lösenord: </label>
                <input 
                    type="password" 
                    id="password" 
                    value={state.password}
                    onChange={handleChange} 
                />

                <button className="btn-mag">Skapa konto</button>
            </form>

            <div>Redan medlem? <Link to="/login">Logga in</Link> </div>
        </div>
    )
}


export default Register
