import './Authentication.css'
import PmplLogo from '../ImagesUsed/PMPL-LOGO.png'
import Music3 from '../ImagesUsed/Music3.jpg'
import BottomImage from '../ImagesUsed/BottomGraphics.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Link} from "react-router-dom";

function FirstPage() {  
    return(
      // <div>   <img className='background' src={Music3} alt=''/> 
    <div className="MainContainer">
     <div>     
             
    

     <br/><br/> <br/>
            <div className= "HomePageHead">
            
            <img className='HomePageHead1' src={PmplLogo} alt=''/> 
            
           </div> <div className="UnderLine"/>
            <h2 className="HomePageHead2">A Multiplayer Social Game To Play Along With Your Friends In A Private Room</h2>
            
            {/*Create Room Button*/}
            <Link to='/SignUp'>
                <br/><br/>
                  <Button className="PageSignupButton" variant="primary">
                    Sign Up</Button></Link>

                  <Link to='/Login'><Button className="PageLoginButton" variant="primary">Log In</Button></Link>

                  <img className="BottomImage" src={BottomImage} alt="BottomImage" />

     </div>
         
     
     
</div>   



 );
}    
export default FirstPage;
