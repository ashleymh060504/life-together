import "./welcome.css";

function Welcome() {
  return (
    <div>
      {/* Header */}
      <div className="header container my-3">
        <div className="titles pt-4">
          <h1 className="landingpage-title">LIFE TOGETHER</h1>
          <h2 className="landingpage-subtitle">Get it done</h2>
        </div>
        <nav className="navbar pt-3 d-flex justify-content-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <button
                className="btn btn-color"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                What is LIFE TOGETHER?
              </button>
            </li>
            <li className="list-inline-item">
              <button
                className="btn btn-color"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                How to Get Started
              </button>
            </li>
          </ul>
          <div className="row">
            <div className="col">
              <div className="collapse multi-collapse pb-3" id="multiCollapseExample1">
                <div className="card card-body what-is">
                  LIFE TOGETHER is a platform created to help people
                  keep track of their tasks and chores.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="collapse multi-collapse pb-3" id="multiCollapseExample2">
                <div className="card card-body how-to">
                  Simply Sign up or Log in below to access your tasks and chores!
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Welcome;
