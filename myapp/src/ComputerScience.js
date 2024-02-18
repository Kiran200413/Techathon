import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './computerscience.css'
import FrontEndBrochure from './Assets/FrontEndBrochure.jpg'

const ComputerScience = () => {
  const [showModal0, setShowModal0] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  return (
    <>
      <br /><br />
      <div className="row">
        
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=600" height={210}
            />
            <Card.Body>
              <Card.Title className="heading">Front End Development</Card.Title>
              <Card.Text>
                Frontend development focuses on creating interactive web
                interfaces using HTML, CSS, and JavaScript.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3" href="/frontend">
                  Enroll Now
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal0(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  View Brochure
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal1(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>

              <Modal
                show={showModal0}
                onHide={() => setShowModal0(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Brochure:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img src={FrontEndBrochure} alt="" height={700} width={750}/>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal0(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal1}
                onHide={() => setShowModal1(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Web Development</strong>:Entry-level salaries
                    range from $50,000 to $80,000, while senior developers can
                    earn $100,000+ annually.
                    <br />
                    <strong>2 JavaScript Frameworks:</strong>Proficiency in
                    React, Angular, or Vue.js leads to salaries starting at
                    $60,000 to $90,000, with senior roles exceeding $120,000 per
                    year.
                    <br />
                    <strong>3 Mobile Development:</strong>Salaries mirror web
                    development, with entry-level positions at $50,000 to
                    $80,000 and senior roles reaching $100,000+ annually. <br />
                    <strong>4 UI/UX Design:</strong>Salaries range from $60,000
                    to $100,000+ for frontend developers with design skills
                    focused on enhancing user experiences. <br />
                    <strong>5 E-commerce Development:</strong> Comparable to web
                    development salaries, with potential for higher earnings
                    based on expertise and project complexity. <br />
                    <strong>6 Progressive Web Apps (PWAs):</strong>{" "}
                    Opportunities align with web development, with potential for
                    specialized roles and higher compensation. <br />
                    <strong>7 Cross-platform Development:</strong> Similar to
                    web and mobile development salaries, with potential for
                    increased earnings based on skills and experience.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal1(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>

      </div>


    </>
  )
};

export default ComputerScience;