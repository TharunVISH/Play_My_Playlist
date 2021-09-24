import { Form, Row,Col, InputGroup,Container,Button } from 'react-bootstrap';
import Header from '../HeaderAndFrame/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid'
import { Link} from "react-router-dom";

import './JoinRoom.css'

function JoinRoom() {
    return(
        <div className= "Createpage">

          <Header PageHeaderNav = 'Join Room'/>
            <div ><h3 className="PageHeading">Join Room</h3>
            <Button className="RoomID" variant="primary">How To Play</Button></div> 
            <br/><br/><br/><br/>


          <div className="FormJoin">


                    <Form fluid ="sm" className='JoinRoomForm'>
                        <Row >
                            <Col>
                            <Form.Group  >
                                <Form.Label><h4>Room ID:</h4></Form.Label>
                                <Row>
                                <Col>
                                <Form.Control className="JoinClassRoom" type="text" placeholder="Enter Room ID" />
                                </Col>
                                <Col>
                                <Button className="JoinFormButton" >Check Server</Button>
                                </Col>
                            </Row>
                            </Form.Group>
                            </Col>
                            
                        </Row>
                        <br/>
                        <Row >
                            <Col>
                            <Form.Group  >
                                <Form.Label><h4>Password:</h4></Form.Label>
                                <Row>
                                <Col>
                                <Form.Control type="password" placeholder="Enter Password" />
                                </Col>
                                <Col>
                                <Button ><FontAwesomeIcon icon={faEye} /></Button>
                                </Col>
                            </Row>
                            </Form.Group>
                            </Col>
                            
                        </Row>

                    </Form>
                    <br/><br/>
                    </div>       

                    <div className="bottom"><Link to="/Frame/InsideRoom"><Button className="btn-bottom">Join Room </Button></Link></div>

        </div>
                   
          



    )
}
export default JoinRoom