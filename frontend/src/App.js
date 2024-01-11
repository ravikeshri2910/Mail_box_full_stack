
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Sinup from './Components/Signup/SignupLogin'
import MainNavbar from './Components/Navbar/MainNavbar';
import HomePage from './Pages/HomePage';
function App() {

  return (
    <div className="App">
      <MainNavbar />
      <Switch>
        <Route path='/' exact>
          <Sinup />
        </Route>
        <Route path='/home' >
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
