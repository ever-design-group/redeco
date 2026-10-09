import { useEffect } from 'react';

// Live address of the site; change this if a custom domain is connected.
export const SITE_URL = 'https://redecoltd.vercel.app';
const SITE_NAME = 'REDECO Ltd';
const DEFAULT_IMAGE = '/img/projects/gisozi/1.jpg';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = href => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

// Sets the page title, description, canonical URL and social preview tags.
export default function Seo({ title, description, path, image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Real Design and Construction in Rwanda`;
    const url = SITE_URL + path;
    const img = SITE_URL + image;
    document.title = fullTitle;
    setCanonical(url);
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', img);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', img);
  }, [title, description, path, image]);
  return null;
}
