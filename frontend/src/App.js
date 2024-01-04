
import './App.css';

import { Route , Switch } from 'react-router-dom';
import SinUp from './Components/Sinup-login/sinUp';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = '/sinup-login'>
          <SinUp/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
