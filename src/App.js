import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Installations from './pages/installations/Installations';
import Installation from './pages/installation/Installation';
import Recycling from './pages/recycling/Recycling';
import Cart from './pages/cart/Cart';
import Wishlist from './pages/wishlist/Wishlist';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          {/* Routes without Layout */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Routes with Layout */}
          <Route 
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<Product />} />

                  <Route path="/services-and-installations" element={<Installations />} />
                  <Route path="/services-and-installations/:id" element={<Installation />} />

                  <Route path="/recycling" element={<Recycling />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
