import "./welcome.css";

function Welcome() {
  return (
    <div>
      {/* Header */}
      <div className="header container mt-3">
        <div className="titles pt-4">
          <h1 className="landingpage-title">LIFE TOGETHER</h1>
          <h2 className="landingpage-subtitle">Share The Load. Simplify Life.</h2>
        </div>
        <nav className="navbar d-flex justify-content-center">
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
                  LIFE TOGETHER is a platform created to help groups of people
                  sharing a living space with upkeep and maintenance of their
                  homes.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="collapse multi-collapse pb-3" id="multiCollapseExample2">
                <div className="card card-body how-to">
                  Simply register or log in below to access your profile. From
                  there, you can create a new group and invite groupmates to get
                  started. With LIFE TOGETHER, you can select and assign tasks
                  to groupmates, create new tasks, delete tasks, change task
                  deadlines as well as monitor and update the progress status of
                  a task.
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
