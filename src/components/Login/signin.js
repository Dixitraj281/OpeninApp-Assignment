import React, {useState} from 'react';
import './LogIn.css';
import Media from './media';
import { useAuth0 } from '@auth0/auth0-react';


const Signin = ({ onLogin }) => {
  const { loginWithRedirect } = useAuth0();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's consider a basic check for a hardcoded username and password
    if (username === 'username' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid credentials. Hint: username = username && password = password');
    }
  };


  return (
    <div className='signin__page__container'>
            <a href="index.html" className='logo'>LOGO</a>

            <div className="form__container">
                <h1 className='board__logo'>Base</h1>

                <div className="formgroup__container">
      <h1 className=''>Sign In</h1>
      <p className="sign_to_ur_acc">
        <strong>Sign in to your account</strong>
      </p>

      <div className="signin__with__buttons">
        <button
          className="siginin__google btn__primary w-full"
          onClick={loginWithRedirect}
        >
          Sign in with Google
        </button>
        <button className="siginin__apple btn__primary w-full">
          Sign in with Apple
        </button>
      </div>

      <div className="form__wrapper">
        <form action="#">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-gray-300 px-3 py-2 rounded-md mb-3"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 px-3 py-2 rounded-md mb-3"
          />

          <a
            href="http://"
            target="_blank"
            className="forgot__pass"
            rel="noopener noreferrer"
          >
            Forgot password?
          </a>

          <button
            onClick={handleLogin}
            className="bg-[#605BFF] text-white py-2 px-4 rounded-md cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>

      <p className="form__footer">
        Don't have an account?{" "}
          Register here
      </p>
    </div>
            </div>

            <Media />
    </div>
  )
}

export default Signin;