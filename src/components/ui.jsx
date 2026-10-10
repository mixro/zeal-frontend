import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUp, ChevronRight, ClipboardPlus } from 'lucide-react';
import { SmartLink } from './SmartLink';
import Img from './Img';
import { WhatsAppIcon } from './Icon';
import { brands } from '../data/site';
import { getCategory } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import { waLink } from '../lib/whatsapp';

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`to-top ${show ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
    >
      <ArrowUp />
    </button>
  );
}

export function Chev() {
  return (
    <span className="chev" aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

export function PageHero({ title, intro, crumbs = [], children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumbs">
              <li>
                <SmartLink to="/">Home</SmartLink>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} style={{ display: 'contents' }}>
                  <ChevronRight aria-hidden="true" />
                  {c.to ? <SmartLink to={c.to}>{c.label}</SmartLink> : <span aria-current="page">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function ProductCard({ product, layout = 'grid' }) {
  const { add } = useQuote();
  const cat = getCategory(product.category);
  return (
    <article className={`product-card ${layout === 'list' ? 'product-card--list' : ''}`}>
      <Img
        image={product.image}
        contain={product.image.local}
        className="product-card__media"
        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 300px"
      />
      <div className="product-card__body">
        <span className="product-card__brand">
          {product.brand} · {cat?.name}
        </span>
        <h3 className="product-card__name">
          <SmartLink to={`/products/${product.slug}`}>{product.name}</SmartLink>
        </h3>
        <p className="product-card__summary">{product.summary}</p>
        <div className="product-card__actions">
          <button type="button" className="btn btn--sm" onClick={() => add(product, 1)}>
            <ClipboardPlus /> Add to quote
          </button>
          <SmartLink to={`/products/${product.slug}`} className="btn btn--outline btn--sm" aria-label={`Details for ${product.name}`}>
            Details
          </SmartLink>
        </div>
      </div>
    </article>
  );
}

export function BrandStrip({ title = 'Genuine equipment from the brands engineers specify' }) {
  return (
    <section className="brands" aria-label="Brands we supply">
      <div className="container brands__inner">
        <p className="brands__title">{title}</p>
        <ul className="brands__list">
          {brands.map((b) => (
            <li key={b.name}>
              <img src={b.logo} alt={b.name} width={b.w} height={b.h} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand({
  title = 'Tell us what you need. We’ll reply with a clear quote.',
  text = 'Send a parts list, drawings or a short description of your project. Our engineers reply with pricing, availability and delivery time, usually within one working day.',
  waText = 'Hello Zeal Energy, I would like a quotation.',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <SmartLink to="/request-quote" className="btn btn--gold">
            Request a quote
          </SmartLink>
          <a href={waLink(waText)} className="btn btn--ghost-light" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}

export function MoreLink({ to, children }) {
  return (
    <SmartLink to={to} className="link-arrow">
      {children} <ArrowRight aria-hidden="true" />
    </SmartLink>
  );
}

export function PageLoader() {
  return (
    <>
      <div className="route-loader" role="progressbar" aria-label="Loading page" />
      <div className="container page-skeleton" aria-hidden="true">
        <div className="skeleton" style={{ height: 220 }} />
        <div className="skeleton" style={{ height: 28, width: '45%' }} />
        <div className="skeleton" style={{ height: 16, width: '70%' }} />
        <div className="skeleton" style={{ height: 16, width: '60%' }} />
      </div>
    </>
  );
}

export function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Faqs({ items }) {
  return (
    <div className="accordion">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <PlusIcon />
          </summary>
          <p className="accordion__body">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
