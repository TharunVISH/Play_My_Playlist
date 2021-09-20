import './Createpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/fontawesome-free-solid'
//import MusicImage from '../ImagesUsed/Music3.jpg';


function Createpage() {
    return(
        <div className= "CreatepageHead">
            <div className="PageHeading">Create Room</div> 
            <Button className="RoomID" variant="primary">Room ID:THYE  <FontAwesomeIcon icon={faCopy} /></Button>
            <br/><br/><br/><br/>


          
  <Form>
  <Row>
    <Col>
    <Form.Group className="Block-1" >
    <Form.Label><h3>Room Name:</h3></Form.Label>
      <Form.Control  type="Text"  />
      </Form.Group>
    </Col>
    <Col>
    <Form.Group className="Block-2">
    <Form.Label><h3>Number of Participants:</h3></Form.Label>
      <Form.Control type="number" />
      </Form.Group>
    </Col>
  </Row>
</Form>

<Form>
  <Row>
    <Col>
    <Form.Group className="Block-3" >
    <Form.Label><h3>Passcode:</h3></Form.Label>
    
      <Form.Control className="Passcode"  type="password" disabled/>
      <Button className="CopyPasscode"><FontAwesomeIcon icon={faCopy} /></Button>
      </Form.Group>
    </Col>
    <Col>
    <Form.Group className="Block-4">
    <Form.Label><h3>Game Rule:</h3></Form.Label>
      <Form.Control type="text"/>
      </Form.Group>
    </Col>
  </Row>
</Form>
<button className="gen-code">Generate code</button>
<div className="bottom"><button className="btn-bottom">Create Room </button></div>

</div>
       )
}
export default Createpage;
