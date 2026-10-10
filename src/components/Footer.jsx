import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SmartLink } from './SmartLink';
import { SocialIcon, WhatsAppIcon } from './Icon';
import { categories } from '../data/products';
import { services } from '../data/services';
import { site } from '../data/site';
import { waLink } from '../lib/whatsapp';

export default function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/img/logo-white.webp" alt="Zeal Energy Systems and Recyclers" width="160" height="88" loading="lazy" />
          <p>
            Electrical and automation equipment, installation, maintenance and responsible e-waste recycling for businesses across Tanzania.
          </p>
          {socials.length > 0 && (
            <ul className="footer__social">
              {socials.map(([key, url]) => {
                return (
                  <li key={key}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={key}>
                      <SocialIcon name={key} />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <h2 className="footer__title">Products</h2>
          <ul className="footer__links">
            {categories.map((c) => (
              <li key={c.slug}>
                <SmartLink to={`/products?category=${c.slug}`}>{c.name}</SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Services</h2>
          <ul className="footer__links">
            {services.map((s) => (
              <li key={s.slug}>
                <SmartLink to={`/services/${s.slug}`}>{s.name}</SmartLink>
              </li>
            ))}
            <li>
              <SmartLink to="/recycling">E-waste recycling</SmartLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Company</h2>
          <ul className="footer__links">
            <li>
              <SmartLink to="/about">About us</SmartLink>
            </li>
            <li>
              <SmartLink to="/request-quote">Request a quote</SmartLink>
            </li>
            <li>
              <SmartLink to="/faq">FAQ</SmartLink>
            </li>
            <li>
              <SmartLink to="/contact">Contact</SmartLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Get in touch</h2>
          <ul className="footer__contact">
            <li>
              <Phone aria-hidden="true" />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <WhatsAppIcon />
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </li>
            <li>
              <Mail aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <MapPin aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li>
              <Clock aria-hidden="true" />
              <span>{site.hoursShort}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul>
            <li>
              <SmartLink to="/privacy">Privacy policy</SmartLink>
            </li>
            <li>
              <SmartLink to="/terms">Terms of service</SmartLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
