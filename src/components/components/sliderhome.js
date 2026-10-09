import React from 'react';
import { navigate } from '@reach/router';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';

const content = [
  {
    title: "Designing the Future.",
    description:
      "Building with Excellence.",
    button: "Our Services",
    link: "/service",
    image: "./img/redeco/apartment-perspective-1.jpg"
  },
  {
    title: "Real Design & Construction",
    description:
      "Quality is our top priority.",
    button: "View Our Projects",
    link: "/works",
    image: "./img/redeco/villa-design.jpg"
  },
  {
    title: "From Concept to Completion",
    description:
      "Design, permits, construction, supervision, handled end to end.",
    button: "Get a Quote",
    link: "/contact",
    image: "./img/redeco/kigali-retreat.jpg"
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

export default () => (
  <Slider className="slider-wrapper" autoplay={6000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button onClick={()=> navigate(item.link)}>
                    <span className="shine"></span>
                    <span>
                      {item.button}
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </Slider>
);
