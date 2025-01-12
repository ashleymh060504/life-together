import "./loginRegister.css";

function LoginRegister() {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 g-2 test">
        <div class="col container my-auto">
          <div class="card w-75 mx-auto mt-3 bg-cards">
            <div class="card-body">
              <h5 class="card-title mb-3 text-center">Login</h5>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control "
                  id="floatingInputLogin"
                  placeholder="name@example.com"
                />
                <label for="floatingInputLogin">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPasswordLogin"
                  placeholder="Password"
                />
                <label for="floatingPasswordLogin">Password</label>
              </div>
              <button class="card-btn card-btn-bg">Log in</button>
            </div>
          </div>
        </div>
        <div class="col container">
          <div class="card w-75 mx-auto mt-3 bg-cards">
            <div class="card-body">
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
              <button class="card-btn card-btn-bg">Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;