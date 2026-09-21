import React from 'react';
import { Link } from '@reach/router';
import Footer from '../components/footer';

const projects = [
  {
    src: "/img/gallery/1.jpg",
    tag: "Structural",
    title: "Building Under Construction",
    desc: "A multi-storey building on-site in Rwanda, with scaffolding and structural framework in progress ahead of finishing works."
  },
  {
    src: "/img/gallery/2.jpg",
    tag: "Structural",
    title: "Structural Works in Progress",
    desc: "Reinforced concrete columns and slab work being completed to specification before the building envelope is closed in."
  },
  {
    src: "/img/gallery/3.jpg",
    tag: "Structural",
    title: "Scaffolding & Framework",
    desc: "Bamboo scaffolding and safety netting supporting upper-floor construction while work continues on the building below."
  },
  {
    src: "/img/gallery/4.jpg",
    tag: "Foundations",
    title: "Block Work & Foundations",
    desc: "Block walls and foundation work for a residential structure, with landscaping already taking shape around the site."
  },
  {
    src: "/img/gallery/5.jpg",
    tag: "Supervision",
    title: "On-Site Supervision",
    desc: "Our team on-site monitoring block work and structural progress to ensure quality and adherence to plans."
  },
  {
    src: "/img/gallery/6.jpg",
    tag: "Residential",
    title: "Apartment Building Project",
    desc: "An apartment building under construction, registered with the Republic of Rwanda under an official project permit."
  },
  {
    src: "/img/gallery/7.jpg",
    tag: "Residential",
    title: "Apartment Building — Site Progress",
    desc: "Continued progress on the same apartment development, with framework and access stairs in place for upper floors."
  }
];

const categories = [
  { icon: "fa-home", title: "Residential", text: "Homes, villas, apartments and residential complexes." },
  { icon: "fa-building", title: "Commercial", text: "Offices, shopping centers, warehouses and hotels." },
  { icon: "fa-paint-brush", title: "Renovation", text: "Extensions, finishing works and modernization." },
  { icon: "fa-cubes", title: "Structural", text: "Foundations, concrete structures and roofing works." }
];

export default () => (
<div>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/porto.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Projects</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/">Home</Link>
              <span className='dash'>/</span>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid black'>
        <div className='row m-10-hor'>

        <div className='col-md-5'>
            <div className='heading'>
              Building the<span className='br'></span> Future<span className='br'></span> Together
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              A look at REDECO's ongoing construction sites in Rwanda &mdash;
              from foundation to finishing, delivered with quality
              materials, skilled labor, and professional project
              management.
            </div>
          </div>

        </div>
  </section>

  <section className='container-fluid black_more p-0'>
    <div className='row no-gutters'>
      <div className='col-12'>
        <div className='photo-card photo-card-lg static'>
          <img src="./img/gallery/6.jpg" alt="Apartment building project under construction"/>
          <div className='photo-card-tag'>Featured Project &middot; Residential</div>
          <div className='photo-card-cap'>Apartment Building Construction &mdash; Rwanda</div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid black'>
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='subheading'>What We Build</div>
        <div className='heading'>Types of Projects We Handle</div>
      </div>
    </div>
    <div className='row m-10-hor mt-4'>
      {categories.map(cat => (
        <div className='col-md-3 col-6 mb-4' key={cat.title}>
          <div className='serve-card'>
            <i className={`fa ${cat.icon}`} aria-hidden="true"></i>
            <div className='serve-title'>{cat.title}</div>
            <div className='serve-text'>{cat.text}</div>
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='subheading'>Portfolio</div>
        <div className='heading'>More Projects</div>
      </div>
    </div>
    <div className='row m-10-hor mt-4'>
      {projects.map(p => (
        <div className='col-md-6 col-lg-4 mb-4' key={p.title}>
          <div className='photo-card static' style={{marginBottom: '14px'}}>
            <img src={p.src} alt={p.title}/>
            <div className='photo-card-tag'>{p.tag}</div>
            <div className='photo-card-cap'>{p.title}</div>
          </div>
          <p className='content' style={{fontSize: '.85rem'}}>{p.desc}</p>
        </div>
      ))}
    </div>
  </section>

  <section className='container-fluid black'>
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='heading'>Have a Project in Mind?</div>
        <div className='content mb-4'>Tell us what you're building and we'll help you plan it, permit it, and construct it.</div>
        <Link className='btn' to="/contact">
          <span className="shine"></span>
          <span>Start Your Project</span>
        </Link>
      </div>
    </div>
  </section>

  <Footer />
</div>

);
