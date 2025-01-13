import Header from '../components/Header.jsx';
import Welcome from '../components/user-page/Welcome.jsx';
import Chores from '../components/user-page/Chores.jsx';
import AddChore from '../components/user-page/AddChore.jsx';

import '../index.css';

function User() {

  return (
    <div className="container my-4">
          <div className="row">
            {/* Feature A */}
            <div className="col-12 mb-5">
               <Header darkMode={'Dark Mode'} logOut={'Log Out'}/>
            </div>

            {/* Feature B */}
            <div className="col-12 mx-auto">
              <Welcome />
            </div>
            {/* Feature C */}
            <div className="col-12 mt-5">
              <Chores />
            </div>
              <div className="col-12 mt-5">
              <AddChore/>
            </div>
          </div>
        </div>
  );
};

export default User;