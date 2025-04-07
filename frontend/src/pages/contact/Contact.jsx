
import React, { useState, useEffect } from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-form">
        <h2 className='heading'> Contact Me</h2>

        <form action="#">
          <div className='input-group'>
            <div className='input-box'>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className='input-box'>
              <input type="number" placeholder="Phone number" />
              <input type="text" placeholder="Subject" />
            </div>  
          </div>
          <div className='input-group-2'>
            <textarea name="" id="" placeholder='Your Message' cols='30' rows='10'></textarea>
            <input type="submit" value="Send Message" className="contact-form-btn"/>
          </div>
        </form>

      </div>
    </>
  )

}


export default Contact;