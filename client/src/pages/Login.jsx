import Welcome from '../components/login-page/Welcome.jsx';

// Render issue
import LoginRegister from './components/login-page/loginRegister.jsx';
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