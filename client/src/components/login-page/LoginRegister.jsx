import "./loginRegister.css";

function LoginRegister() {

    return(
        <>
            <div className="row row-cols-1 row-cols-md-2 g-2 mt-5">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Login</h5>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInputLogin" placeholder="name@example.com"/>
                                <label for="floatingInputLogin">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPasswordLogin" placeholder="Password"/>
                                <label for="floatingPasswordLogin">Password</label>
                            </div>
                            <p>Forgot password?</p>
                            <button>Log in!</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Register</h5>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInputRegister" placeholder="name@example.com"/>
                                <label for="floatingInputRegister">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPasswordRegister" placeholder="Password"/>
                                <label for="floatingPasswordRegister">Password</label>
                            </div>
                            <p>Ready to join us?</p>
                            <button>Register!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginRegister;
