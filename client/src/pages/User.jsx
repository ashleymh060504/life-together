import Navbar from '../components/Navbar.jsx';
import Welcome from '../components/user-page/Welcome.jsx';
import Chores from '../components/user-page/Chores.jsx';
import AddChore from '../components/user-page/AddChore.jsx';

import '../index.css';

function User() {

  return (
    <div>
      <Navbar darkMode={'Dark Mode'} logOut={'Log Out'}/>
      <Welcome/>
      <Chores/>
      <AddChore/>
    </div>
  );
};

export default User;