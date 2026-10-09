import React from 'react';

// Floating WhatsApp chat button, shown on every page.
const PHONE = '250786889420'; // +250 786 889 420, the number listed on the site
const MESSAGE = 'Hello REDECO, I would like to ask about a project.';

export default () => (
  <a
    className='whatsapp-float'
    href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
    target='_blank'
    rel='noopener noreferrer'
    aria-label='Chat with REDECO on WhatsApp'
  >
    <i className='fa fa-whatsapp' aria-hidden='true'></i>
    <span className='whatsapp-float-label'>Chat with us</span>
  </a>
);
