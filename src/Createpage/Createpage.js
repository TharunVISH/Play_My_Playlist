import './Createpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Form from 'react-bootstrap/Form';
//import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/fontawesome-free-solid'
//import MusicImage from '../ImagesUsed/Music3.jpg';
import { Link} from "react-router-dom";
import { Form, Row,Col, InputGroup } from 'react-bootstrap';


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
      <Form.Control className="ComponentsCommonStyles" type="Text"  />
      </Form.Group>
    </Col>
    <Col>
    <Form.Group className="Block-2">
    <Form.Label><h3>Number of Participants:</h3></Form.Label>
      <Form.Control className="ComponentsCommonStyles" type="number" />
      </Form.Group>
    </Col>
  </Row>
</Form>

<Form>
  <Row>
    <Col>
    <Form.Group className="Block-3" >
    <Form.Label><h3>Passcode:</h3></Form.Label>
    <InputGroup>
    
      <Form.Control className="Passcode"  type="password" disabled>
      </Form.Control>
      <InputGroup.Text>
      <Button className="CopyPasscode"><FontAwesomeIcon icon={faCopy} /></Button>
   
      
      </InputGroup.Text>
      </InputGroup>
      </Form.Group>
    </Col>
    <Col>
    <Form.Group className="Block-4">
    <Form.Label><h3>Game Rules:</h3></Form.Label>
      <Form.Control as="textarea" className="GameRules"/>
      </Form.Group>
    </Col>
  </Row>
</Form>
<button className="gen-code">Generate code</button>
<div className="bottom"><Link to="/insideroom"><Button className="btn-bottom">Create Room </Button></Link></div>

</div>
       )
}
export default Createpage;
