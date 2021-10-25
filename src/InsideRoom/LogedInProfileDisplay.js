
import {Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 
import './PlayerStatus.css'
import {useState,useEffect} from 'react'
import {useLocation} from "react-router-dom";



function GetRoomID() {
   
   let query = new URLSearchParams(useLocation().search);
     
     return (query.get("RoomID"));
 }

function DisplayLogedInPlayer(props){
        let RoomID=GetRoomID();
        let RoomInfoUrl="http://localhost:4000/api/GetRoomInfo?id="+RoomID;
        const[PlayerName,setPlayerName] = useState(null);

  
        useEffect(() => {
      
          fetch(RoomInfoUrl)
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              setPlayerName(data.PlayerName);
      
            });
        }, []);
      
    
    return (<div className='LogedInPlayerInfoContainer'>
        
            <div className="LogedInPlayerImageContainer" >
            
                <Image className ="LogedInPlayerImage" src={'/PlayersImages/Player_Id_'+props.ID+'.jpg'}  ></Image>
            
                <span className='LogedInPlayerName'>
                    {PlayerName}
                </span>
            </div></div>

    )
}
export default DisplayLogedInPlayer