import './register.css'
import { Link } from 'react-router-dom';

const Register = () => {
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
          <h2>register</h2>
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
                placeholder='Email'
              />
            </div>
            <div className="registerBody_item">
              <h3>Password</h3>
              <input 
                type="password"
                className='register-input' 
                placeholder='Password'
              />
            </div>
            <div className="registerBody_item">
              <h3>Verify password</h3>
              <input 
                type="password"
                className='register-input' 
                placeholder='Verify password'
              />
            </div>
          </div>
          <div className="registerButton">
            <button>REGISTER</button>
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