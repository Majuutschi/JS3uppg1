import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Footer from './components/navigation/Footer';
import Login from './views/Login';
import Shop from './views/ProductPage';
import Cart from './views/Cart';
import Register from './views/Register';
import ProductDetails from './views/ProductDetails';
import { ProtectedRoute} from './routes/ProtectedRoute'
import Profile from './views/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/shop/:id" component={ProductDetails} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
