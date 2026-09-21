import React, { useState } from 'react';

export default function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={'faq-item' + (open ? ' open' : '')} onClick={() => setOpen(!open)}>
      <div className='faq-q'>
        <span>{q}</span>
        <i className={`fa ${open ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true"></i>
      </div>
      {open && <div className='faq-a'>{a}</div>}
    </div>
  );
}
