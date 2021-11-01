import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,Col, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React, { useState,useEffect } from 'react'
//import {FontAwesome,FontAwesomeIcon} from 'react-fontawesome';
import './AddSong.css';
import Uploadbutton from '../ImagesUsed/uploadimage.png';
import Playbutton from '../ImagesUsed/playbutton.jpg';
import MusicSymbol from '../ImagesUsed/MusicSymbol.gif';
import {useLocation} from "react-router-dom";

function GetRoomID() {
   
    let query = new URLSearchParams(useLocation().search);
      
      return (query.get("RoomID"));
  }
 

 function AddSong(){
    let RoomID=GetRoomID();
        let RoomInfoUrl="http://localhost:4000/api/GetRoomInfo?id="+RoomID;
        const[urlLink,seturlLink] = useState(null);
        const [data , setData]=useState([null]);

  
        useEffect(() => {
      
          fetch(RoomInfoUrl)
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              seturlLink(data.urlLink);
      
            });
        }, []);
        const handleAdd = () =>{
            setData([...data,""]);
        }
     return( 
     <div>
         <div className="addMusic">
                <p className="songheading">
                    Add your songs here...
                </p>
                <br/>
                <Form>
               
                    <Row >
                        <Col  lg={9} md={9} sm={8} xs={7} className="PaddingRight-0">
                            <Form.Group>
                                <InputGroup  className="inputbox" >
                                <Form.Control   type="Text"  placeholder="paste link here" id="urlLink" />
                                <InputGroup.Text>
                                    <button className="upbutton" >
                                        <img className="upimag"src= {Uploadbutton} alt=""/>
                                    </button>
                                </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col  lg={3} md={3} sm={4} xs={5} >
                            <Button className="addbutton" variant="light"  onClick={handleAdd} >Add</Button>
                        </Col>
                    </Row>
                    <br/>
                    {data.map((item)=>
                    <Row >
            <Col lg={9} md={9} sm={8} xs={7} className="PaddingRight-0">
                <Form.Group  >
                    <InputGroup className="musicbox">
                        <InputGroup.Text className="MusicSymbolContainer">
                            <img className="MusicSymbol"src= {MusicSymbol} alt=""/>
                        </InputGroup.Text>
                        <Form.Control  className="SongTitle" type="Text"   placeholder="song title - fetched from link" disabled>{urlLink}
                         </Form.Control>   
                        
                        <InputGroup.Text>
                            <button className="upbutton">
                                <img className="upimag"src= {Playbutton} alt=""/>
                            </button>
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Col>

            <Col lg={3} md={3} sm={4} xs={5} >
            <Button  className="addbutton" variant="light">
                Remove
            </Button>
            </Col>
         

        </Row>
        
            )}
           
                </Form>
                
            <br/>
            </div>
           <Button className="startgame" variant="warning">START GAME</Button>
            </div>
     )
 }
 {/* 
 function SendData(){
  
    var DataObj={
      urlLink:document.getElementById('urlLink').value,
      }
    
      
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(DataObj),
      mode: 'cors'
      
  };
  fetch("http://localhost:6000/api/AddSongLink", requestOptions)
  }
  */}

 export default AddSong;