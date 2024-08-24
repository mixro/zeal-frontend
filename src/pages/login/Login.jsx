import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className="registerContainer">
      <div className="registerTop">
        <div className="registerTop-image">
          <Link to='/' className='link-main'>
            <img src="/assets/zeal-logo.png" alt="LOGO" />
          </Link>
        </div>
      </div>

      <div className="registerBody">
        <div className="registerBody-container">
          <h2>Login</h2>
          <div className="registerItems">
            <div className="registerBody_item">
              <h3>Email</h3>
              <input 
                type="text"
                className='register-input' 
                placeholder='eg; johndoe@gmail.com'
              />
            </div>
            <div className="registerBody_item">
              <h3>Password</h3>
              <input 
                type="password"
                className='register-input' 
                placeholder='Enter password'
              />
            </div>
          </div>
          <div className="registerButton loginButton">
            <button>LOGIN</button>
          </div>

          <div className="registerNow">
            <p>Don't have an account?</p>
            <Link to="/register" className='link-main'>
              <button>Register Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login