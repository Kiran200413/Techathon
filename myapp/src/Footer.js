import React from "react";
import "./external.css";

const Footer = () => {
  return (
    <div className="footer2">
      <div className="container2">
        <div className="about2">
          <h2>About</h2>
          Welcome to effortless learning! Dive into
          <strong>free education</strong> with dynamic
          <strong> YouTube courses</strong>, explore rich notes featuring
          <strong> valuable articles</strong>, and seamlessly code in our
          <strong>integrated environment</strong>. Say goodbye to installations
          unlock a new era of comprehensive and stress-free learning on our
          innovative platform!
        </div>
        <div className="contact2">
          <h2>Contact</h2>
          <p>
            <b>Address : </b> 9 Shadrack Avenue Elelenwo Port Harcourt. <br />
            <b>Email : </b>
            <a href="google.com">protons@gmail.com</a>
            <br />
            <b>Mobile/Whatsapp : </b>9087654321 <br />
            <b>Mobile/Whatsapp : </b>9087654321
          </p>
          <br />
        </div>
      </div>
      <hr />
      <div className="copyright2">
        <p>
          <a href="">
              <span>
              Copyright © 2024 School Software Pro | Powered by Meredox Limited
            </span>
          </a>
          <br />
          <a href="">
            <span>Privacy Policy |Terms of Service.</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;