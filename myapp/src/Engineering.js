import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './engineering.css'

const Engineering = () => {
  
  return (
    <section className='container-fluid page'>
      <div className='row'>
        <div className='col box'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" />
            <Card.Body>
              <Card.Title>Computer Science and Information Technology</Card.Title>
              
              <Button variant="primary" href='/cs-it'>Select</Button>
            </Card.Body>
          </Card>
        </div>

        
      </div>
    </section>
  )
}

export default Engineering