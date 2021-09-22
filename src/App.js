
import './App.css';

import HomePage from './HomePage/HomePage'


import {  BrowserRouter as Router,  Switch,  Route, Redirect} from "react-router-dom";
import Frame from './HeaderAndFrame/Frame'



function App() {
  return(
  <Router>
    <Switch>
      <div>
        <Route exact path="/">
          <Redirect to="/Home" exact />
        </Route>
        <Route path='/Home'  component={HomePage} />
        <Route path='/Frame'  component={Frame}/>
    </div>

    </Switch>
  </Router>
    
    
  );
}

export default App;
