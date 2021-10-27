 import Popup from './HowToPlayPopup';
 import {useState,useEffect} from 'react'
 import Button from 'react-bootstrap/Button';
 import {useLocation} from "react-router-dom";



 function GetRoomID() {
    
    let query = new URLSearchParams(useLocation().search);
      
      return (query.get("RoomID"));
  }
  

    function ButtonHowToPlay(){
        let RoomID=GetRoomID();
        let RoomInfoUrl="http://localhost:4000/api/GetRoomInfo?id="+RoomID;

        const [popup_status,setPopup_status]=useState(false);
        const [HowToPlay, setHowToPlay] = useState(null);

  
        useEffect(() => {
      
          fetch(RoomInfoUrl)
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              setHowToPlay(data.GameRule);
      
            });
        }, []);
      
        
    
        return(
                <>
                <Button variant="primary" id="btn_View_score" className='ButtonHowToPlay' onClick={() => {setPopup_status(true);}}>
                HowToPlay
                </Button>

                <Popup
                    show={popup_status}
                    onHide={() => setPopup_status(false)} 
                    GameRules={HowToPlay}
                />
                </>
        )
    }

    
    export default ButtonHowToPlay;