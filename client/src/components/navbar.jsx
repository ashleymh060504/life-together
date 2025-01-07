import ModalTest from "./Modal-test.jsx";

// Added modal for looks
function Navbar() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Logout</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/together">Together</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/user">User</a>
                </li>
              </ul>
              <span class="navbar-text">
                <ModalTest/>
              </span>
            </div>
          </div>
        </nav>
      </>
    )
  };
  
  export default Navbar;