
import './App.css';

import { Route, Switch } from 'react-router-dom';
import SinUp from './Components/Sinup-login/sinUp';
import MainNavbar from './Components/Navbar/MainNavbar';
import ComposeEmail from './Components/ComposeEmail/ComposeEmail';
import SideBar from './Components/sideBar/sideBar';
import HomePage from './Pages/HomePage';
import Model from './Ui/Model';
// import mailDetail from './Components/Dashbord/MailDetails';
import { useSelector } from 'react-redux';
function App() {

  return (
    <div className="App">
      <MainNavbar />
      {/* <mailDetail /> */}
      <Switch>
        <Route path='/' exact>
          <SinUp />
        </Route>
        <Route path='/home' >
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
