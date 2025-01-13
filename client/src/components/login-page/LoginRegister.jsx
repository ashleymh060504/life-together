import { useState } from 'react';
import "./loginRegister.css";

const UserLogin = () => {

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email: loginEmail, password: loginPassword };
      const response = await fetch('http://localhost:3001/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify({ first_name: data.first_name, email: data.email }));
      window.location = '/user';
    } else {
      alert(`Login failed: ${data.message || 'Unknown error'}`);
    }
      
    } 
    catch (err) {
      console.error('Error, please try again', response.status, await response.text());
    }
  }

  const handleEmailLoginChange = (e) => {
    setLoginEmail(e.target.value);
  };

  const handlePasswordLoginChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
        const body = { first_name, last_name, email, password };
        const response = await fetch('http://localhost:3001/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('user', JSON.stringify({ first_name: data.first_name, email: data.email}))
            window.location = '/user';
        }
        else {
            console.error('Error, please try again', response.status, await response.text());
        }
    } 
    catch (err) {
        console.error(err.message);
    }
}

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
      <div className="row row-cols-1 row-cols-md-2 g-2 test">
        <div className="col container my-auto">
          <div className="card w-75 mx-auto mt-3 bg-cards">

            <form className="card-body" onSubmit={onSubmitLoginForm}>
              <h5 className="card-title mb-3 text-center">Login</h5>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  value={loginEmail}
                  className="form-control "
                  id="floatingInputLogin"
                  onChange={handleEmailLoginChange}
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInputLogin">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  value={loginPassword}
                  className="form-control"
                  id="floatingPasswordLogin"
                  placeholder="Password"
                  onChange={handlePasswordLoginChange}
                  required
                />
                <label htmlFor="floatingPasswordLogin">Password</label>
              </div>
              {/* {loginError && <p className="text-danger">{loginError}</p>} */}
              <button type="submit" className="card-btn">Login</button>
            </form>
          </div>
        </div>

        <div className="col container">
          <div className="card w-75 mx-auto mt-3 bg-cards">
            <form className="card-body" onSubmit={onSubmitForm}>
              <h5 className="card-title text-center mb-3">Create new account</h5>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="firstName"
                  value={first_name}
                  onChange={handleFirstNameChange}
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
                  value={last_name}
                  onChange={handleLastNameChange}
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
                  value={email}
                  onChange={e => handleEmailChange(e)}
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
                  value={password}
                  onChange={e => handlePasswordChange(e)}
                  required
                  className="form-control"
                  id="floatingPasswordRegister"
                  placeholder="Password"
                />
                <label htmlFor="floatingPasswordRegister">Password</label>
              </div>
              {/* {registrationError && <p className="text-danger">{registrationError}</p>} */}
              <button type="submit" className="card-btn">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
  )};

export default UserLogin;