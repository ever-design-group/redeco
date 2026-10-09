import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';
import Footer from '../components/footer';
import Seo from '../components/seo';
import projects, { coverOf } from '../data/projects';

const Lightbox = ({ images, index, onClose, onMove }) => {
  const onKey = useCallback(e => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onMove(1);
    if (e.key === 'ArrowLeft') onMove(-1);
  }, [onClose, onMove]);

  useEffect(() => {
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onKey]);

  const image = images[index];
  return ReactDOM.createPortal(
    <div className='lightbox' onClick={onClose} role='dialog' aria-label='Project photo viewer'>
      <button className='lightbox-close' onClick={onClose} aria-label='Close'>&times;</button>
      {images.length > 1 &&
        <button className='lightbox-nav prev' onClick={e => { e.stopPropagation(); onMove(-1); }} aria-label='Previous photo'>
          <i className='fa fa-angle-left' aria-hidden='true'></i>
        </button>}
      <figure className='lightbox-figure' onClick={e => e.stopPropagation()}>
        <img loading="lazy" decoding="async" src={image.src} alt={image.caption}/>
        <figcaption>
          <span>{image.caption}</span>
          <span className='lightbox-count'>{index + 1} / {images.length}</span>
        </figcaption>
      </figure>
      {images.length > 1 &&
        <button className='lightbox-nav next' onClick={e => { e.stopPropagation(); onMove(1); }} aria-label='Next photo'>
          <i className='fa fa-angle-right' aria-hidden='true'></i>
        </button>}
    </div>,
    document.body
  );
};

export default ({ slug }) => {
  const [open, setOpen] = useState(null);
  const pos = projects.findIndex(p => p.slug === slug);
  const project = projects[pos];

  const move = useCallback(step => {
    if (!project) return;
    const n = project.images.length;
    setOpen(i => (i + step + n) % n);
  }, [project]);
  const close = useCallback(() => setOpen(null), []);

  if (!project) {
    return (
      <div>
        <section className='jumbotron breadcumb' style={{backgroundImage: `url('/img/projects/gacuriro/1.jpg')`}}>
          <div className='mainbreadcumb'>
            <div className='container-fluid'>
              <div className='row m-10-hor'>
                <div className='col-md-6'><h1>Project Not Found</h1></div>
              </div>
            </div>
          </div>
        </section>
        <section className='container-fluid black text-center'>
          <Link className='btn' to='/works'><span className='shine'></span><span>Back to Projects</span></Link>
        </section>
        <Footer />
      </div>
    );
  }

  const coverIndex = project.cover - 1;
  const gallery = project.images.map((img, i) => ({ ...img, i })).filter(img => img.i !== coverIndex);
  const prev = projects[(pos - 1 + projects.length) % projects.length];
  const next = projects[(pos + 1) % projects.length];
  const facts = [
    { icon: 'fa-map-marker', label: 'Location', value: project.location },
    { icon: 'fa-home', label: 'Project Type', value: project.type },
    { icon: 'fa-pencil-square-o', label: 'Services', value: project.services },
    { icon: 'fa-check-circle', label: 'Status', value: project.status }
  ];

  return (
    <div>
      <Seo title={`${project.name}, ${project.location}`} path={`/projects/${project.slug}`} description={project.summary} image={coverOf(project)}/>
      <section className='project-hero' style={{backgroundImage: `url('${coverOf(project)}')`}}>
        <div className='project-hero-inner m-10-hor'>
          <div className='project-crumbs'>
            <Link to='/'>Home</Link><span>/</span>
            <Link to='/works'>Projects</Link><span>/</span>
            <span className='current'>{project.name}</span>
          </div>
          <div className='project-eyebrow'>{project.type} &middot; {project.location}</div>
          <h1>{project.name}</h1>
          <p className='project-summary'>{project.summary}</p>
          <div className='project-actions'>
            <button className='btn' onClick={() => setOpen(coverIndex)}>
              <span className='shine'></span>
              <span><i className='fa fa-picture-o' aria-hidden='true'></i> View {project.images.length} Photos</span>
            </button>
            <Link className='btn btn-ghost' to='/contact'>
              <span className='shine'></span>
              <span>Start a Similar Project</span>
            </Link>
          </div>
        </div>
      </section>

      <section className='container-fluid black_more project-facts-wrap'>
        <div className='row m-10-hor'>
          {facts.map(f => (
            <div className='col-6 col-lg-3' key={f.label}>
              <div className='project-fact'>
                <i className={`fa ${f.icon}`} aria-hidden='true'></i>
                <div>
                  <div className='project-fact-label'>{f.label}</div>
                  <div className='project-fact-value'>{f.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='container-fluid black'>
        <div className='row m-10-hor'>
          <div className='col-md-5'>
            <div className='subheading'>Project Overview</div>
            <div className='heading'>About This Project</div>
          </div>
          <div className='col-md-7'>
            {project.description.map((p, i) => <p className='content' key={i}>{p}</p>)}
            <ul className='project-features'>
              {project.features.map(f => (
                <li key={f}><i className='fa fa-check' aria-hidden='true'></i>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Gallery</div>
            <div className='heading'>Project Photos</div>
          </div>
        </div>
        <div className='row m-10-hor mt-4 justify-content-start'>
          {gallery.map((img, k) => (
            <div className={gallery.length === 1 || (gallery.length === 3 && k === 0) ? 'col-12 mb-4' : 'col-md-6 mb-4'} key={img.src}>
              <button className='project-shot' onClick={() => setOpen(img.i)} aria-label={`Open photo: ${img.caption}`}>
                <img loading="lazy" decoding="async" src={img.src} alt={img.caption}/>
                <span className='project-shot-cap'>{img.caption}</span>
                <span className='project-shot-zoom'><i className='fa fa-expand' aria-hidden='true'></i></span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className='container-fluid black p-0'>
        <div className='row no-gutters'>
          <div className='col-md-6'>
            <Link to={`/projects/${prev.slug}`} className='project-pager' style={{backgroundImage: `url('${coverOf(prev)}')`}}>
              <span className='project-pager-dir'><i className='fa fa-long-arrow-left' aria-hidden='true'></i> Previous Project</span>
              <span className='project-pager-name'>{prev.name}</span>
            </Link>
          </div>
          <div className='col-md-6'>
            <Link to={`/projects/${next.slug}`} className='project-pager right' style={{backgroundImage: `url('${coverOf(next)}')`}}>
              <span className='project-pager-dir'>Next Project <i className='fa fa-long-arrow-right' aria-hidden='true'></i></span>
              <span className='project-pager-name'>{next.name}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className='container-fluid black'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='heading'>Have a Similar Project in Mind?</div>
            <p className='content mt-3'>Tell us about your plot and your ideas, and we'll help you design, permit and build it.</p>
            <Link className='btn mt-3' to='/contact'>
              <span className='shine'></span>
              <span>Request a Free Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {open !== null && <Lightbox images={project.images} index={open} onClose={close} onMove={move}/>}

      <Footer />
    </div>
  );
};
