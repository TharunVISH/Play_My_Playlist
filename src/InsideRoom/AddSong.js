import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row,Col, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import {FontAwesome,FontAwesomeIcon} from 'react-fontawesome';
import './AddSong.css';
import Uploadbutton from '../ImagesUsed/uploadimage.png';
import Playbutton from '../ImagesUsed/playbutton.jpg';
import Musicbutton from '../ImagesUsed/musicbutton.jpg';



 function AddSong(){
     return( <div>
         <div className="addMusic">
             <p className="songheading">
                 Add your songs here...
             </p>
             <br/>
             <Form>
                 <Row >
                     <Col >
                     <Form.Group className="inputbox">
                     <InputGroup >
                     <Form.Control   type="Text"  placeholder="paste link here"  />
                     <InputGroup.Text>
                       <button className="upbutton" >
                           <img className="upimag"src= {Uploadbutton} alt=""/>
                       </button>
                     </InputGroup.Text>
                     </InputGroup>
                     </Form.Group>
                    </Col>
                    <Col>
                    <Button className="addbutton" variant="light">
                        Add
                    </Button>
                    </Col>
                 </Row>
                 <br/>
                 <Row>
                     <Col>
                     <div className="musicdiv">
                     <Form.Group className="musicbox">
                     <InputGroup>
                     <InputGroup.Text>
                       <img className="upimag"src= {Musicbutton} alt=""/>
                     </InputGroup.Text>
                     <Form.Control  type="Text"   placeholder="song title - fetched from link"  >
                     </Form.Control>
                     <InputGroup.Text>
                       <button className="upbutton">
                           <img className="upimag"src= {Playbutton} alt=""/>
                       </button>
                     </InputGroup.Text>
                     </InputGroup>
                     </Form.Group>
                     </div>
                    </Col>

                    <Col>
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