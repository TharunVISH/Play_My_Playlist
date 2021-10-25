
import '../HeaderAndFrame/HeaderFrame.css'
import './CreateRoom.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,Col,Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/fontawesome-free-solid'

import { Link} from "react-router-dom";

import Header from '../HeaderAndFrame/Header'

import React, { useState, useEffect } from "react";

import {createPassword,copyToClipboard} from './CreateRoomFunctions';



function CreateRoom() {

  const[password,setPassword]=useState('')
  const[Participants,setParticipants]=useState(6)

 

const Api_Url = "http://localhost:4000/api/GenerateID"

// console.log("hello")
  

  const [RoomId, setRoomID] = useState(null);

  
  useEffect(() => {

    fetch(Api_Url)
      .then((res) => res.json())
      .then((data) => {
        setRoomID(data.Id);
        
        // console.log(data);

      });
  }, []);


    return(
        <div>

          <Header PageHeaderNav = 'Join Room'/>
          <div className=" FormFrame shadow-lg pt-5 pb-5  mb-10 mt-5 rounded">
            
            <div >
            <div className="PageHeading">Create Room</div> 
            <Button className="PageHeadingButton" id="RoomID" value={RoomId} variant="primary" >Room ID:{RoomId}  <FontAwesomeIcon icon={faCopy} /></Button>
            </div>
            <br/><br/><br/><br/>


          <div>
          <Form   className="InnerForm">
               <Row>          
                <Col sm={6} xs={12}>
                  <Form.Group >
                    <Form.Label className="FormLabel">Player Name:</Form.Label>
                    <Form.Control className="FormControl" type="Text" id="PlayerName" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>          
                <Col sm={6} xs={12}>
                  <Form.Group >
                    <Form.Label className="FormLabel">Room Name:</Form.Label>
                    <Form.Control className="FormControl" type="Text" id="RoomName" />
                  </Form.Group>
                </Col>
                <Col sm={6} xs={12}>
                <Form.Group >
                <Form.Label className="FormLabel">Number of Participants:  <b>{Participants}</b></Form.Label>
                <Form.Range name="ParticipentNo" className=" FormControl" id="Participants"  min={2} max={10} onChange={()=>setParticipants(document.getElementById('Participants').value)} />
                
                  </Form.Group>
                </Col>
              </Row>
            
              <Row>
              <Col sm={6} xs={12}>
                  <Form.Group >
                    <Form.Label className="FormLabel">Passcode:</Form.Label>
                    <Row>
                        <Col lg={10} md={9} sm={9} xs={10}  className="PaddingRight-0">
                          <Form.Control id="Passcode" className="FormControl"  type="text"  value={password} disabled />
                        </Col>
                        <Col lg={2} md={3} sm={3} xs={2} className="PaddingLeft-0 PaddingRight-0">
                          <Button  className="FormControl" onClick={()=>copyToClipboard(password)}><FontAwesomeIcon icon={faCopy}/></Button>          
                        </Col>
                    </Row>         
                      <Button className="mt-2  FormControl btn btn-primary" onClick={()=>setPassword(createPassword())}>Generate code </Button>
                    </Form.Group>
                </Col>

                <Col sm={6} xs={12}>
                  <Form.Group >
                  <Form.Label className="FormLabel">Game Rules:</Form.Label>
                    <Form.Control as="textarea" id="GameRule" className="FormControl GameRules"/>
                    </Form.Group>
                </Col>
              </Row>
              <div className="bottom" onClick={SendData}><Link to={'/InsideRoom?RoomID='+RoomId}><Button className="btn-bottom" >Create Room </Button></Link></div>
            </Form>
         
          </div>       

          
          </div></div>
       )
}

function SendData(){
  
  var DataObj={RoomID:document.getElementById('RoomID').value,
    PlayerName:document.getElementById('PlayerName').value,
    RoomName:document.getElementById('RoomName').value,
    ParticipentNo:document.getElementById('Participants').value,
    Passcode:document.getElementById('Passcode').value,
    GameRule:document.getElementById('GameRule').value}
  
    
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(DataObj),
    mode: 'cors'
    
};
fetch("http://localhost:5000/api/ReceiveRoomData", requestOptions)
}

export default CreateRoom;