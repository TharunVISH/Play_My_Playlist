
import './App.css';

import HomePage from './HomePage/HomePage'

import Createpage from './Createpage/Createpage';
import InsideRoom from './InsideRoom/InsideRoom'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";



function App() {
  return(<Router>
    <Switch>
    <div>
    
    <Route path='/' exact component={HomePage}/>
    <Route path='/createpage'  component={Createpage}/>
    <Route path='/insideroom'  component={InsideRoom}/>



  </div>

      </Switch></Router>
    
    
  );
}

export default App;
