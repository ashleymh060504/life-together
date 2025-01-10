import Welcome from '../components/login-page/Welcome.jsx';

import LoginRegister from '../components/login-page/LoginRegister.jsx';
import ContactUs from '../components/login-page/ContactUs.jsx';

function Login () {

    return (
        <>
            <Welcome/>
            <LoginRegister/>
            <ContactUs/>
        </>
    );
};

export default Login;