import Navbar from '../components/Navbar.jsx';
import Welcome from '../components/group-page/Welcome.jsx';
import Chores from '../components/group-page/Chores.jsx';
import AddChore from '../components/group-page/AddChore.jsx';

import '../index.css';

function Together() {

  return (
    <div>
      <Navbar darkMode={'Dark Mode'} logOut={'Log Out'}/>
      <Welcome/>
      <Chores/>
      <AddChore/>
    </div>
  );
};

export default Together;