import { Form, Row,Col, InputGroup,Container,Button } from 'react-bootstrap';
import Header from '../HeaderAndFrame/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid'
import { Link} from "react-router-dom";



import './JoinRoom.css'

function JoinRoom() {
    return(
        <div >

          <Header PageHeaderNav = 'Join Room'/>
          <div className=" FormFrame shadow-lg pt-5 pb-5  mb-10 mt-5 ">
            
            <div >
                <h3 className="PageHeading">Join Room</h3>
                <Button className="RoomID" variant="primary">How To Play</Button>
            </div> 
            <br/><br/><br/><br/>


          <div className="FormJoin">


                    <Form fluid  >
                        <Row >
                            <Col>
                            <Form.Group  >
                                <Form.Label><h4>Room ID:</h4></Form.Label>
                                <Row>
                                <Col md={6} className="pr-0">
                                <Form.Control className="JoinClassRoom" type="text" placeholder="Enter Room ID" />
                                </Col>
                                <Col md={2} className="pl-0">
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

                    <div className="bottom"><Link to="/InsideRoom"><Button className="btn-bottom">Join Room </Button></Link></div>
                    

                </div>

        </div>
                   
          



    )
}
export default JoinRoom