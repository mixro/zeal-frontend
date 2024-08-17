import './register.css'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="registerTop">
        <div className="registerTop-image">
          <img src="/assets/zeal-logo-2.png" alt="LOGO" />
          <p>ZEAL ENERGY</p>
        </div>
      </div>

      <div className="registerBody">
        <div className="registerBody-container">
          <h2>REGISTER</h2>
          <div className="registerItems">
            <div className="registerBody_item">
              <h3>Username</h3>
              <input 
                type="text"
                className='register-input' 
                placeholder='Username'
              />
            </div>
            <div className="registerBody_item">
              <h3>Email</h3>
              <input 
                type="text"
                className='register-input' 
                placeholder='eg; johndoe2gmail.com'
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
            <div className="registerBody_item">
              <h3>Verify password</h3>
              <input 
                type="password"
                className='register-input' 
                placeholder='verify password'
              />
            </div>
          </div>
          <div className="registerText">
            <p>Already a member?
                <Link to="/login" className='link-main'>
                  <span> Login</span>
                </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register