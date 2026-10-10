import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, ClipboardList, Clock, Mail, Menu, Phone, Search, X } from 'lucide-react';
import { SmartLink, SmartNavLink } from './SmartLink';
import Icon, { WhatsAppIcon } from './Icon';
import SearchOverlay from './SearchOverlay';
import { categories } from '../data/products';
import { services } from '../data/services';
import { site } from '../data/site';
import { useQuote } from '../context/QuoteContext';
import { waLink } from '../lib/whatsapp';

function MegaMenu({ id, label, to, children, wide }) {
  const [open, setOpen] = useState(false);
  const timer = useRef();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.search]);

  const show = () => {
    clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      className={`nav__item has-menu ${open ? 'is-open' : ''}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
    >
      <SmartNavLink to={to} className="nav__link">
        {label}
      </SmartNavLink>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`Show ${label} menu`}
        onClick={() => setOpen((o) => !o)}
      >
        <ChevronDown />
      </button>
      <div id={id} className={`mega ${wide ? 'mega--wide' : ''}`} hidden={!open}>
        {children}
      </div>
    </li>
  );
}

export default function Header() {
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, setOpen } = useQuote();
  const location = useLocation();

  useEffect(() => setDrawer(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawer]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="utility">
        <div className="container utility__inner">
          <ul className="utility__list">
            <li>
              <a href={site.phoneHref}>
                <Phone aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <Mail aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="utility__hours">
              <Clock aria-hidden="true" />
              {site.hoursShort}
            </li>
          </ul>
          <a className="utility__wa" href={waLink('Hello Zeal Energy, I have an inquiry.')} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header__inner">
          <SmartLink to="/" className="header__logo" aria-label="Zeal Energy Systems and Recyclers, home">
            <img src="/img/logo.webp" alt="" width="132" height="72" />
          </SmartLink>

          <nav className="nav" aria-label="Main">
            <ul className="nav__list">
              <MegaMenu id="mega-products" label="Products" to="/products" wide>
                <div className="mega__grid">
                  {categories.map((c) => (
                    <SmartLink key={c.slug} to={`/products?category=${c.slug}`} className="mega__link">
                      <span className="mega__icon">
                        <Icon name={c.icon} />
                      </span>
                      <span>
                        <strong>{c.name}</strong>
                        <small>{c.blurb}</small>
                      </span>
                    </SmartLink>
                  ))}
                </div>
                <div className="mega__foot">
                  <span>Can’t find a part? We source on request.</span>
                  <SmartLink to="/request-quote" className="link-arrow">
                    Send us your list
                  </SmartLink>
                </div>
              </MegaMenu>
              <MegaMenu id="mega-services" label="Services" to="/services">
                <div className="mega__list">
                  {services.map((s) => (
                    <SmartLink key={s.slug} to={`/services/${s.slug}`} className="mega__link mega__link--row">
                      <span className="mega__icon">
                        <Icon name={s.icon} />
                      </span>
                      <strong>{s.name}</strong>
                    </SmartLink>
                  ))}
                </div>
              </MegaMenu>
              <li className="nav__item">
                <SmartNavLink to="/recycling" className="nav__link">
                  Recycling
                </SmartNavLink>
              </li>
              <li className="nav__item">
                <SmartNavLink to="/about" className="nav__link">
                  About
                </SmartNavLink>
              </li>
              <li className="nav__item">
                <SmartNavLink to="/contact" className="nav__link">
                  Contact
                </SmartNavLink>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <button type="button" className="icon-btn" onClick={() => setSearch(true)} aria-label="Search products and services">
              <Search />
            </button>
            <button type="button" className="icon-btn" onClick={() => setOpen(true)} aria-label={`Quote list, ${count} items`}>
              <ClipboardList />
              {count > 0 && <span className="count-badge">{count > 99 ? '99+' : count}</span>}
            </button>
            <SmartLink to="/request-quote" className="btn btn--gold btn--sm header__cta">
              Request a quote
            </SmartLink>
            <button type="button" className="icon-btn header__burger" onClick={() => setDrawer(true)} aria-label="Open menu" aria-expanded={drawer}>
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${drawer ? 'is-open' : ''}`} aria-hidden={!drawer}>
        <div className="drawer__scrim" onClick={() => setDrawer(false)} />
        <aside className="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu" inert={drawer ? undefined : ''}>
          <div className="drawer__head">
            <img src="/img/logo.webp" alt="Zeal Energy" width="110" height="60" />
            <button type="button" className="icon-btn" onClick={() => setDrawer(false)} aria-label="Close menu">
              <X />
            </button>
          </div>
          <nav aria-label="Mobile">
            <SmartNavLink to="/" end className="drawer__link">
              Home
            </SmartNavLink>
            <details className="drawer__group">
              <summary className="drawer__link">
                Products <ChevronDown aria-hidden="true" />
              </summary>
              <SmartLink to="/products" className="drawer__sub">
                All products
              </SmartLink>
              {categories.map((c) => (
                <SmartLink key={c.slug} to={`/products?category=${c.slug}`} className="drawer__sub">
                  {c.name}
                </SmartLink>
              ))}
            </details>
            <details className="drawer__group">
              <summary className="drawer__link">
                Services <ChevronDown aria-hidden="true" />
              </summary>
              <SmartLink to="/services" className="drawer__sub">
                All services
              </SmartLink>
              {services.map((s) => (
                <SmartLink key={s.slug} to={`/services/${s.slug}`} className="drawer__sub">
                  {s.name}
                </SmartLink>
              ))}
            </details>
            <SmartNavLink to="/recycling" className="drawer__link">
              Recycling
            </SmartNavLink>
            <SmartNavLink to="/about" className="drawer__link">
              About us
            </SmartNavLink>
            <SmartNavLink to="/contact" className="drawer__link">
              Contact
            </SmartNavLink>
            <SmartNavLink to="/faq" className="drawer__link">
              FAQ
            </SmartNavLink>
          </nav>
          <div className="drawer__foot">
            <SmartLink to="/request-quote" className="btn btn--gold btn--block">
              Request a quote
            </SmartLink>
            <a href={waLink('Hello Zeal Energy, I have an inquiry.')} className="btn btn--wa btn--block" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a href={site.phoneHref} className="btn btn--outline btn--block">
              <Phone /> {site.phone}
            </a>
          </div>
        </aside>
      </div>

      {search && <SearchOverlay onClose={() => setSearch(false)} />}
    </>
  );
}
