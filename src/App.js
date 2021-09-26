
import './App.css';

import HomePage from './HomePage/HomePage'


import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Frame from './HeaderAndFrame/Frame'



function App() {
  return(
  <Router>
    <Switch>
      <div>
      
      <Route path='/' exact component={HomePage}/>
      <Route path='/Frame' component={Frame} />
      

    </div>

    </Switch>
  </Router>
    
    
  );
}

export default App;
