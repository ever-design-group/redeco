import React from 'react';

// The site renders straight away; there used to be a fixed 1.6s preloader here.
export default function Loader({children}) {
  return <div id='mainpreloader'>{children}</div>;
}
