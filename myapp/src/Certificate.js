import React from 'react';
import { jsPDF } from 'jspdf';
import './certificate.css'; // Import your certificate CSS file if needed
import axios from 'axios'; // Import axios for making HTTP requests

class Certificate extends React.Component {
  state = {
    userDataObj: {} // Initialize userDataObj in the component state
  };

  generatePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF({
      orientation: 'landscape', // Set page orientation to landscape
      unit: 'pt', // Use points as the unit
      format: [600, 400] // Set custom page size [width, height] in points
    });

    const { userDataObj } = this.state;

    // Load the image from the assets folder
    const img = new Image();
    img.src = require('./Assets/img.png'); // Specify the path to your image file

    // When the image is loaded, add it to the PDF
    img.onload = function() {
      const imageWidth = doc.internal.pageSize.width - 20; // Calculate the width to fit the page
      const imageHeight = doc.internal.pageSize.height * 0.30; // Set the height to 30% of the page height

      // Add the image to the PDF document
      doc.addImage(img, 'PNG', 10, 10, imageWidth, imageHeight);

      let yPos = 150; // Starting position with a top margin of 150

      // Add text for certificate recipient using user data
      doc.setFontSize(10);
      doc.setTextColor('black');
      doc.text("This Certificate is Proudly Awarded To", doc.internal.pageSize.width / 2, yPos, { align: "center" });
      yPos += 30; // Increase y-coordinate
      doc.setFontSize(24);
      doc.setTextColor('green');
      doc.text("Mr. " + (userDataObj.name || "Recipient Name"), doc.internal.pageSize.width / 2, yPos, { align: "center" });
      yPos += 40; // Increase y-coordinate
      doc.setFontSize(16);
      doc.setTextColor('black');
      doc.text("(Department of " + (userDataObj.stream || "Information Technology") + ")", doc.internal.pageSize.width / 2, yPos, { align: "center" });
      yPos += 30; // Increase y-coordinate

      // Add text for course completion
      doc.setFontSize(12);
      doc.setTextColor('black');
      doc.text("In successful completion of course " + (userDataObj.course || "Frontend Development"), doc.internal.pageSize.width / 2, yPos, { align: "center" });
      yPos += 50; // Increase y-coordinate

      // Add text for score
      doc.setFontSize(20);
      doc.setTextColor('brown');
      doc.text((userDataObj.score || 'XX') + " % marks.", doc.internal.pageSize.width / 2, yPos, { align: "center" });
      yPos += 30; // Increase y-coordinate

      // Add a border around the entire page
      doc.setDrawColor(50, 50, 130);
      doc.setLineWidth(20);
      doc.rect(10, 10, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 20);

      // Save the PDF
      doc.save('certificate.pdf');
    };
  };

  componentDidMount() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    // Fetch user data from the database
    axios.get('http://localhost:5000/findall') // Adjust the URL as per your backend API endpoint
      .then(response => {
        
        const userDataObj = response.data.find(item => item.usermail === userData.usermail );
        sessionStorage.setItem('userData', JSON.stringify(userDataObj));
        
        this.setState({ userDataObj });
        
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }

  render() {
    const { userDataObj } = this.state;
    return (
      <>
        <div className="certificate-container">
          <div>
            <h4 className='company'><img src='https://cdn-icons-png.flaticon.com/128/4406/4406319.png' width={80} height={50}/>StudySphere</h4>
          </div>
          <h1 className="certificate-title">Certificate of Completion</h1><hr/>
          <p>This Certificate is Proudly Awarded To</p>
          <h2>Mr.{userDataObj.name}</h2>
          <p className='p1'>(Department of {userDataObj.stream})</p>
          <p>In successful completion of course <strong className='coursename'>Frontend Development</strong> secure<h1>{userDataObj.score}%</h1>marks.</p>
          <button className="download-button" onClick={this.generatePDF}>Download Certificate</button>
        </div>
      </>
    );
  }
}

export default Certificate;
