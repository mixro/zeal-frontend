import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

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
