import { Form, Row,Col, InputGroup,Container,Button } from 'react-bootstrap';
import Header from '../HeaderAndFrame/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid'
import { Link} from "react-router-dom";





function JoinRoom() {
    return(
        <div >

          <Header PageHeaderNav = 'Join Room'/>
          <div className=" FormFrame shadow-lg pt-5 pb-5  mb-10 mt-5 rounded">
            
            <div >
                <div className="PageHeading">Join Room</div>
                <Button className="PageHeadingButton" variant="primary">How To Play</Button>
            </div> 
            <br/><br/><br/><br/>


          <div>


                    <Form   className="InnerForm">
                        <Row >
                            <Col >
                            <Form.Group  >
                                <Form.Label className="FormLabel">Room ID:</Form.Label>
                                <Row>
                                    <Col  lg={6} md={5} sm={8} xs={7}  className="PaddingRight-0">
                                        <Form.Control  className="FormControl" type="text" placeholder="Enter Room ID" />
                                    </Col>
                                    <Col  lg={2} md={3} sm={4} xs={5} className="PaddingLeft-0">
                                        <Button  className="FormControl" >Check Server</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                            </Col>
                            
                        </Row>
                        <br/>
                        <Row >
                            <Col>
                            <Form.Group  >
                                <Form.Label className="FormLabel">Password:</Form.Label>
                                <Row>
                                    <Col md={7} sm={10} xs={10} className="PaddingRight-0">
                                        <Form.Control className="FormControl" type="password" placeholder="Enter Password" />
                                    </Col>
                                    <Col md={1} sm={2} xs={2} className="PaddingLeft-0">
                                        <Button className="FormControl"><FontAwesomeIcon icon={faEye} /></Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                            </Col>
                            
                        </Row>

                    </Form>
               
                    </div>       

                    <div className="bottom"><Link to="/InsideRoom"><Button className="btn-bottom">Join Room </Button></Link></div>
                    

                </div>

        </div>
                   
          



    )
}
export default JoinRoom