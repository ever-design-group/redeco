import React from 'react';
import { Link } from '@reach/router';
import Footer from '../components/footer';
import Seo from '../components/seo';
import designProjects, { cardOf } from '../data/projects';

const projects = [
  {
    src: "/img/gallery/6.jpg",
    tag: "Residential",
    title: "Apartment Building Project",
    desc: "An apartment building under construction, registered with the Republic of Rwanda under an official project permit."
  },
  {
    src: "/img/redeco/apartment-perspective-3.jpg",
    tag: "Design",
    title: "Apartment Building Perspective",
    desc: "3D perspective of a multi-storey apartment building, showing the facade, balconies and landscaped frontage."
  },
  {
    src: "/img/bg-serv-2.jpg",
    tag: "Design",
    title: "Modern Family House",
    desc: "A contemporary two-storey house design with a gated compound, parking and outdoor living space."
  },
  {
    src: "/img/redeco/interior-living-room.jpg",
    tag: "Interior",
    title: "Living Room Interior",
    desc: "A bright living room with a feature TV wall, soft lighting and a comfortable, modern finish."
  },
  {
    src: "/img/redeco/interior-bathroom.jpg",
    tag: "Interior",
    title: "Bathroom Interior",
    desc: "A clean, modern bathroom with a glass shower enclosure, wall-hung fittings and grey tile finishes."
  },
  {
    src: "/img/team.jpg",
    tag: "Design",
    title: "Two-Storey House Design",
    desc: "A modern two-storey house with a white facade, dark accents and a secure boundary wall."
  },
  {
    src: "/img/testimony.jpg",
    tag: "Design",
    title: "Gated Family Home",
    desc: "Street view of a contemporary family home with a gated compound and parking."
  },
  {
    src: "/img/bg-serv-3.jpg",
    tag: "Design",
    title: "Contemporary House Facade",
    desc: "A bold white facade with a dark framed balcony and full-height glazing."
  },
  {
    src: "/img/redeco/interior-open-plan.jpg",
    tag: "Interior",
    title: "Open-Plan Living Interior",
    desc: "An open-plan living, dining and kitchen space with large windows and warm pendant lighting."
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
  <Seo title="Projects" path="/works" description="Explore REDECO's villa and residential design projects in Kigali, plus construction sites and interiors across Rwanda."/>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'/img/projects/gacuriro/1.jpg'})`}}>
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
              A look at REDECO's work in Rwanda: construction sites,
              architectural designs and interiors, delivered with quality
              materials, skilled labor, and professional project
              management.
            </div>
          </div>

        </div>
  </section>

  <section className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12 text-center'>
        <div className='subheading'>Featured Projects</div>
        <div className='heading'>Our Design Projects in Kigali</div>
      </div>
    </div>
    <div className='row m-10-hor mt-4'>
      <div className='featured-projects'>
        {designProjects.map(p => (
          <Link to={`/projects/${p.slug}`} className='fp-card' key={p.slug}>
            <img loading="lazy" decoding="async" src={cardOf(p)} alt={p.name}/>
            <div className='fp-body'>
              <div className='fp-tag'>{p.type}</div>
              <div className='fp-name'>{p.name}</div>
              <div className='fp-meta'>
                <span><i className='fa fa-map-marker' aria-hidden='true'></i>{p.location}</span>
                <span><i className='fa fa-picture-o' aria-hidden='true'></i>{p.images.length} photos</span>
              </div>
              <div className='fp-more'>View Project<i className='fa fa-long-arrow-right' aria-hidden='true'></i></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>

  <section className='container-fluid black_more p-0'>
    <div className='row no-gutters'>
      <div className='col-12'>
        <div className='photo-card photo-card-lg static'>
          <img loading="lazy" decoding="async" src="./img/gallery/1.jpg" alt="Multi-storey building under construction"/>
          <div className='photo-card-tag'>Featured Project &middot; Construction</div>
          <div className='photo-card-cap'>Multi-Storey Building Construction, Rwanda</div>
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
    <div className='row m-10-hor mt-4 justify-content-start'>
      {projects.map(p => (
        <div className='col-md-6 col-lg-4 mb-4' key={p.title}>
          <div className='photo-card static' style={{marginBottom: '14px'}}>
            <img loading="lazy" decoding="async" src={p.src} alt={p.title}/>
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
