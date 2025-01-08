import Welcome from '../components/login-page/Welcome.jsx';
// import LoginRegister from '../components/login-page/loginRegister.jsx';
import ContactUs from '../components/login-page/ContactUs.jsx';

function Login () {

    return (
        <>
            <Welcome/>
            {/* <LoginRegister/> */}
            <ContactUs/>
            {/* <div>
                <h1>Login</h1>
                <form>
                    <label>
                    Username
                        <input type='text' />
                    </label>
                    <label>
                        Password
                        <input type='password' />
                    </label>
                    <button type='submit'>Login</button>
                </form>
            </div> */}
            
        </>
    );
};

export default Login;