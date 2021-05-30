import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home container">
            <div>
            <img src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt="" />
            </div>
            <div className="home-text">
                <h3>Välkommen till stuff.se</h3>
                <p>Här finns allt du inte visste att du behövde som t.ex. en liten söt bil.</p>
                <p>Hoppa in i butiken och se vad du villhöver idag!</p>
                <Link to="/shop">Butiken hittar du här</Link>
            </div>
        </div>
    )
}

export default Home
