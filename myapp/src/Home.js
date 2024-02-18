import React from 'react'
import img1 from './Assets/img1.png'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './home.css'


import Carousel from 'react-bootstrap/Carousel';

const Home = () => {


  return (
    <>
    
      <section className='container-fluid first-page'>
        <div className='row '>
          <div className='col-md-6 first-box'><img src={img1} width="100%" height="100%" /></div>
          <div className='col first-box2'>
            <h3>"Empower your career journey with our platform, crafting guided paths through curated <span style={{color:"orange"}}>YouTube playlists, top-notch videos, and notes </span>sourced from premier platforms."</h3>
            <p>Welcome to our platform, where learning is seamless and stress-free. Enjoy free education with YouTube courses and delve into our notes section, incorporating articles and valuable information. Experience the convenience of an integrated coding environment, eliminating the need for application installations. Unlock the door to effortless and comprehensive learning on our innovative platform.</p>
            <Button variant="primary" href='/engineering' >Explore Us</Button>
          </div>
        </div>
      </section>
      {/* //second page */}

      <br/><br/><br/><h1 style={{textAlign:"center",color:"#fc7839"}}>What Makes Us Different</h1>
      <section className='container-fluid second-page'>
        <div className='row '>
          <div className='col second-box'>
            <img src='https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/image-09.png' width="100%" />
            <h5>All-In-One Learning Platform</h5>
            <p>Discover our comprehensive All-In-One Learning Platform. Access a wide range of resources including YouTube videos, study notes, and an inbuilt coding environment. With our platform, you can enhance your skills and knowledge conveniently in one place. Enjoy friendly support to assist you every step of the way. Start your learning journey today!</p>
          </div>
          <div className='col second-box'>
            <img src='https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/Vector077.png' width="100%" />
            <h5>Collaborative Learning Platform</h5>
            <p>Experience collaborative learning with top-tier educators from leading companies. Our platform fosters a supportive, family-like environment, enabling seamless communication through text, audio, and video. Join sessions, engage with peers, and access quality educational content anytime, anywhere.</p>
          </div>
          <div className='col second-box'>
            <img src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/Coding-Design.png" width="100%" />
            <h5>All-Inclusive Learning Ecosystem</h5>
            <p>Embark on your learning journey from start to finish with our comprehensive platform. We offer free courses curated from top-quality YouTube content and supplemented with detailed notes. Our platform provides a seamless environment where learners can access all resources in one place, enhancing their learning experience.</p>
          </div>
          <div className='col second-box'>
            <img src="https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/price.png" width="100%" />
            <h5>Accessible Education for All</h5>
            <p>Our platform is dedicated to democratizing education by providing free access to high-quality educational content. We believe that everyone should have the opportunity to learn without the barrier of financial investment. Join us as we strive to make education accessible to all, regardless of financial constraints.</p>
          </div>
        </div>
      </section>

     
      
       {/* Blogs */}
       <br/><br/><h1 style={{textAlign:"center",color:"#fc7839"}}>Top NewsLaters</h1>
      <section className='container-fluid fourth-page'>
       
        <div className='row'>
          <div className='col-sm-12 col-md-4 fourth-box '>
          <Carousel data-bs-theme="dark" className='courosel1'>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                  style={{ borderRadius: "30px"}}
                />
                <Carousel.Caption>
                  <h3><a href='https://www.ndtv.com/world-news/sam-altman-replies-to-creds-kunal-shah-creates-video-for-him-using-new-tool-5069903'>Sam Altman Replies To CRED's Kunal Shah, Creates Video For Him Using New Tool..</a></h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                  style={{ borderRadius: "30px" }}
                />
                <Carousel.Caption>
                <h3><a href='https://indianexpress.com/article/technology/mark-zuckerberg-layoffs-sam-altman-ai-jobs-9166253/'>Mark Zuckerberg explains tech layoffs, shares his views on Sam Altman’s $7 trillion AI chip venture..</a></h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>
          </div>


          <div className='col-sm-12 col-md-4 fourth-box'>
          <Carousel data-bs-theme="dark" className='courosel1'>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                  style={{ borderRadius: "30px"}}
                />
                <Carousel.Caption>
                <h3><a href='https://www.businesstoday.in/technology/news/story/indias-first-mobile-focused-browser-raises-6-million-in-seed-funding-417916-2024-02-17'>India’s first mobile-focused browser raises $6 million in seed funding..</a></h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                  style={{ borderRadius: "30px" }}
                />
                <Carousel.Caption>
                <h3><a href='https://www.businesstoday.in/technology/news/story/youtube-shorts-now-lets-you-chop-up-and-remix-music-videos-heres-how-it-works-417791-2024-02-16'>YouTube Shorts now lets you chop up and remix music videos; here’s how it works..</a></h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
             
            </Carousel>
          </div>


          <div className='col-sm-12 col-md-4 fourth-box'><Carousel data-bs-theme="dark" className='courosel1'>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                  style={{ borderRadius: "30px" }}
                />
                <Carousel.Caption>
                <h3><a href='https://techcrunch.com/2024/02/16/amazon-and-spacex-are-quietly-trying-to-demolish-national-labor-law/'>Amazon and SpaceX are quietly trying to demolish national labor law..</a></h3>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                  style={{ borderRadius: "30px" }}
                />
                <Carousel.Caption>
                <h3><a href=''>Video game startups could be a bright spot for VC in 2024..</a></h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
        </div>
      </section>

    </>
  )
}

export default Home

