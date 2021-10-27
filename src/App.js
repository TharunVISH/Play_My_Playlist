
import './App.css';
import './HeaderAndFrame/HeaderFrame.css'

import HomePage from './HomePage/HomePage';
import CreateRoom from './Createpage/CreateRoom';
import InsideRoom from './InsideRoom/InsideRoom';
import JoinRoom from './JoinRoom/JoinRoom';
import Login from './Createpage/Login/Login';
import SignUp from './Createpage/SignUp/SignUp';



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
        <Route path='/CreatePage'   component={CreateRoom}/>
        <Route path='/InsideRoom'  component={InsideRoom}/>
        <Route path='/JoinRoom'  component={JoinRoom}/>
        <Route path='/Login'  component={Login}/>
        <Route path='/SignUp'  component={SignUp}/>
        
        
    </div>

    </Switch>
  </Router>
    
    
  );
}

export default App;
