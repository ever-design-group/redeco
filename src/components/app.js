import React from 'react';
import { Router, Location } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Loader from './menu/loader';
import Header from './menu/header';
import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import Service from './pages/service';
import Faq from './pages/faq';
import Contact from './pages/contact';

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => {
    const id = setTimeout(() => window.scrollTo(0, 0), 0);
    return () => clearTimeout(id);
  }, [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
        <Router location={location}>
          {children}
        </Router>
        </div>
      </div>
    )}
  </Location>
);

export default () => (
  <Loader>
  <div className="wraper">

    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/" />
        <About path="/about" />
        <Works path="/works" />
        <Service path="/service" />
        <Faq path="/faq" />
        <Contact path="/contact" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />

  </div>
  </Loader>
);
