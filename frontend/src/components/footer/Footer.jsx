import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="copyright-container">
          <p>
            © {new Date().getFullYear()} Andy Wei. All rights reserved.
          </p>
        </div>
        <div className="contact-container">
          <ul>
            Contact Me
            <li>Mobile: +61 0487574295</li>
            <li>Email: wei19970101@gmail.com</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;