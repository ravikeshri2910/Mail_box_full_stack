
import './App.css';

import { Route, Switch } from 'react-router-dom';
import SinUp from './Components/Sinup-login/sinupLogin';
import MainNavbar from './Components/Navbar/MainNavbar';
import HomePage from './Pages/HomePage';
function App() {

  return (
    <div className="App">
      <MainNavbar />
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
