
// Added modal for looks
function Navbar(props) {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                  <button type="button" class="btn btn-primary">
                    <a class="nav-link" href="/">
                      <span class="navbar-text">{props.one}</span>
                    </a>
                  </button>
                </li>
                <li class="nav-item">
                    <span class="navbar-text">{props.two}</span>
                </li>
                <li class="nav-item">
                  <button type="button" class="btn btn-primary">
                      <span class="navbar-text">{props.three}</span>
                  </button>
                </li>
              </ul>
                <button type="button" class="btn btn-primary">
                  <a class="nav-link" href="/">
                    <span class="navbar-text">{props.btn}</span>
                  </a>
                </button>
            </div>
          </div>
        </nav>
      </>
    )
  };
  
  export default Navbar;