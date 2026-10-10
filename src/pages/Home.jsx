import { ArrowRight, BadgeCheck, Clock3, Headset, Leaf, Phone, Truck } from 'lucide-react';
import { SmartLink } from '../components/SmartLink';
import Img from '../components/Img';
import Icon, { WhatsAppIcon } from '../components/Icon';
import { BrandStrip, Chev, CtaBand, MoreLink, PlusIcon, ProductCard } from '../components/ui';
import { photos } from '../data/images';
import { categories, products } from '../data/products';
import { services } from '../data/services';
import { faqs, industries, site, stats } from '../data/site';
import { useSeo } from '../lib/useSeo';
import { waLink } from '../lib/whatsapp';
import './home.css';

const lines = [
  {
    title: 'Supply',
    heading: 'Electrical & automation equipment',
    text: 'Genuine PLCs, drives, breakers, cables, solar and components, imported and stocked in Dar es Salaam.',
    to: '/products',
    cta: 'Browse products',
    image: photos.warehouse,
  },
  {
    title: 'Install',
    heading: 'Installation & maintenance',
    text: 'Certified engineers design, install, commission and maintain power and control systems.',
    to: '/services',
    cta: 'Explore services',
    image: photos.panelMultimeter,
  },
  {
    title: 'Recycle',
    heading: 'E-waste & scrap recycling',
    text: 'Safe collection and recovery of electronic waste, cables and metals, with reports for your records.',
    to: '/recycling',
    cta: 'Schedule a pickup',
    image: photos.circuitBoards,
  },
];

const reasons = [
  { icon: BadgeCheck, title: 'Genuine, warrantied stock', text: 'Sourced from manufacturers and authorised distributors, with original documentation.' },
  { icon: Headset, title: 'Engineers, not just sales', text: 'Talk to people who install the equipment and can check compatibility before you buy.' },
  { icon: Truck, title: 'Delivery across Tanzania', text: 'From a single breaker to a full panel, delivered to your site with clear lead times.' },
  { icon: Leaf, title: 'Responsible end of life', text: 'We take back old equipment and recycle it properly, closing the loop on every project.' },
];

const orderSteps = [
  { title: 'Build your list', text: 'Add products to your quote list or describe your project.' },
  { title: 'Send your request', text: 'Submit by WhatsApp or email. It takes about two minutes.' },
  { title: 'Get a clear quote', text: 'We confirm pricing, availability and delivery, usually within one working day.' },
  { title: 'Delivery or installation', text: 'We deliver to your site, or our engineers install and commission.' },
];

export default function Home() {
  useSeo({
    description:
      'Zeal Energy Systems and Recyclers supplies genuine electrical and automation equipment, installs and maintains power systems, and recycles e-waste across Tanzania.',
    path: '/',
  });

  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1>Power systems that keep Tanzania’s businesses running.</h1>
            <p className="hero__lede">
              We supply genuine electrical and automation equipment, install and maintain power systems, and recycle the electronic waste
              they leave behind. One accountable team in Dar es Salaam.
            </p>
            <div className="hero__actions">
              <SmartLink to="/request-quote" className="btn btn--gold">
                Request a quote
              </SmartLink>
              <SmartLink to="/products" className="btn btn--ghost-light">
                Browse products
              </SmartLink>
            </div>
            <ul className="hero__contact">
              <li>
                <a href={site.phoneHref}>
                  <Phone aria-hidden="true" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={waLink('Hello Zeal Energy, I have an inquiry.')} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> WhatsApp
                </a>
              </li>
              <li>
                <Clock3 aria-hidden="true" /> Quotes in 1 working day
              </li>
            </ul>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <span className="hero__chev hero__chev--1" />
            <span className="hero__chev hero__chev--2" />
            <Img image={photos.heroTechnician} priority sizes="(max-width: 900px) 100vw, 55vw" className="hero__img" alt="" />
          </div>
        </div>
      </section>

      <BrandStrip />

      {/* ---------- Business lines ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>From the first breaker to the last recycled cable</h2>
            <p>Most clients start with one of our three divisions and stay for all of them. Each shares the same engineers, stock and standards.</p>
          </div>
          <div className="lines">
            {lines.map((l, i) => (
              <SmartLink key={l.title} to={l.to} className={`line ${i === 0 ? 'line--lead' : ''}`}>
                <Img image={l.image} sizes={i === 0 ? '(max-width: 900px) 100vw, 60vw' : '(max-width: 900px) 100vw, 40vw'} className="line__img" alt="" />
                <div className="line__body">
                  <span className="line__tag">
                    <Chev /> {l.title}
                  </span>
                  <h3>{l.heading}</h3>
                  <p>{l.text}</p>
                  <span className="line__cta">
                    {l.cta} <ArrowRight aria-hidden="true" />
                  </span>
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Categories ---------- */}
      <section className="section section--steel">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="section-head" style={{ margin: 0 }}>
              <h2>Shop by category</h2>
              <p>Stocked lines plus on-request sourcing for anything not listed.</p>
            </div>
            <MoreLink to="/products">All products</MoreLink>
          </div>
          <ul className="cats">
            {categories.map((c) => {
              const n = products.filter((p) => p.category === c.slug).length;
              return (
                <li key={c.slug}>
                  <SmartLink to={`/products?category=${c.slug}`} className="cat">
                    <span className="cat__icon">
                      <Icon name={c.icon} />
                    </span>
                    <span className="cat__text">
                      <strong>{c.name}</strong>
                      <small>{c.blurb}</small>
                    </span>
                    <span className="cat__count">{n}</span>
                  </SmartLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- Featured products ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="section-head" style={{ margin: 0 }}>
              <h2>Popular with our customers</h2>
              <p>Add items to your quote list and send one request for everything.</p>
            </div>
            <MoreLink to="/products">View catalogue</MoreLink>
          </div>
          <div className="grid-products">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section section--steel">
        <div className="container svc">
          <div className="svc__intro">
            <h2>Engineering services for every stage of your power system</h2>
            <p className="lede">
              Whether you run a factory, hospital, hotel or data room, our engineers help keep your power safe, efficient and ready for growth.
            </p>
            <Img image={photos.teamSite} className="svc__img" sizes="(max-width: 900px) 100vw, 40vw" alt="Zeal engineers discussing work on site" />
            <SmartLink to="/services" className="btn btn--outline">
              All services
            </SmartLink>
          </div>
          <ul className="svc__list">
            {services.map((s) => (
              <li key={s.slug}>
                <SmartLink to={`/services/${s.slug}`} className="svc__row">
                  <span className="svc__icon">
                    <Icon name={s.icon} />
                  </span>
                  <span className="svc__text">
                    <strong>{s.name}</strong>
                    <span>{s.summary}</span>
                  </span>
                  <ArrowRight className="svc__arrow" aria-hidden="true" />
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Why Zeal ---------- */}
      <section className="section section--navy why">
        <div className="container">
          <div className="section-head">
            <h2>Why businesses choose Zeal</h2>
            <p>Buying electrical equipment is easy. Getting the right part, installed correctly and supported for years, is where we make the difference.</p>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <dt>
                  <span className="stat__value">{s.value}</span> <span className="stat__unit">{s.unit}</span>
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
          <ul className="reasons">
            {reasons.map(({ icon: I, title, text }) => (
              <li key={title}>
                <I aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- How ordering works ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How ordering works</h2>
            <p>No account, no checkout. Tell us what you need and we take it from there.</p>
          </div>
          <ol className="steps">
            {orderSteps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="industries">
            <h3>Industries we serve</h3>
            <ul className="tag-list">
              {industries.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- FAQ preview ---------- */}
      <section className="section section--steel">
        <div className="container faq-preview">
          <div>
            <h2>Common questions</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Can’t find your answer? Call {site.phone} or send us a WhatsApp message.
            </p>
            <div style={{ marginTop: 24 }}>
              <MoreLink to="/faq">See all questions</MoreLink>
            </div>
          </div>
          <div className="accordion">
            {faqs.slice(0, 4).map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <PlusIcon />
                </summary>
                <p className="accordion__body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

