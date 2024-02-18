import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Integrated Practice Env
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe src="https://www.jdoodle.com/online-java-compiler" className="notes" width={500} height={100}></iframe>
                                       
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Frontend2 = () => {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Button variant="poutline-dark" onClick={() => setModalShow(true)}>
        Do Practice!!
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /></>
    
  )
}

export default Frontend2