// Footer.js
import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section address">
          <h4>Address:</h4>
          <p>
            Hashu Advani Memorial Complex,<br />
            Collector's Colony,<br />
            Chembur, Mumbai, Maharashtra<br />
            400074
          </p>
        </div>
        
        
        
        <div className="footer-section related-links">
  <h4>Related Links</h4>
  <ul>
    <li><a href="https://dtemaharashtra.gov.in" target="_blank" rel="noopener noreferrer">DTE Maharashtra</a></li>
    <li><a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer">AICTE Students and Faculty Feedback</a></li>
    <li><a href="/mandatory-disclosure" target="_blank" rel="noopener noreferrer">Mandatory Disclosure</a></li>
    <li><a href="/directory" target="_blank" rel="noopener noreferrer">Directory</a></li>
    <li><a href="https://mum.ac.in" target="_blank" rel="noopener noreferrer">Mumbai University</a></li>
    <li><a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer">Government Initiatives</a></li>
    <li><a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer">AICTE</a></li>
  </ul>
</div>

<div className="footer-section social-links">
  <h4>Social Links</h4>
  <ul>
    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
  </ul>
</div>

      </div>
      
      <div className="footer-bottom">
        <p>Developed and Maintained by <span>Website Team (Faculty & Students)</span></p>
        <p>©2021 Vivekanand Education Society. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
