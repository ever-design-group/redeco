import React from 'react';
import { Link } from '@reach/router';
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
<div className='wraperitem'>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Services</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/">Home</Link>
              <span className='dash'>/</span>
              <span>Services</span>
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
              What<span className='br'></span> We<span className='br'></span> Do
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              REDECO provides complete construction solutions tailored to
              individuals, businesses, and institutions &mdash; from concept
              development and design to permit processing, construction,
              supervision, and project completion.
            </div>
          </div>

        </div>
  </section>

  <section className='container-fluid p-0'>
        <div className='row'>

          <div className="col-md-6 px-0">
            <img src="./img/service.jpg" className="imgslickz" alt="Architectural design"/>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div className="p-md-5">
              <div className="subheading">01</div>
              <div className="heading">
                Architectural Design & Planning
              </div>
              <p className="mt-3">
                Our design team works closely with clients to understand
                their vision and transform ideas into practical, attractive
                building concepts &mdash; combining functionality,
                aesthetics, comfort, and cost-efficiency.
              </p>
              <p>
                Residential, apartment, and commercial building designs;
                interior space and site layout planning; 3D visualization
                and presentation; renovation and remodeling designs.
              </p>
            </div>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div className="p-md-5">
              <div className="subheading">02</div>
              <div className="heading">
                Building Construction
              </div>
              <p className="mt-3">
                Construction is the foundation of our business. We deliver
                quality construction services with strong attention to
                durability, safety, timelines, and professional
                workmanship.
              </p>
              <p>
                <strong>Residential</strong> &mdash; homes, villas,
                apartments and residential complexes.<br/>
                <strong>Commercial</strong> &mdash; offices, shopping
                centers, warehouses, hotels and business premises.<br/>
                <strong>Renovation</strong> &mdash; extensions, finishing
                works and modernization.<br/>
                <strong>Structural Works</strong> &mdash; foundations,
                concrete structures, and roofing.
              </p>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <img src="./img/service1.jpg" className="imgslickz" alt="Building construction"/>
          </div>

          <div className="col-md-6 px-0">
            <img src="./img/service2.jpg" className="imgslickz" alt="Supervision and engineering"/>
          </div>
          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div className="p-md-5">
              <div className="subheading">03</div>
              <div className="heading">
                Supervision, Engineering & Electrical
              </div>
              <p className="mt-3">
                Proper supervision is essential for successful project
                delivery. We provide professional project management and
                supervision to ensure construction is completed to
                approved standards, budgets, and schedules.
              </p>
              <p>
                Engineering consultancy &mdash; budgeting, feasibility
                studies, and structural guidance. Electrical installation
                &mdash; wiring, lighting, power distribution and safety
                systems for residential, commercial and industrial
                projects.
              </p>
            </div>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div className="p-md-5">
              <div className="subheading">04</div>
              <div className="heading">
                Permits & Materials Supply
              </div>
              <p className="mt-3">
                Starting a construction project requires proper approvals.
                We assist clients throughout the permit application
                process &mdash; document preparation, submissions, and
                coordination with relevant authorities &mdash; to keep it
                simple and stress-free.
              </p>
              <p>
                We also supply quality construction materials and
                equipment: building materials, hardware, plumbing and
                electrical materials, and construction accessories.
              </p>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <img src="./img/service3.jpg" className="imgslickz" alt="Construction permits and materials supply"/>
          </div>

        </div>
  </section>

  <section className='container-fluid black pb-0'>
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='subheading'>How It Works</div>
        <div className='heading heading-split'>From Concept to <strong>Completion</strong></div>
      </div>
    </div>
  </section>

  <section className='container-fluid pt-0 black'>
      <div className='row m-10-hor'>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>01.</div>
          <div className='heading'>CONSULTATION</div>
          <div className='content'>Understanding the client's vision, needs, goals, and budget.</div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>02.</div>
          <div className='heading'>DESIGN & PLANNING</div>
          <div className='content'>Developing architectural concepts, technical plans, and strategies.</div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>03.</div>
          <div className='heading'>BUDGETING & GUIDANCE</div>
          <div className='content'>Cost estimates, technical recommendations, and planning support.</div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>04.</div>
          <div className='heading'>PERMIT PROCESSING</div>
          <div className='content'>Assisting clients in obtaining the necessary approvals and permits.</div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>05.</div>
          <div className='heading'>PROJECT EXECUTION</div>
          <div className='content'>Executing the project with professionalism, efficiency, and quality.</div>
        </div>
       </div>
       <div className='col-md-4 mt-5'>
        <div className='col-feature'>
          <div className='sub-color text-gradient'>06.</div>
          <div className='heading'>SUPERVISION & DELIVERY</div>
          <div className='content'>Quality assurance, monitoring, and final handover to the client.</div>
        </div>
       </div>
      </div>
  </section>

  <section className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='subheading'>Registered & Certified</div>
        <div className='heading'>Backed by Recognized Standards</div>
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
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='subheading'>Common Questions</div>
        <div className='heading'>Services FAQ</div>
      </div>
      <div className='col-12'>
        <div className='faq-list'>
          <FaqItem q="Do you offer free consultations?" a="Yes. The first step in our process is a consultation to understand your vision, needs, goals and budget before any commitment." />
          <FaqItem q="Can you handle both design and construction on the same project?" a="Yes, REDECO handles every stage — from architectural design through construction, supervision and completion — so you work with one team throughout." />
          <FaqItem q="Do you supply construction materials too?" a="Yes. We supply quality building materials, hardware, plumbing and electrical materials and construction accessories to support smooth project execution." />
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
