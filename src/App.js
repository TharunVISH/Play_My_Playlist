
import './App.css';
import './HeaderAndFrame/HeaderFrame.css'

import HomePage from './HomePage/HomePage';
import CreateRoom from './Createpage/CreateRoom';
import InsideRoom from './InsideRoom/InsideRoom';
import JoinRoom from './JoinRoom/JoinRoom';


import {  BrowserRouter as Router,  Switch,  Route, Redirect} from "react-router-dom";




function App() {
  return(
  <Router>
    <Switch>
<<<<<<< HEAD
      <div>
      
      <Route path='/' exact component={HomePage}/>
      <Route path='/Frame' component={Frame} />
      

=======
      <div >
        <Route exact path="/">
          <Redirect to="/Home"  />
        </Route>
        <Route path='/Home'  component={HomePage} />
        <Route path='/CreatePage'   component={CreateRoom}/>
        <Route path='/InsideRoom'  component={InsideRoom}/>
        <Route path='/JoinRoom'  component={JoinRoom}/>
>>>>>>> e75c8e6b2511591309acc7d7809b3f3ee441910c
    </div>

    </Switch>
  </Router>
    
    
  );
}

export default App;
