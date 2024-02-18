import React from 'react'
import './external.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Signup = ({ onRegister }) => {
    return (
        <div >
            <div className='register'>
            <h1>Sign Up</h1>
                <div className='form'>
                  
                    <Form >
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className='formlabel'>Name:</Form.Label>
                            <Form.Control type="email" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className='formlabel'>Mobile No:</Form.Label>
                            <Form.Control type="email" placeholder="Mobile Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className='formlabel'>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className='formlabel'>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="light" onClick={onRegister}>Register</Button>{' '}
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Signup;