
import './App.css';
import './HeaderAndFrame/HeaderFrame.css'

import HomePage from './HomePage/HomePage';
import Createpage from './Createpage/Createpage';
import InsideRoom from './InsideRoom/InsideRoom';
import JoinRoom from './JoinRoom/JoinRoom';


import {  BrowserRouter as Router,  Switch,  Route, Redirect} from "react-router-dom";




function App() {
  return(
  <Router>
    <Switch>
      <div >
        <Route exact path="/">
          <Redirect to="/Home"  />
        </Route>
        <Route path='/Home'  component={HomePage} />
        <Route path='/CreatePage'   component={Createpage}/>
        <Route path='/InsideRoom'  component={InsideRoom}/>
        <Route path='/JoinRoom'  component={JoinRoom}/>
    </div>

    </Switch>
  </Router>
    
    
  );
}

export default App;
