import React from 'react';
import { Link } from '@reach/router';
import Slider from '../components/sliderhome';
import Bannercontact from '../components/bannercontact';
import Footer from '../components/footer';
import FaqItem from '../components/FaqItem';

function sendQuoteRequest(e) {
  e.preventDefault();
  const name = e.target.user_name.value;
  const email = e.target.user_email.value;
  const projectType = e.target.project_type.value;
  const message = e.target.message.value;
  const subject = `Quote request from ${name}`;
  const body = `Project type: ${projectType || 'N/A'}\n\n${message}\n\n---\nFrom: ${name} (${email})`;
  window.location.href = `mailto:wellarsndati@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default () => (
  <div>
      <section className="jumbotron jumbomain">
          <Slider />
          <div className="icon-scroll-wraper">
            <div className="icon-scroll">
              <div className="icon-scroll-screen"></div>
            </div>
          </div>
      </section>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

        <div className='col-md-5'>
            <div className='heading'>
              About<span className='br'></span> REDECO
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
              Registered in Rwanda on 10 April 2025 and based in Gisenyi,
              Rubavu, we handle every stage of a project: from concept and
              design to permits, construction, supervision, and completion.
            </div>
            <Link className='link mt-3 d-inline-block' to="/about">
              <span className="shine"></span>
              Read More
            </Link>
          </div>

        </div>
      </section>

      <section className='container-fluid p-0'>
        <div className='row'>

          <div className='col-md-6 col-lg-3 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="./img/bg-serv-1.jpg"
                    alt="Architectural design"
                  />
              </div>
              <div className='content'>
                <div className='icon-badge'><i className="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                <div className='heading'>
                  Architectural Design
                </div>
                <div className='con-text'>
                  Residential, apartment and commercial designs, interior
                  space and site layout planning, 3D visualization and
                  renovation design.
                </div>
                <Link className='link' to="/service">
                  <span className="shine"></span>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="./img/bg-serv-2.jpg"
                    alt="Building construction"
                  />
              </div>
              <div className='content'>
                <div className='icon-badge'><i className="fa fa-building-o" aria-hidden="true"></i></div>
                <div className='heading'>
                  Building Construction
                </div>
                <div className='con-text'>
                  Residential, commercial, renovation and structural works,
                  delivered with quality materials, skilled labor and
                  professional project management.
                </div>
                <Link className='link' to="/service">
                  <span className="shine"></span>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="./img/bg-serv-3.jpg"
                    alt="Supervision and engineering"
                  />
              </div>
              <div className='content'>
                <div className='icon-badge'><i className="fa fa-cogs" aria-hidden="true"></i></div>
                <div className='heading'>
                  Supervision & Engineering
                </div>
                <div className='con-text'>
                  Construction supervision, project management, engineering
                  consultancy and electrical installation services.
                </div>
                <Link className='link' to="/service">
                  <span className="shine"></span>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="./img/service3.jpg"
                    alt="Permits and materials supply"
                  />
              </div>
              <div className='content'>
                <div className='icon-badge'><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                <div className='heading'>
                  Permits & Materials
                </div>
                <div className='con-text'>
                  Construction permit assistance and supply of quality
                  building materials, hardware, plumbing and electrical
                  supplies.
                </div>
                <Link className='link' to="/service">
                  <span className="shine"></span>
                  Read More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='container-fluid black'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Why Choose Us</div>
            <div className='heading'>What Sets REDECO Apart</div>
          </div>
        </div>
        <div className='row m-10-hor mt-4'>
          <div className='col-md-3 col-6 mb-4'>
            <div className='serve-card'>
              <i className="fa fa-trophy" aria-hidden="true"></i>
              <div className='serve-title'>Quality Workmanship</div>
              <div className='serve-text'>Skilled labor, proper planning and quality materials on every project.</div>
            </div>
          </div>
          <div className='col-md-3 col-6 mb-4'>
            <div className='serve-card'>
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <div className='serve-title'>On-Time Delivery</div>
              <div className='serve-text'>Effective project management to keep schedules and budgets on track.</div>
            </div>
          </div>
          <div className='col-md-3 col-6 mb-4'>
            <div className='serve-card'>
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <div className='serve-title'>Registered & Trusted</div>
              <div className='serve-text'>A licensed Rwandan company recognized in the construction sector.</div>
            </div>
          </div>
          <div className='col-md-3 col-6 mb-4'>
            <div className='serve-card'>
              <i className="fa fa-users" aria-hidden="true"></i>
              <div className='serve-title'>One Team, Start to Finish</div>
              <div className='serve-text'>Design, permits, construction and supervision under one roof.</div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>How We Work</div>
            <div className='heading'>From Concept to Completion</div>
          </div>
        </div>
        <div className='row m-10-hor process-timeline'>
          <div className='process-step'>
            <div className='process-circle'>01</div>
            <div className='process-title'>Consultation</div>
            <div className='process-text'>Understanding your vision, needs, goals and budget.</div>
          </div>
          <div className='process-step'>
            <div className='process-circle'>02</div>
            <div className='process-title'>Design & Planning</div>
            <div className='process-text'>Architectural concepts, technical plans and strategy.</div>
          </div>
          <div className='process-step'>
            <div className='process-circle'>03</div>
            <div className='process-title'>Budgeting</div>
            <div className='process-text'>Cost estimates and technical recommendations.</div>
          </div>
          <div className='process-step'>
            <div className='process-circle'>04</div>
            <div className='process-title'>Permit Processing</div>
            <div className='process-text'>Assisting with approvals and required permits.</div>
          </div>
          <div className='process-step'>
            <div className='process-circle'>05</div>
            <div className='process-title'>Execution</div>
            <div className='process-text'>Building with professionalism and efficiency.</div>
          </div>
          <div className='process-step'>
            <div className='process-circle'>06</div>
            <div className='process-title'>Supervision</div>
            <div className='process-text'>Monitoring quality, timelines and safety.</div>
          </div>
          <div className='process-step'>
            <div className='process-circle'>07</div>
            <div className='process-title'>Delivery</div>
            <div className='process-text'>Final handover with your full satisfaction.</div>
          </div>
        </div>
      </section>

      <section className='container-fluid black'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Excellence</div>
            <div className='heading'>We Build Projects That Last</div>
          </div>
        </div>
      </section>

      <section className='container-fluid black p-0'>
        <div className='row no-gutters'>
          <div className='col-md-4 p-0'>
            <Link to="/works" className='photo-card'>
              <img src="./img/gallery/6.jpg" alt="Apartment building project"/>
              <div className='photo-card-tag'>Residential</div>
              <div className='photo-card-cap'>Apartment Building Project</div>
            </Link>
          </div>
          <div className='col-md-4 p-0'>
            <Link to="/works" className='photo-card'>
              <img src="./img/gallery/1.jpg" alt="Building under construction"/>
              <div className='photo-card-tag'>Structural</div>
              <div className='photo-card-cap'>Building Under Construction</div>
            </Link>
          </div>
          <div className='col-md-4 p-0'>
            <Link to="/works" className='photo-card'>
              <img src="./img/gallery/4.jpg" alt="Block work and foundations"/>
              <div className='photo-card-tag'>Foundations</div>
              <div className='photo-card-cap'>Block Work & Foundations</div>
            </Link>
          </div>
        </div>
        <div className='row m-10-hor'>
          <div className='col-12 text-center mt-5 mb-5'>
            <Link className='btn' to="/works">
              <span className="shine"></span>
              <span>View All Projects</span>
            </Link>
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
          <div className='col-md-3 text-center text-md-left mb-4 mb-md-0'>
            <img src="./img/logo.png" className="img-fluid" style={{maxWidth: '150px'}} alt="REDECO Ltd"/>
          </div>
          <div className='col-md-9'>
            <div className='subheading'>Leadership</div>
            <div className='heading'>Wellars NDATIMANA, Managing Director</div>
            <p className='content'>
              Through visionary leadership and commitment to excellence, the
              management of REDECO continues to strengthen the company's
              reputation in the construction and engineering sector.
            </p>
            <Link className='link' to="/about">
              <span className="shine"></span>
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

    <Bannercontact/>

      <section className='container-fluid black'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Where We Build</div>
            <div className='heading'>Serving Clients Across Rwanda</div>
          </div>
        </div>
        <div className='row m-10-hor mt-4'>
          <div className='col-6 col-lg text-center mb-4'>
            <div className='serve-card'>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <div className='serve-title'>Kigali City</div>
            </div>
          </div>
          <div className='col-6 col-lg text-center mb-4'>
            <div className='serve-card'>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <div className='serve-title'>Western Province</div>
            </div>
          </div>
          <div className='col-6 col-lg text-center mb-4'>
            <div className='serve-card'>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <div className='serve-title'>Northern Province</div>
            </div>
          </div>
          <div className='col-6 col-lg text-center mb-4'>
            <div className='serve-card'>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <div className='serve-title'>Southern Province</div>
            </div>
          </div>
          <div className='col-6 col-lg text-center mb-4'>
            <div className='serve-card'>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <div className='serve-title'>Eastern Province</div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Common Questions</div>
            <div className='heading'>Frequently Asked Questions</div>
          </div>
          <div className='col-12'>
            <div className='faq-list'>
              <FaqItem q="Is REDECO a registered company?" a="Yes. REAL DESIGN AND CONSTRUCTION (REDECO) Ltd is a company limited by shares, registered in Rwanda on 10 April 2025." />
              <FaqItem q="What services does REDECO offer?" a="Architectural design, building construction, supervision and engineering consultancy, electrical installation, permit assistance, and materials supply." />
              <FaqItem q="How do I get a quote?" a="Send us a message below, through the Contact page, or email wellarsndati@gmail.com and we'll follow up with you directly." />
            </div>
            <div className='text-center mt-4'>
              <Link className='link' to="/faq">
                <span className="shine"></span>
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Get Started</div>
            <div className='heading'>Request a Free Quote</div>
            <div className='content mb-4'>Tell us about your project and we'll get back to you with expert advice.</div>
          </div>
          <div className='col-12'>
            <form className='mini-quote-form' onSubmit={sendQuoteRequest}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <input type="text" name="project_type" placeholder="Project Type (e.g. Residential, Renovation)" />
              <textarea name="message" placeholder="Tell us about your project" required></textarea>
              <div className='text-center'>
                <button type="submit" className='btn'>
                  <span className="shine"></span>
                  <span>Send Request</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    <Footer />

  </div>
);
