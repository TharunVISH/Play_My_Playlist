import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,Col, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import {FontAwesome,FontAwesomeIcon} from 'react-fontawesome';
import './AddSong.css';
import Uploadbutton from '../ImagesUsed/uploadimage.png';
import Playbutton from '../ImagesUsed/playbutton.jpg';
import MusicSymbol from '../ImagesUsed/MusicSymbol.gif';



 function AddSong(){
     return( 
     <div>
         <div className="addMusic">
                <p className="songheading">
                    Add your songs here...
                </p>
                <br/>
                <Form>
                    <Row >
                        <Col >
                            <Form.Group>
                                <InputGroup  className="inputbox" >
                                <Form.Control   type="Text"  placeholder="paste link here"  />
                                <InputGroup.Text>
                                    <button className="upbutton" >
                                        <img className="upimag"src= {Uploadbutton} alt=""/>
                                    </button>
                                </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md='auto'>
                            <Button className="addbutton" variant="light">Add</Button>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Group >
                                <InputGroup className="musicbox">
                                    <InputGroup.Text className="MusicSymbolContainer">
                                        <img className="MusicSymbol"src= {MusicSymbol} alt=""/>
                                    </InputGroup.Text>
                                    <Form.Control  className="MusicSymbolContainer" type="Text"   placeholder="song title - fetched from link" />
                                    
                                    <InputGroup.Text>
                                        <button className="upbutton">
                                            <img className="upimag"src= {Playbutton} alt=""/>
                                        </button>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md='auto'>
                        <Button className="addbutton" variant="light">
                            Remove
                        </Button>
                        </Col>
                    </Row>
                </Form>
            <br/>
            </div>
            <Button className="startgame" variant="warning">
                START GAME
            </Button>
             

        </div>
     )
 }
 export default AddSong;