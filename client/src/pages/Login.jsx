import Welcome from '../components/login-page/Welcome.jsx';
import UserLogin from '../components/login-page/LoginRegister.jsx';
import ContactUs from '../components/login-page/ContactUs.jsx';
import { Navigate } from 'react-router-dom';

function Login () {

  const isAuthenticated = !!localStorage.getItem('user');
  if(isAuthenticated) {
    return <Navigate to='/user'/>
  }

    return (
      <>
        <div className="container my-4">
          <div className="row">
            {/* Feature A */}
            <div className="col-12 mb-5">
              <Welcome />
            </div>

            {/* Feature B */}
            <div className="col-12 mx-auto">
              <UserLogin />
            </div>
            {/* Feature C */}
            <div className="col-12 mt-5">
              <ContactUs />
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;