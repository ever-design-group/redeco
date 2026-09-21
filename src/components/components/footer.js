import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <footer className='container-fluid black_more'>
  <div className='bg-footer'>
    <img src='./img/footer-img.jpg' alt='bg-footer'/>
  </div>
    <div className='row m-10-hor'>
      <div className='col-lg-3 col-md-6'>
        <div className='footer-col'>
          <div className='heading'>
            <h2 className='font-weight-bold '>REDECO Ltd</h2>
          </div>
          <div className='content'>
             <p>Real Design and Construction (REDECO) Ltd &mdash; architectural
             design, construction, project management and engineering
             consultancy in Rwanda.</p>
          </div>
          <div className='link-call' onClick={()=> window.open("mailto:wellarsndati@gmail.com", "_self")}>Email at. wellarsndati@gmail.com</div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6'>
        <div className='footer-col'>
          <div className='heading'>
            Quick Links
          </div>
          <div className='content'>
             <Link className='link d-block' to="/about">About Us</Link>
             <Link className='link d-block' to="/works">Projects</Link>
             <Link className='link d-block' to="/faq">FAQ</Link>
             <Link className='link d-block' to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6'>
        <div className='footer-col'>
          <div className='heading'>
            Services
          </div>
          <div className='content'>
            <Link className='link d-block' to="/service">Architectural Design</Link>
            <Link className='link d-block' to="/service">Building Construction</Link>
            <Link className='link d-block' to="/service">Supervision & Engineering</Link>
            <Link className='link d-block' to="/service">Permits & Materials Supply</Link>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6'>
        <div className='footer-col'>
          <div className='heading'>
            Get In Touch
          </div>
          <div className='content'>
            <p>Gisenyi, Rubavu, Western Province, Rwanda</p>
            <p>+250 786 889 420</p>
            <p>"Quality is our top priority."</p>
          </div>
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-10-hor'>
        <div className='col-md-6'>
          <div className='content'>&copy; 2026 <span className='font-weight-bold'>REDECO Ltd</span> All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
);
