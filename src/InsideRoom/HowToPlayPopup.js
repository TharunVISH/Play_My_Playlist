import Modal from 'react-bootstrap/Modal';


function Popup(props){

        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                How To Play
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
                  {props.GameRules}
              
            </Modal.Body>
            
          </Modal>
        );
        
      }


      


export default Popup;