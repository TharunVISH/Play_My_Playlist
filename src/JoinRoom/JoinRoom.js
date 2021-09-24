import { Form, Row,Col, InputGroup,Container,Button } from 'react-bootstrap';
import Header from '../HeaderAndFrame/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid'
import { Link} from "react-router-dom";
function JoinRoom() {
    return(
        <div className= "Createpage">

          <Header PageHeaderNav = 'Join Room'/>
            <div className="PageHeading">Create Room</div> 
            <Button className="RoomID" variant="primary">How To Play</Button>
            <br/><br/><br/><br/>


          <div>


                    <Form fluid ="sm">
                        <Row >
                            <Col>
                            <Form.Group  >
                                <Form.Label>Room ID:</Form.Label>
                                <Row>
                                <Col>
                                <Form.Control type="text" placeholder="Enter Room ID" />
                                </Col>
                                <Col>
                                <Button >Check Server</Button>
                                </Col>
                            </Row>
                            </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row >
                            <Col>
                            <Form.Group  >
                                <Form.Label>Room ID:</Form.Label>
                                <Row>
                                <Col>
                                <Form.Control type="password" placeholder="Enter Room ID" />
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

                    <div className="bottom"><Link to="/Frame/InsideRoom"><Button className="btn-bottom">Create Room </Button></Link></div>

        </div>
                   
          



    )
}
export default JoinRoom