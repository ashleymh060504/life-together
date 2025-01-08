import './welcome.css';

function Welcome() {

    return(
        <div>
            {/* Header */}
            <ul class="nav justify-content-between mt-3">
                <li class="nav-item ms-3">
                    <p className='dark-mode-btn'>Dark Mode</p>
                </li>
                <li class="nav-item me-3">
                    <p>Cohabiting made easy!</p>
                </li>
            </ul>
            <ul class="nav justify-content-center mb-3">
                <li class="nav-item">
                    <h1 className='heading'>LIFE TOGETHER</h1>
                </li>
            </ul>

            {/* Learn More */}
            <div className="container-sm welcome-small">
                <div class="card text-center">
                    <div class="card-body">
                        <p class="d-inline-flex gap-1">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Discover Life Together</a>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">How to Get Started</button>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Show/Hide All Details</button>
                        </p>
                        <div class="row">
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body">
                                        LIFE TOGETHER is a platform created to help groups of people sharing a living space with upkeep and maintenance of their homes.
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample2">
                                    <div class="card card-body">
                                    Simply register or log in below to access your profile. From there, you can create a new group and invite groupmates to get started.  With LIFE TOGETHER, you can select and assign tasks to groupmates, create new tasks, delete tasks, change task deadlines as well as monitor and update the progress status of a task.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-body-secondary">
                        Ready to get organized?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;