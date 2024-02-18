import React from 'react'
import './external.css'
import Card from 'react-bootstrap/Card';
import CardTitle from 'react-bootstrap/esm/CardTitle';


const About = () => {
    return (
        <div className='about1'>
                <br/><br/>
            <div style={{textAlign:"center"}}>
                <h1><b>About Us</b></h1>
            </div>
            <br/><br/>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-12 col-md-6 about-img">
                        <img src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/Vector01.png" alt="" width="100%" />
                    </div>
                    <div className="col content1">
                        
                        <p>At our platform, we revolutionize education by offering free courses featuring integrated YouTube playlists and thorough notes. Our mission is to replicate the exact environment of paid courses, providing a premium learning experience. We curate educational content from across the internet, ensuring access to high-quality resources. Empower your learning journey with our comprehensive platform that bridges the gap between affordability and excellence in education.!</p>
                    </div>

                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-12 col-md-6 content1">
                        <p><br /><br />Revolutionizing education, our platform goes beyond traditional boundaries. We leverage integrated YouTube playlists and detailed notes to offer a dynamic and accessible learning experience for all. Breaking down barriers, we provide a revolutionary approach to education, ensuring that valuable knowledge is freely available to everyone. By curating diverse content from across the internet, we create a comprehensive educational ecosystem. Our commitment is to empower learners globally, transforming education into an inclusive, innovative, and enriching journey for all, transcending conventional limitations and making learning a universal right.</p>
                    </div>
                    <div className="col about-img">
                        <img src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/group_of_schools1.png" alt="" width="100%" />
                    </div>

                </div>
            </div>
            <br/><br/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Card className='card1'>
                            <CardTitle className='title1'><strong>Our Features:</strong>
                            </CardTitle>
                            <Card.Body className='cbody1'>
                                        *Free High-Quality Courses
                                        *Integrated YouTube Playlists
                                        *Thorough Course Notes
                                        *Replication of Paid Course Environment <br />
                                        *Curated Educational Content
                                        *Global Empowerment <br />
                                        *Innovative Learning Approach
                                        *Card-Based Learning Resources
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className='card1'>
                        <CardTitle className='title1'><strong>Enhancing Educational Experience:</strong>
                            </CardTitle>
                            <Card.Body className='cbody1'>
                                        *Personalized Learning Tracks
                                        *Real-Time Progress Tracking
                                        *Adaptive Content Delivery <br />
                                        *Peer Collaboration Spaces
                                        *Interactive Simulations <br />
                                        *Instant Feedback Mechanism
                                        *Multimedia Learning Resources
                            </Card.Body>
                            
                        </Card>
                    </div>
                    <div className="col">
                        <Card className='card1'>
                        <CardTitle className='title1'><strong>Optimizing Learning Dynamics:</strong>
                            </CardTitle>
                            <Card.Body className='cbody1'>
                                        *Customized Learning Journeys
                                        *Progress in Real Time <br />
                                        *Adaptive Content Delivery
                                        *Collaborative Learning Hubs
                                        *Immersive Simulations <br />
                                        *Instant Feedback Mechanism
                                        *Diverse Multimedia Resources
                                
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
            <br/><br/>

        </div>

    )
}

export default About