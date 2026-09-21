import React from 'react';
import { Link } from '@reach/router';
import Footer from '../components/footer';
import FaqItem from '../components/FaqItem';

const categories = [
  {
    name: 'General',
    items: [
      {
        q: 'Is REDECO a registered company?',
        a: 'Yes. REAL DESIGN AND CONSTRUCTION (REDECO) Ltd is a company limited by shares, registered in Rwanda on 10 April 2025 (Company Code 134097331), with its main activity being the construction of buildings.'
      },
      {
        q: 'Where is REDECO based, and where do you work?',
        a: 'Our registered office is in Gisenyi, Rubavu, Western Province, Rwanda. We take on residential, commercial and institutional projects across Rwanda.'
      },
      {
        q: 'Who leads the company?',
        a: 'REDECO is led by Managing Director Wellars NDATIMANA, who oversees design, construction and client relationships across all projects.'
      }
    ]
  },
  {
    name: 'Services',
    items: [
      {
        q: 'What services does REDECO offer?',
        a: 'Architectural design and planning, building construction (residential, commercial, renovation and structural works), construction supervision and engineering consultancy, electrical installation, construction permit assistance, and supply of construction materials.'
      },
      {
        q: 'Do you handle both design and construction?',
        a: 'Yes. We handle every stage of a project — from concept development and design, through permit processing, construction and supervision, to project completion.'
      },
      {
        q: 'Can you help with renovations, not just new builds?',
        a: 'Yes, we handle renovations, extensions, finishing works and modernization projects in addition to new construction.'
      }
    ]
  },
  {
    name: 'Process & Permits',
    items: [
      {
        q: 'Can REDECO help me get a construction permit?',
        a: 'Yes. We assist clients throughout the permit application process — document preparation, submissions, and coordination with the relevant authorities — to keep it simple and stress-free.'
      },
      {
        q: 'What does your working process look like?',
        a: 'We follow seven steps: consultation, design & planning, budgeting & technical guidance, permit processing assistance, project execution, supervision & quality assurance, and final project completion & delivery.'
      },
      {
        q: 'Do you supervise the construction yourselves?',
        a: 'Yes. We provide professional project management and supervision — site inspection, quality control, scheduling, workforce management and safety compliance — throughout every project.'
      }
    ]
  },
  {
    name: 'Quotes & Getting Started',
    items: [
      {
        q: 'How do I get a quote?',
        a: 'Send us a message through the Contact page with a short description of your project, or email wellarsndati@gmail.com / call +250 786 889 420. We’ll follow up to discuss your needs and next steps.'
      },
      {
        q: 'Do you supply construction materials as well?',
        a: 'Yes. To support smooth project execution, REDECO also supplies quality building materials, hardware, plumbing and electrical materials, and construction accessories.'
      },
      {
        q: 'Who do you work with?',
        a: 'REDECO partners with individuals, businesses, and institutions seeking reliable, modern, and professional construction and design services.'
      }
    ]
  }
];

export default () => (
<div>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>FAQ</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/">Home</Link>
              <span className='dash'>/</span>
              <span>FAQ</span>
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
              Frequently<span className='br'></span> Asked<span className='br'></span> Questions
            </div>
          </div>
          <div className='col-md-7'>
            <div className='content'>
              Answers to the questions we hear most from clients about
              REDECO, our services, and how we work. Can't find what you're
              looking for? Reach out and we'll be glad to help.
            </div>
          </div>
        </div>
  </section>

  {categories.map((cat, i) => (
    <section className={'container-fluid ' + (i % 2 === 0 ? 'black' : 'black_more')} key={cat.name}>
      <div className='row m-10-hor'>
        <div className='col-12'>
          <div className='subheading'>{cat.name}</div>
        </div>
        <div className='col-12'>
          <div className='faq-list'>
            {cat.items.map(item => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  ))}

  <section className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='heading'>Still Have Questions?</div>
        <div className='content mb-4'>Get in touch and we'll answer directly.</div>
        <Link className='btn' to="/contact">
          <span className="shine"></span>
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  </section>

  <Footer />
</div>
);
