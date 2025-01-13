// import auth from '../../utils/auth.js';
import { useState, useEffect } from "react";

function Welcome() {

    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.first_name) {
            setFirstName(user.first_name);
        }
    }, []);

    return(
        <>
            <div className="titles pt-4">
                <h1 className="landingpage-title">{firstName ? `${firstName}` : 'Welcome'}</h1>
                <h2 className="landingpage-subtitle">Get it done.</h2>
            </div>
        </>
    );
};

export default Welcome;