
import {Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 
import './PlayerStatus.css'

function DisplayLogedInPlayer(props){
    
    
    return (<div className='LogedInPlayerInfoContainer'>
        
            <div className="LogedInPlayerImageContainer" >
            
                <Image className ="LogedInPlayerImage" src={'/PlayersImages/Player_Id_'+props.ID+'.jpg'}  ></Image>
            
                <span className='LogedInPlayerName'>
                    {props.Name}
                </span>
            </div></div>

    )
}
export default DisplayLogedInPlayer