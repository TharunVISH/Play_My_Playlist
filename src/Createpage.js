import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/fontawesome-free-solid'
import MusicImage from './ImagesUsed/Music3.jpg';


function Createpage() {
    return(
        <div className= "CreatepageHead">
            <h1 className="head1">Create Room <button>Room ID:THYE  <FontAwesomeIcon icon={faCopy} /></button></h1>
            
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
    <Button><FontAwesomeIcon icon={faCopy} /></Button>
      <Form.Control  type="password"/>
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
