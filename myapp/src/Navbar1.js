import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Quiz from './Quiz';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './external.css'
import Offcanvas from 'react-bootstrap/Offcanvas';




const Navbar1 = () => {
  const [showModal, setshowModal] = useState(false)
  const [registerModal, setregisterModal] = useState(false)
  const [name, setname] = useState('');
  const [usermail, setusermail] = useState('');
  const [mobile, setmobile] = useState('');
  const [pass, setpass] = useState('')
  const [data, setData] = useState('')
  const [user1, setuser1] = useState(false)
  const [loginmail, setloginmail] = useState('')
  const [loginpass, setloginpass] = useState('');
  const [islogin, setislogin] = useState(false);
  const [showProfile, setshowProfile] = useState(false)
  const [click,setclick]=useState(false)
  const [stream,setstream]=useState('')
  const [course,setcourse]=useState('')
  const [gender,setgender]=useState('')
  const [update, setupdate] = useState([])

  useEffect(() => {
    // Check if user data exists in sessionStorage
    const userData = sessionStorage.getItem('userData');
    if (userData) {
      setuser1(JSON.parse(userData));
      setislogin(true);
    }
  }, []);
  

  function logOut() {
    // Clear user data from sessionStorage
    sessionStorage.removeItem('userData');
    window.location.reload();
  }
  
  function editProfile()
  {
    setclick(true);
  }

  function profileClose() {
    setshowProfile(false);
  }
  function profileOpen() {
    setshowProfile(true);
  }
  function openLoginModal() {
    setshowModal(true)

  }
  function closeLoginModal() {
    setshowModal(false)

  }
  function openRegisterModal() {
    setregisterModal(true)
  }
  function closeRegisterModal() {
    setregisterModal(false)
  }

  const handleSubmit = () => {
    const Userdata = {
      name: name,
      usermail: usermail,
      mobile: mobile,
      pass: pass
    };
    axios.post(`http://localhost:5000/edutechUsers`, Userdata)
      .then(res => {
        console.log(res.data);

      })
      .catch(err => {
        console.log(err);
      });
    submitted();
  };
  function submitted() {
    alert("Registered Successfully");
  }

  const handlelogin = () => {

    axios.get('http://localhost:5000/findall')
      .then((res) => {
        setData(res.data);


        const authenticatedUser = res.data.find(item => item.usermail === loginmail && item.pass === loginpass);
        sessionStorage.setItem('userData', JSON.stringify(authenticatedUser));
        if (authenticatedUser) {
          setuser1(authenticatedUser);
          alert(`Welcome ${authenticatedUser.name}`);
          setislogin(true);

        } else {
          alert("Invalid Data");
        }
      })
      .catch((err) => {
        console.log(err);
      })


  }
//update 
const updateData = (id) => {
  const Udata = {
      name: name,
      stream:stream,
      gender:gender,
      course:course,
      // score:userScore
  }
  axios.put(`http://localhost:5000/update/${id}`, Udata)
      .then(res => {
          console.log("data updated:", res.data)
          setuser1(prevUser => ({
            ...prevUser,
            name: Udata.name,
            stream: Udata.stream,
            gender: Udata.gender,
            course: Udata.course,
            
        }));
      })
      .catch(err => {
          console.log('Error', err)
      })
}
  

  return (
    
    <div >
      
      <Navbar expand="lg" className="body-tertiary" bg='primary'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" ><span className='nav_component'>Home</span></Nav.Link>
              <Nav.Link href="/about"><span className='nav_component'>About Us</span></Nav.Link>
              <NavDropdown title=<span className='nav_component'>Course</span> id="basic-nav-dropdown">
                <NavDropdown.Item href="/engineering">Engineering</NavDropdown.Item>
                <NavDropdown.Item href="/medical">Medical</NavDropdown.Item>
                <NavDropdown.Item href="/agriculture">Agriculture</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact" ><span className='nav_component'>Contact Us</span></Nav.Link>
              
              {/* //login & register */}
              {!islogin ? (
                <div className='d-flex alignItems-right' style={{ paddingLeft: "38em" }} >
                  <Col xs="auto">
                    <Button type="submit" style={{ backgroundColor: "#5f6272" }} onClick={openLoginModal}>Login</Button>
                  </Col>
                  <Button variant="link" style={{ color: "white" }} onClick={openRegisterModal}>Sign Up</Button>
                </div>
              ) : (
                <div style={{ paddingLeft: "27em" }}>
                <Col xs="auto">
                  <a onClick={profileOpen}>
                    <img className='profile_img' src="https://cdn-icons-png.flaticon.com/128/9073/9073117.png" alt="profile" height={38} width={38} />
                  </a>
                  {/* <Button type="submit" style={{ backgroundColor: "#5f6272", marginLeft:100} onClick} >Profile</Button> */}
                </Col>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* login model */}
      <Modal show={showModal} onHide={closeLoginModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* form start */}
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
                <Form.Label column sm="2" >
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type='email' onChange={(e) => setloginmail(e.target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2" >
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" placeholder="Password" onChange={(e) => setloginpass(e.target.value)} />
                </Col>
              </Form.Group>
            </Form>
            {/* form end */}
          </Modal.Body>

          <Modal.Footer>
            {/* <Button variant="secondary" onClick={closeLoginModal}>Close</Button> */}
            <Button variant="primary" onClick={handlelogin}>Login</Button>
           
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

      {/* Register modal */}

      <Modal show={registerModal} onHide={closeRegisterModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <table>
              <tbody>
                <tr>
                  <td><label>Name :</label></td>
                  <td><input type='text' name='name' onChange={(e) => setname(e.target.value)} /></td>
                </tr>
                <tr>
                  <td><label>Email-Id :</label></td>
                  <td><input type='email' name='email' onChange={(e) => setusermail(e.target.value)} /></td>
                </tr>
                <tr>
                  <td><label>Mob. No. :</label></td>
                  <td><input type='tel' name='mob' pattern="[789]{1},[0-9]{9}" onChange={(e) => setmobile(e.target.value)} /></td>
                </tr>
                <tr>
                  <td><label>Password :</label></td>
                  <td><input type='password' name='password' onChange={(e) => setpass(e.target.value)} /></td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={closeRegisterModal}>Close</Button> */}
            <Button variant="primary" onClick={handleSubmit} >Sign Up</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
      {/* profile modal */}

      

      {!click &&
      <Offcanvas className="profile-offcanva" show={showProfile} onHide={profileClose} placement='end' style={{backgroundColor:"rgb(255 255 231)"}} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title  className="container-fluid" style={{backgroundColor:"white",color:"green" }}>Hi {user1.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><h6>E-mail:</h6>{user1.usermail} </p>
         <p><h6>Mobile No. :</h6>{user1.mobile} </p>
         <p><h6>Stream</h6>{user1.stream}</p>
         <p><h6>Course</h6>{user1.course}</p>
         <p><h6>Gender</h6>{user1.gender}</p>

         <a href=''>Visit Profile</a> 
         <br/><br/><br/>
         <Button variant='primary' onClick={editProfile}>Edit Profile</Button>&nbsp;&nbsp;&nbsp;
         <Button variant='primary' onClick={logOut}>Log Out</Button>&nbsp;&nbsp;&nbsp;
        </Offcanvas.Body>
      </Offcanvas>
      }
      {click &&
        <Offcanvas className="profile-offcanva" show={showProfile} onHide={profileClose} placement='end' style={{backgroundColor:"rgb(255 255 231)"}} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title  className="container-fluid" style={{backgroundColor:"white",color:"green" }}>Hi {user1.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><h6>E-mail:</h6>{user1.usermail} </p>
         <p><h6>Mobile No. :</h6>{user1.mobile} </p>
         <p><label>Name:</label> <input type='text'  placeholder={update.name} onChange={(n)=>setname(n.target.value)} /></p>
         <p><label>Stream:</label> <input type='text'  placeholder={update.stream} onChange={(n)=>setstream(n.target.value)} /></p>
         <p><label>Gender:</label> <input type='text'  placeholder={update.gender} onChange={(n)=>setgender(n.target.value)}/></p>
         <p><label>Course:</label> <input type='text'    placeholder={update.course} onChange={(n)=>setcourse(n.target.value)}/></p>
         <Button variant='primary' onClick={logOut}>Log Out</Button>&nbsp;&nbsp;&nbsp;
         <Button variant='primary' onClick={() => { updateData(user1._id); setclick(false); }} >Save Changes</Button>
        </Offcanvas.Body>
      </Offcanvas>
    }
    
    </div>
  )
}

export default Navbar1