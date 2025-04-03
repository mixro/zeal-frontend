import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Recycling from './pages/recycling/Recycling';
import Cart from './pages/cart/Cart';
import Wishlist from './pages/wishlist/Wishlist';
import Success from './pages/success/Success';
import Orders from './pages/orders/Orders';
import Services from './pages/services/Services';
import Service from './pages/service/Service';
import About from './pages/about/About';

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
                  <Route path="/success" element={<Success />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/about-us" element={<About />} />
                  
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<Product />} />

                  <Route path="/services-and-installations" element={<Services />} />
                  <Route path="/services-and-installations/:id" element={<Service />} />

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
