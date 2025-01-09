import "./welcome.css";

function Welcome() {
  return (
    <div>
      {/* Header */}
      <div class="header container mt-3">
        <div class="titles pt-4">
          <h1 class="landingpage-title">LIFE TOGETHER</h1>
          <h2 class="landingpage-subtitle">Share The Load. Simplify Life.</h2>
        </div>
        <nav class="navbar d-flex justify-content-center">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <button
                class="btn btn-color"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                What is LIFE TOGETHER?
              </button>
            </li>
            <li class="list-inline-item">
              <button
                class="btn btn-color"
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
          <div class="row">
            <div class="col">
              <div class="collapse multi-collapse pb-3" id="multiCollapseExample1">
                <div class="card card-body what-is">
                  LIFE TOGETHER is a platform created to help groups of people
                  sharing a living space with upkeep and maintenance of their
                  homes.
                </div>
              </div>
            </div>
            <div class="col">
              <div class="collapse multi-collapse pb-3" id="multiCollapseExample2">
                <div class="card card-body how-to">
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
