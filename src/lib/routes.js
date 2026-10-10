import { lazy } from 'react';

// Each page is its own chunk. `preload` lets links fetch a page on hover/focus,
// so it is usually ready by the time the visitor clicks.
const page = (loader) => {
  const C = lazy(loader);
  C.preload = loader;
  return C;
};

export const pages = {
  Home: page(() => import('../pages/Home.jsx')),
  Products: page(() => import('../pages/Products.jsx')),
  Product: page(() => import('../pages/Product.jsx')),
  Services: page(() => import('../pages/Services.jsx')),
  Service: page(() => import('../pages/Service.jsx')),
  Recycling: page(() => import('../pages/Recycling.jsx')),
  About: page(() => import('../pages/About.jsx')),
  Contact: page(() => import('../pages/Contact.jsx')),
  Quote: page(() => import('../pages/Quote.jsx')),
  Faq: page(() => import('../pages/Faq.jsx')),
  Legal: page(() => import('../pages/Legal.jsx')),
  NotFound: page(() => import('../pages/NotFound.jsx')),
};

const prefixes = [
  ['/products/', pages.Product],
  ['/products', pages.Products],
  ['/services/', pages.Service],
  ['/services', pages.Services],
  ['/recycling', pages.Recycling],
  ['/about', pages.About],
  ['/contact', pages.Contact],
  ['/request-quote', pages.Quote],
  ['/faq', pages.Faq],
  ['/privacy', pages.Legal],
  ['/terms', pages.Legal],
];

export function preloadRoute(to) {
  const path = typeof to === 'string' ? to.split('?')[0] : to?.pathname;
  if (!path) return;
  if (path === '/') return pages.Home.preload();
  const hit = prefixes.find(([p]) => path.startsWith(p));
  hit?.[1].preload();
}
