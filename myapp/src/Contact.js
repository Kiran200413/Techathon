import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Whatsapp_logo from './Assets/Whatsapp_logo.jpg';
import Linkedin from './Assets/linkedin_logo.jpg';
import gmail from './Assets/gmail_logo.jpg';
import './contact.css'

const Contact = () => {
  return (
    <>
    <br/><br/>
      <div style={{textAlign:"center"}}>
        <h1>
          <b>Contact Us</b>
        </h1>
      </div>

      <Container>
        <Row className="mt-5">
          <Col>
            <img
              src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/05.png"
              alt=""
              width="100%"
            />
          </Col>

          <Col className="connect1">
            <Form className="form md-hidden">
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>
                  <b> Name</b>
                </Form.Label>
                <Form.Control placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>
                  <b>Email</b>
                </Form.Label>
                <Form.Control placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>
                  <b>Mobile Number</b>
                </Form.Label>
                <Form.Control placeholder="Mob No" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>
                  <b>Message</b>
                </Form.Label>
                <Form.Control placeholder="Your Suggetions" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5 contact1">
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <img className="logo" src={Whatsapp_logo} alt="" />
                <Card.Text>
                  For Help <br />
                  <a href=""> +91 9087654321</a>
                  <br />
                  <a href=""> +91 9807654321</a> 
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <img className="logo" src={gmail} alt="" />
                <Card.Text>
                  Mail Us <br />  on <br />
                  <a href="">protons@gmail.com</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body >
                <img className="logo" src={Linkedin} alt="" />
                <Card.Text>
                  Join with <br /> LinkedIn Family <br />
                  <a href="">Protons Infotech</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="p-10 mt-5 mb-5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.310403828321!2d74.18058027722856!3d19.614022987712556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0070e7eb3683%3A0x812069ad0d4f7f8f!2sAmrutvahini%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1706719708064!5m2!1sen!2sin"
            width="600"
            height="450"
           
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Row>
      </Container>
    </>
  );
};

export default Contact;