import React, { useState, useEffect, useRef, useCallback } from 'react';
import { navigate } from '@reach/router';

const content = [
  {
    title: "Designing the Future.",
    description:
      "Building with Excellence.",
    button: "Our Services",
    link: "/service",
    image: "/img/redeco/apartment-perspective-1.jpg"
  },
  {
    title: "Real Design & Construction",
    description:
      "Quality is our top priority.",
    button: "View Our Projects",
    link: "/works",
    image: "/img/redeco/villa-design.jpg"
  },
  {
    title: "From Concept to Completion",
    description:
      "Design, permits, construction, supervision, handled end to end.",
    button: "Get a Quote",
    link: "/contact",
    image: "/img/redeco/kigali-retreat.jpg"
  },
  {
    title: "Gisozi Residence",
    description:
      "Modern villa design with pool, Gisozi, Kigali.",
    button: "View Project",
    link: "/projects/gisozi",
    image: "/img/projects/gisozi/1.jpg"
  },
  {
    title: "Kicukiro Hillside Villa",
    description:
      "Infinity pool terrace above a two-car garage.",
    button: "View Project",
    link: "/projects/kicukiro",
    image: "/img/projects/kicukiro/2.jpg"
  }
];

const AUTOPLAY_MS = 6000;
const SWIPE_MIN_PX = 40;

// Home hero slider. Swipe left/right (or use the arrows/dots) to change slide;
// vertical swipes are left to the browser so the page always scrolls normally.
export default () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touch = useRef(null);
  const count = content.length;

  const go = useCallback(step => setIndex(i => (i + step + count) % count), [count]);

  useEffect(() => {
    if (paused) return undefined;
    const id = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, go]);

  const onTouchStart = e => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
    setPaused(true);
  };
  const onTouchEnd = e => {
    const start = touch.current;
    touch.current = null;
    setPaused(false);
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > SWIPE_MIN_PX && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  };

  return (
    <div
      className='hero-slider'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription='carousel'
    >
      {content.map((item, i) => (
        <div
          key={item.title}
          className={`hero-slide slider-content${i === index ? ' active' : ''}`}
          style={{ backgroundImage: `url('${item.image}')` }}
          aria-hidden={i !== index}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button onClick={() => navigate(item.link)} tabIndex={i === index ? 0 : -1}>
              <span className="shine"></span>
              <span>
                {item.button}
              </span>
            </button>
          </div>
        </div>
      ))}

      <button className='hero-arrow prev' onClick={() => go(-1)} aria-label='Previous slide'>
        <i className='fa fa-angle-left' aria-hidden='true'></i>
      </button>
      <button className='hero-arrow next' onClick={() => go(1)} aria-label='Next slide'>
        <i className='fa fa-angle-right' aria-hidden='true'></i>
      </button>

      <div className='hero-dots'>
        {content.map((item, i) => (
          <button
            key={item.title}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}: ${item.title}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
