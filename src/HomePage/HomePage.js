
import './HomePage.css'
import PmplLogo from '../ImagesUsed/PMPL-LOGO.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

import BottomImage from '../ImagesUsed/BottomGraphics.gif';
import ArrowImage from '../ImagesUsed/Arrow.png';
import { Link} from "react-router-dom";

function HomePage() {
  return(

  <div className="MainContainer">

   
    {/*Home Page Heading*/}
    <div className= "HomePageHead">
            
      <img className='HomePageHead1' src={PmplLogo} alt=''/>
      <div className="UnderLine"/>
      <h2 className="HomePageHead2">A Multiplayer Social Game To Play Along With Your Friends In A Private Room</h2>
    </div>


    {/*Create Room Button*/}
    <Link to='/CreatePage' >
            
    <Button className="BtnCreateJoinRoom"variant="primary"   >
      <h2 className="BtnHead">Create Room</h2>
      <br/><br/>
      <p className="BtnCaption">Play along with your friends</p>
      <br/><br/>
      <div className="ArrowImageContainer"><img  className="ArrowImage" src={ArrowImage} alt="ArrowImage" /></div>
    </Button>
    </Link>

    {/*Join Room Button*/}
    <Link to="/JoinRoom">
    <Button className="BtnCreateJoinRoom"variant="primary">
      <h2 className="BtnHead">Join Room</h2>
      <br/><br/>
      <p className="BtnCaption">Play along with your friends</p>
      <br/><br/> 
      <div className="ArrowImageContainer"><img  className="ArrowImage" src={ArrowImage} alt="ArrowImage" /></div>
    </Button>
    </Link>
    
    {/*Button How To Play */}
    <div>
            
    <Button variant="dark">
      <div className="BtnHowToPlay">HOW TO PLAY  <span><img className="ArrowImage" src={ArrowImage} alt="ArrowImage" /></span></div>
    </Button>
    </div>

    <br/>
    
    {/*Image at the bottom*/}
    <img className="BottomImage" src={BottomImage} alt="BottomImage" />
    

  </div>

  );
}





export default HomePage;
