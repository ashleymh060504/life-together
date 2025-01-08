import './loginRegister.css';

function LoginRegister() {

    return(
        <>
            <div class="row row-cols-1 row-cols-md-2 g-2 mt-5">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Login</h5>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <p>Forgot password?</p>
                            <button>Log in!</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Register</h5>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
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