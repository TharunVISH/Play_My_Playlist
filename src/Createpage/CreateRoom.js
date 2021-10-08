
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
            <Button className="PageHeadingButton" variant="primary">Room ID:{RoomId}  <FontAwesomeIcon icon={faCopy} /></Button>
            </div>
            <br/><br/><br/><br/>


          <div>
          <Form   className="InnerForm">
              <Row>          
                <Col sm={6} xs={12}>
                  <Form.Group >
                    <Form.Label className="FormLabel">Room Name:{}</Form.Label>
                    <Form.Control className="FormControl" type="Text"  />
                  </Form.Group>
                </Col>
                <Col sm={6} xs={12}>
                <Form.Group >
                <Form.Label className="FormLabel">Number of Participants:  <b>{Participants}</b></Form.Label>
                <Form.Range  className=" FormControl" id="Participants"  min={2} max={10} onChange={()=>setParticipants(document.getElementById('Participants').value)} />
                
                  </Form.Group>
                </Col>
              </Row>
            
              <Row>
              <Col sm={6} xs={12}>
                  <Form.Group >
                    <Form.Label className="FormLabel">Passcode:</Form.Label>
                    <Row>
                        <Col lg={10} md={9} sm={9} xs={10}  className="PaddingRight-0">
                          <Form.Control className="FormControl"  type="password" placeholder={password} disabled />
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
                    <Form.Control as="textarea" className="FormControl GameRules"/>
                    </Form.Group>
                </Col>
              </Row>
            </Form>
         
          </div>       

          <div className="bottom"><Link to="/InsideRoom"><Button className="btn-bottom">Create Room </Button></Link></div>

          </div></div>
       )
}



export default CreateRoom;