
import '../HeaderAndFrame/HeaderFrame.css'
import './CreateRoom.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,Col, InputGroup,Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/fontawesome-free-solid'

import { Link} from "react-router-dom";

import Header from '../HeaderAndFrame/Header'
import {numbers,uppercaselettters,lowercaseletters,specialcharacter} from './character'
import { useState } from 'react';



function CreateRoom() {
  const[password,setPassword]=useState('')
  const genpasscode= (e) =>{
    let characterList =''
    characterList= characterList + lowercaseletters
    characterList= characterList + uppercaselettters
    characterList= characterList + numbers
    characterList= characterList + specialcharacter

    setPassword(createPassword(characterList))
}
const createPassword = (characterList) => {
  let password=''
  let passwordLength=9
  const characterListLength= characterList.length
  for(let i=0;i<passwordLength;i++){
  const characterIndex =Math.round(Math.random()*characterListLength)
  password= password + characterList.charAt(characterIndex)
} 
return password
}

const copyToClipboard = () => {
  const newTextArea = document.createElement('textarea')
  newTextArea.innerText = password
  document.body.appendChild(newTextArea)
  newTextArea.select()
  document.execCommand('copy')
  newTextArea.remove()
}
const handleCopyPassword= (e) => {
  copyToClipboard()
}


    return(
        <div>

          <Header PageHeaderNav = 'Join Room'/>
          <div className=" FormFrame shadow-lg pt-5 pb-5  mb-10 mt-5 rounded">
            
            <div >
            <div className="PageHeading">Create Room</div> 
            <Button className="PageHeadingButton" variant="primary">Room ID:THYE  <FontAwesomeIcon icon={faCopy} /></Button>
            </div>
            <br/><br/><br/><br/>


          <div>
          <Form   className="InnerForm">
              <Row>          
                <Col sm={6} xs={12}>
                  <Form.Group >
                    <Form.Label className="FormLabel">Room Name:</Form.Label>
                    <Form.Control className="FormControl" type="Text"  />
                  </Form.Group>
                </Col>
                <Col sm={6} xs={12}>
                <Form.Group >
                <Form.Label className="FormLabel">Number of Participants:</Form.Label>
                  <Form.Control className="FormControl" type="number" />
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
                        <Col lg={2} md={3} sm={3} xs={2} className="PaddingLeft-0">
                          <Button  className="FormControl"onClick={handleCopyPassword}><FontAwesomeIcon icon={faCopy}/></Button>          
                        </Col>
                    </Row>             
                                              
                      <Button className="mt-2 FormControl" onClick={genpasscode}>Generate code </Button>
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

          <div className="bottom"><Link to="/InsideRoom"><Button className="btn-bottom">Join Room </Button></Link></div>

          </div></div>
       )
}
export default CreateRoom;
