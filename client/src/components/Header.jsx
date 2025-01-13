function Header(props) {

  const logout = () => {
    localStorage.removeItem('user');
    window.location = '/';
  }

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <button type="button" className="btn btn-primary">
                      <span className="navbar-text">{props.darkMode}</span>
                  </button>
                </li>
              </ul>
                <button type="button" className="btn btn-primary" onClick={logout}>
                  {/* <a className="nav-link" href='/'>  */}
                    <span className="navbar-text">{props.logOut}</span>
                  {/* </a> */}
                </button>
            </div>
          </div>
        </nav>
        </>
    );
};

export default Header;