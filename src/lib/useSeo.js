import { useEffect } from 'react';
import { site } from '../data/site';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/** Sets the page title, description, canonical URL and social preview tags. */
export function useSeo({ title, description, path = '', image = '/og-image.jpg' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.shortName}` : `${site.name} | Electrical Equipment, Installation & Recycling`;
    const url = `${site.url}${path}`;
    document.title = fullTitle;
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
    }
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image.startsWith('http') ? image : `${site.url}${image}`);
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);
  }, [title, description, path, image]);
}
