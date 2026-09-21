import React from 'react';
import { Link } from '@reach/router';
import Footer from '../components/footer';


export default () => (
<div className='wraperitem'>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>About us</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/">Home</Link>
              <span className='dash'>/</span>
              <span>About</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

        <div className='col-md-5'>
            <div className='heading'>
              Who<span className='br'></span> We<span className='br'></span> Are
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              REDECO is a professional Rwandan company specializing in
              architectural design, construction, project management,
              engineering consultancy, and building solutions &mdash;
              transforming ideas into reality through creativity, technical
              expertise, and professional execution.
            </div>
            <div className='content'>
              Founded with a vision to deliver modern, durable, and
              high-quality projects, REDECO provides complete construction
              solutions tailored to meet the needs of individuals,
              businesses, and institutions. From concept development and
              design to permit processing, construction, supervision, and
              project completion, we handle every stage of the process.
            </div>
            <div className='content'>
              At REDECO, we believe every project is more than just a
              structure &mdash; it is an investment, a vision, and a legacy.
            </div>
          </div>

        </div>
  </section>

  <section className='container-fluid p-0'>
        <div className='row'>

          <div className="col-md-6 px-0">
            <img src="./img/bg-1.jpg" className="imgslickz" alt="REDECO project site"/>
          </div>

          <div className="col-md-6 centered px-4 px-md-5 pt-5 pb-5">
            <div className="px-2 px-md-5 py-md-5">
              <div className="subheading">Our Mission</div>
              <div className="heading">
                Innovative, Reliable, High-Quality
              </div>
              <p className="mt-3">
                To provide innovative, reliable, and high-quality design and
                construction services that create lasting value for our
                clients and communities.
              </p>
            </div>
          </div>

          <div className="col-md-6 centered px-4 px-md-5 pt-5 pb-5">
            <div className="px-2 px-md-5 py-md-5">
              <div className="subheading">Our Vision</div>
              <div className="heading">
                A Leading Name in Rwanda
              </div>
              <p className="mt-3">
                To become one of the leading and most trusted construction
                companies in Rwanda and beyond through excellence, integrity,
                professionalism, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="col-md-6 px-0">
            <img src="./img/bg-2.jpg" className="imgslickz" alt="REDECO project site"/>
          </div>

        </div>
  </section>

  <section className='container-fluid black pb-0'>
    <div className='row m-10-hor'>

      <div className='col-md-5'>
        <div className='heading'>
          why <span className='br'></span>choose<span className='br'></span> REDECO?
        </div>
      </div>

      <div className='col-md-7'>
        <div className='content'>
          Clients trust REDECO because we combine creativity, technical
          expertise, professionalism, and practical experience. We are
          committed to delivering high-quality workmanship, completing
          projects on time, maintaining professionalism and integrity,
          and providing innovative construction solutions.
        </div>
        <div className='content'>
          At REDECO, we do not simply construct buildings &mdash; we build
          trust, value, and lasting relationships.
        </div>
      </div>

    </div>
  </section>

  <section className='container-fluid pt-0 black'>
      <div className='row m-10-hor'>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>01.</div>
          <div className='heading'>QUALITY & EXCELLENCE</div>
          <div className='content'>
            Delivering high-quality workmanship and maintaining
            professional standards in every project we undertake.
          </div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>02.</div>
          <div className='heading'>INTEGRITY & TRANSPARENCY</div>
          <div className='content'>
            Operating with honesty, openness, and accountability in all
            client relationships and project dealings.
          </div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>03.</div>
          <div className='heading'>INNOVATION & CREATIVITY</div>
          <div className='content'>
            Providing innovative construction solutions and creative
            design approaches that meet modern standards.
          </div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>04.</div>
          <div className='heading'>SAFETY & SUSTAINABILITY</div>
          <div className='content'>
            Prioritizing safety standards and sustainable practices
            throughout every stage of project execution.
          </div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>05.</div>
          <div className='heading'>RELIABILITY & ACCOUNTABILITY</div>
          <div className='content'>
            Completing projects on time with professional reliability and
            full accountability to our clients.
          </div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>06.</div>
          <div className='heading'>CUSTOMER SATISFACTION</div>
          <div className='content'>
            Building strong client relationships and ensuring
            satisfaction through trust and excellence in service delivery.
          </div>
        </div>
       </div>
      </div>
  </section>

  <section className='container-fluid black_more'>
      <div className='row m-10-hor'>
        <div className='col-12 text-center'>
          <div className='subheading'>Registered & Certified</div>
          <div className='heading'>Recognized in Rwanda's Construction Sector</div>
        </div>
        <div className='col-12'>
          <div className='row justify-content-center align-items-center mt-4 certifications-row'>
            <div className='col-4 col-md-2 text-center mb-4'>
              <img src="./img/certifications/rdb.png" className="img-fluid" alt="Rwanda Development Board" />
            </div>
            <div className='col-4 col-md-2 text-center mb-4'>
              <img src="./img/certifications/rsb.png" className="img-fluid" alt="Rwanda Standards Board" />
            </div>
            <div className='col-4 col-md-2 text-center mb-4'>
              <img src="./img/certifications/iqs.png" className="img-fluid" alt="Rwanda Institute of Quantity Surveyors" />
            </div>
          </div>
        </div>
      </div>
  </section>

  <section className='container-fluid black'>
    <div className='row m-10-hor align-items-center'>
      <div className='col-md-6'>
        <img src="./img/logo.png" className="img-fluid" style={{maxWidth: '220px'}} alt="REDECO Ltd"/>
      </div>
      <div className='col-md-6'>
        <div className='subheading'>Company Leadership</div>
        <div className='heading'>Wellars NDATIMANA</div>
        <div className='content mb-2 color' style={{fontStyle: 'italic'}}>Managing Director</div>
        <p className='content'>
          Through visionary leadership and commitment to excellence, the
          management of REDECO continues to strengthen the company's
          reputation in the construction and engineering sector.
        </p>
        <p className='content'>
          Quality is at the center of everything we do. REDECO is
          committed to delivering projects that meet professional
          standards through skilled workmanship, proper planning, quality
          materials, and effective project management. We believe that
          client satisfaction is achieved through trust, transparency, and
          excellence in service delivery.
        </p>
        <p className='content' style={{fontWeight: 600}}>
          "Quality is our top priority."
        </p>
      </div>
    </div>
  </section>

  <section className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='subheading'>Who We Work With</div>
        <div className='heading'>Built for Individuals, Businesses & Institutions</div>
      </div>
    </div>
    <div className='row m-10-hor mt-4'>
      <div className='col-md-4 mb-4'>
        <div className='serve-card'>
          <i className="fa fa-home" aria-hidden="true"></i>
          <div className='serve-title'>Individuals</div>
          <div className='serve-text'>Homeowners building, renovating or expanding a house, villa or family property.</div>
        </div>
      </div>
      <div className='col-md-4 mb-4'>
        <div className='serve-card'>
          <i className="fa fa-briefcase" aria-hidden="true"></i>
          <div className='serve-title'>Businesses</div>
          <div className='serve-text'>Companies developing offices, shopping centers, warehouses, hotels and commercial facilities.</div>
        </div>
      </div>
      <div className='col-md-4 mb-4'>
        <div className='serve-card'>
          <i className="fa fa-university" aria-hidden="true"></i>
          <div className='serve-title'>Institutions</div>
          <div className='serve-text'>Organizations seeking reliable, modern, and professional construction and design services.</div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid black'>
    <div className='row m-10-hor'>
      <div className='col-md-5'>
        <div className='heading'>
          What<span className='br'></span> We<span className='br'></span> Offer
        </div>
      </div>
      <div className='col-md-7'>
        <div className='content'>
          From first sketch to final handover, REDECO covers the full
          construction journey.
        </div>
        <div className='content'>
          <Link className='link d-block mb-2' to="/service">Architectural Design &amp; Planning</Link>
          <Link className='link d-block mb-2' to="/service">Building Construction</Link>
          <Link className='link d-block mb-2' to="/service">Supervision, Engineering &amp; Electrical</Link>
          <Link className='link d-block' to="/service">Permits &amp; Materials Supply</Link>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid black_more p-0'>
    <div className='row m-10-hor pt-5'>
      <div className='col-12 text-center'>
        <div className='subheading'>Where We Work</div>
        <div className='heading'>Based in Rubavu, Building Across Rwanda</div>
      </div>
    </div>
    <div className='row no-gutters mt-4'>
      <div className='col-12'>
        <iframe
          title="REDECO service area"
          src="https://maps.google.com/maps?q=Gisenyi%2C%20Rubavu%2C%20Rwanda&t=&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{border: 0}}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>

  <section className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='subheading'>Company Information</div>
        <div className='heading'>REAL DESIGN AND CONSTRUCTION (REDECO) Ltd</div>
      </div>
      <div className='col-md-8 mx-auto mt-4'>
        <table className='table table-borderless text-white'>
          <tbody>
            <tr>
              <td className='font-weight-bold'>Company Type</td>
              <td>Limited by Shares</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Registration Date</td>
              <td>10 April 2025</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Main Activity</td>
              <td>Construction of Buildings</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Company Code</td>
              <td>134097331</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Registered Office</td>
              <td>Gisenyi, Rubavu, Western Province, Rwanda</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Phone</td>
              <td>+250 786 889 420</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Email</td>
              <td>wellarsndati@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <div className='text-center mt-4'>
          <a className='btn' href='/REDECO-Company-Profile.pdf' target='_blank' rel='noopener noreferrer'>
            <span className="shine"></span>
            <span>Download Company Profile</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>

);
