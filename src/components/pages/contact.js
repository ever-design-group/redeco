import React from 'react';
import { Link } from '@reach/router';
import Footer from '../components/footer';
import FaqItem from '../components/FaqItem';


export default function() {

  function sendEmail(e) {
    e.preventDefault();

    const success = document.getElementById("success");
    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    const subject = `Website inquiry from ${name}`;
    const body = `${message}\n\n---\nFrom: ${name} (${email})`;
    window.location.href = `mailto:wellarsndati@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    success.classList.add('show');
  }

  return (
    <div>
    <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/contact.jpg'})`}}>
        <div className='mainbreadcumb'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-6'>
                <h1>Contact</h1>
              </div>
              <div className='col-md-6'>
                <div className='list'>
                  <Link className='link' to="/">Home</Link>
                  <span className='dash'>/</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
           <div className="text-side">
             <h2>Get in Touch</h2>
              <p>Ready to partner with us on your next residential, commercial,
              or renovation project? Reach out and our team will get back to
              you with expert advice and a quote.</p>

              <div className='address'>
                <div className='heading'>Our Office</div>
                <div className='list'>
                  <i className="fa fa-map-marker"></i>
                  Gisenyi, Rubavu, Western Province, Rwanda
                </div>
                <div className='list'>
                  <i className="fa fa-envelope-o"></i>
                  <a href='mailto:wellarsndati@gmail.com' target='_blank' rel='noopener noreferrer'>
                    wellarsndati@gmail.com
                  </a>
                </div>
                <div className='list'>
                  <i className="fa fa-phone"></i>
                  +250 786 889 420
                </div>
              </div>
           </div>
          </div>
          <div className='col-md-6'>
            <div className="form-side">
              <form className="formcontact" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" required />
                <div id='success' className='hide'>Opening your email app to send this message&hellip;</div>
                <button type="submit" id='buttonsent'>
                  <span className="shine"></span>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='row m-10-hor mt-5'>
          <div className='col-12'>
            <iframe
              title="REDECO office location"
              src="https://maps.google.com/maps?q=Gisenyi%2C%20Rubavu%2C%20Rwanda&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{border: 0}}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className='container-fluid black'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>How It Works</div>
            <div className='heading'>What Happens Next</div>
          </div>
        </div>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <div className='mini-steps'>
              <div className='mini-step'>
                <div className='mini-step-num'>1</div>
                <div className='mini-step-title'>Send Your Message</div>
                <div className='mini-step-text'>Tell us about your project using the form above, email, or phone.</div>
              </div>
              <div className='mini-step'>
                <div className='mini-step-num'>2</div>
                <div className='mini-step-title'>We Follow Up</div>
                <div className='mini-step-text'>Our team reviews your request and reaches out to discuss details.</div>
              </div>
              <div className='mini-step'>
                <div className='mini-step-num'>3</div>
                <div className='mini-step-title'>Consultation</div>
                <div className='mini-step-text'>We discuss your vision, needs, goals and budget together.</div>
              </div>
              <div className='mini-step'>
                <div className='mini-step-num'>4</div>
                <div className='mini-step-title'>Quote & Planning</div>
                <div className='mini-step-text'>You receive expert advice and next steps to get started.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Why Reach Out</div>
            <div className='heading'>Talk to REDECO</div>
          </div>
        </div>
        <div className='row m-10-hor mt-4'>
          <div className='col-md-4 mb-4'>
            <div className='serve-card'>
              <i className="fa fa-comments-o" aria-hidden="true"></i>
              <div className='serve-title'>Expert Advice</div>
              <div className='serve-text'>Get practical guidance from a team that handles design, permits and construction.</div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='serve-card'>
              <i className="fa fa-handshake-o" aria-hidden="true"></i>
              <div className='serve-title'>No-Pressure Consultation</div>
              <div className='serve-text'>We start by understanding your vision, needs, goals and budget.</div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='serve-card'>
              <i className="fa fa-shield" aria-hidden="true"></i>
              <div className='serve-title'>Registered & Trusted</div>
              <div className='serve-text'>A licensed Rwandan company, registered and recognized in the sector.</div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid black'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Before You Reach Out</div>
            <div className='heading'>Quick Answers</div>
          </div>
          <div className='col-12'>
            <div className='faq-list'>
              <FaqItem q="What's the fastest way to reach you?" a="Phone or WhatsApp at +250 786 889 420 is fastest; email works well for detailed project descriptions and files." />
              <FaqItem q="Do you serve areas outside Rubavu?" a="Yes, while our office is in Gisenyi, Rubavu, we take on residential, commercial and institutional projects across Rwanda." />
              <FaqItem q="Is the initial consultation free?" a="Yes. The first step in our process is understanding your vision, needs, goals and budget before any commitment." />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
