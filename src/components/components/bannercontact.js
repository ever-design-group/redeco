import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <section className='container-fluid p-md-0'>
        <div className='row'>

          <div className='col-md-6'>
            <img src='./img/porto.jpg' alt='REDECO project site' className='w-100 border-radius'/>
          </div>
          <div className='col-md-6 centered'>
            <div>
              <div className="subheading mt-md-0 mt-5">
                You can trust us
              </div>
              <div className="heading">
                We Build Your Vision
              </div>
              <p>
                From concept and design to permits, construction, and
                supervision &mdash; REDECO handles every stage so you get a
                project delivered on time, on budget, and built to last.
              </p>
              <Link className='btn' to="/contact">
                <span className="shine"></span>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          
        </div>
    </section>
);
