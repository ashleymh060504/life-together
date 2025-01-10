import "./loginRegister.css";
import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { login } from "../../api/authAPI.jsx";



const userLogin = () => {
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {   
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 g-2">
        <div class="col container ">
          <div class="card w-75 mx-auto mt-3 bg-cards">
            <form class="card-body" onSubmit={handleSubmit}>
              <h5 class="card-title mb-3 text-center">Login</h5>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control "
                  id="floatingInputLogin"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
                <label for="floatingInputLogin">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPasswordLogin"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <label for="floatingPasswordLogin">Password</label>
              </div>
              <button class="card-btn">Login</button>
            </form>
          </div>
        </div>
        <div class="col container">
          <div class="card w-75 mx-auto mt-3 bg-cards">
            <form class="card-body">
              <h5 class="card-title text-center mb-3">Register</h5>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputRegister"
                  placeholder="name@example.com"
                />
                <label for="floatingInputRegister">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPasswordRegister"
                  placeholder="Password"
                />
                <label for="floatingPasswordRegister">Password</label>
              </div>
              <button class="card-btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default userLogin;