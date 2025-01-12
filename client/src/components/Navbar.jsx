function Navbar(props) {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between">
              {/* Left side buttons */}
              <div className="d-flex align-items-center">
                  <button type="button" className="btn btn-primary me-2">
                      <a className="nav-link" href="/">
                          {props.one}
                      </a>
                  </button>
                  
                  <span className="navbar-text mx-3">
                      {props.two}
                  </span>
                  
                  <button type="button" className="btn btn-primary">
                      <span className="navbar-text">
                          {props.three}
                      </span>
                  </button>
              </div>

              {/* My profile button */}
              <button type="button" className="btn btn-primary">
                  <a className="nav-link" href="/User">
                      {props.btn}
                  </a>
              </button>
              </div>
          </div>
      </nav>
      </>
  );
}

export default Navbar;