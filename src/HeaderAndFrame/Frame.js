import Createpage from '../Createpage/Createpage';
import InsideRoom from '../InsideRoom/InsideRoom'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";


import './HeaderFrame.css'


  
 

function Frame() {
    
    return(
      <div>
        
        
        <div className="Frame">
          <Router>
            <Switch>
              <Route path='/Frame/CreatePage'   component={Createpage}/>
              <Route path='/Frame/InsideRoom'  component={InsideRoom}/>
            </Switch>
          </Router>
        </div>
        
  </div>
    
    );
    
  }

  
  
  export default Frame;