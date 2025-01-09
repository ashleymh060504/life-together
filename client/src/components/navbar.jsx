
// Added modal for looks
function Navbar(props) {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <button type="button" className="btn btn-primary">
                    <a className="nav-link" href="/">
                      <span className="navbar-text">{props.one}</span>
                    </a>
                  </button>
                </li>
                <li className="nav-item">
                    <span className="navbar-text">{props.two}</span>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-primary">
                      <span className="navbar-text">{props.three}</span>
                  </button>
                </li>
              </ul>
                <button type="button" className="btn btn-primary">
                  <a className="nav-link" href="/">
                    <span className="navbar-text">{props.btn}</span>
                  </a>
                </button>
            </div>
          </div>
        </nav>
      </>
    )
  };
  
  export default Navbar;