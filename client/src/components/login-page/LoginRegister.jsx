import "./loginRegister.css";
import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { login } from "../../api/authAPI.jsx";

  
function LoginRegister() {
  const [loginData, setLoginData] = useState({ email: '', password: ''});
  const [registrationData, setRegistrationData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: ''
  });
  const [loginError, setLoginError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  
  const handleLoginChange = (e) => {   
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      setLoginError('Login failed. Please check your credentials and try again.');
      console.error('Failed to login', err);
    }
  };
  
  const handleSubmitReg = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      alert('Account created successfully!');
    } else {
      setRegistrationError('An unexpected error occurred. Please try again.');
      console.error('Error during account creation:', error);
    }
  } catch (error) {
    setRegistrationError('An unexpected error occurred.');
    console.error('Error during account creation:', error);
  }
};

  return (
      <div className="row row-cols-1 row-cols-md-2 g-2 test">
        <div className="col container my-auto">
          <div className="card w-75 mx-auto mt-3 bg-cards">
            <form className="card-body" onSubmit={handleSubmit}>
              <h5 className="card-title mb-3 text-center">Login</h5>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  className="form-control "
                  id="floatingInputLogin"
                  placeholder="name@example.com"
                  onChange={handleLoginChange}
                />
                <label htmlFor="floatingInputLogin">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  className="form-control"
                  id="floatingPasswordLogin"
                  placeholder="Password"
                  onChange={handleLoginChange}
                />
                <label htmlFor="floatingPasswordLogin">Password</label>
              </div>
              {loginError && <p className="text-danger">{loginError}</p>}
              <button type="submit" className="card-btn">Login</button>
            </form>
          </div>
        </div>
        <div className="col container">
          <div className="card w-75 mx-auto mt-3 bg-cards">
            <form onSubmit={handleSubmitReg} className="card-body">
              <h5 className="card-title text-center mb-3">Create new account</h5>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="firstName"
                  value={registrationData.firstName}
                  onChange={handleRegistrationChange}
                  required
                  className="form-control"
                  id="floatingInputRegister"
                  placeholder="First Name"
                />
                <label htmlFor="floatingInputRegister">First name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="lastName"
                  value={registrationData.lastName}
                  onChange={handleRegistrationChange}
                  required
                  className="form-control"
                  id="floatingInputRegister"
                  placeholder="Last name"
                />
                <label htmlFor="floatingInputRegister">Last name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  value={registrationData.email}
                  onChange={handleRegistrationChange}
                  required
                  className="form-control"
                  id="floatingInputRegister"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputRegister">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  value={registrationData.password}
                  onChange={handleRegistrationChange}
                  required
                  className="form-control"
                  id="floatingPasswordRegister"
                  placeholder="Password"
                />
                <label htmlFor="floatingPasswordRegister">Password</label>
              </div>
              {registrationError && <p className="text-danger">{registrationError}</p>}
              <button type="submit" className="card-btn card-btn-bg">Sign up</button>
            </form>
          </div>
        </div>
      </div>
  )};

export default LoginRegister;