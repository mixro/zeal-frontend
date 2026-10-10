import { useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../components/Icon';
import { PageHero } from '../components/ui';
import { site } from '../data/site';
import { useSeo } from '../lib/useSeo';
import { mailLink, waLink } from '../lib/whatsapp';
import './pages.css';

const topics = ['Product inquiry', 'Installation or service', 'Recycling pickup', 'Technical support', 'Partnership', 'Other'];

export default function Contact() {
  useSeo({
    title: 'Contact us',
    description: `Contact Zeal Energy in Dar es Salaam. Call ${site.phone}, WhatsApp us or email ${site.email}.`,
    path: '/contact',
  });

  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: topics[0], message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const body = () =>
    `Hello Zeal Energy,\n\n${form.message}\n\nName: ${form.name}\nEmail: ${form.email || '-'}\nPhone: ${form.phone || '-'}\nTopic: ${form.topic}`;

  const submit = (via) => {
    const e = {};
    if (!form.name.trim()) e.name = 'Enter your name';
    if (!form.email.trim() && !form.phone.trim()) e.contact = 'Enter an email or phone number so we can reply';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (form.message.trim().length < 10) e.message = 'Tell us a little more (at least 10 characters)';
    setErrors(e);
    if (Object.keys(e).length) return;
    if (via === 'wa') window.open(waLink(body()), '_blank', 'noopener,noreferrer');
    else window.location.href = mailLink(`${form.topic}: ${form.name}`, body());
    setSent(true);
  };

  return (
    <>
      <PageHero title="Contact us" intro="Talk to our sales and engineering team. The fastest way to reach us is WhatsApp or a phone call." crumbs={[{ label: 'Contact' }]} />

      <section className="section">
        <div className="container contact">
          <div className="contact__cards">
            <a href={site.phoneHref} className="contact-card">
              <Phone aria-hidden="true" />
              <span>
                <strong>Call us</strong>
                {site.phone}
              </span>
            </a>
            <a href={waLink('Hello Zeal Energy, I have an inquiry.')} className="contact-card contact-card--wa" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              <span>
                <strong>WhatsApp</strong>
                Chat with our team
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="contact-card">
              <Mail aria-hidden="true" />
              <span>
                <strong>Email</strong>
                {site.email}
              </span>
            </a>
            <div className="contact-card">
              <MapPin aria-hidden="true" />
              <span>
                <strong>Visit</strong>
                {site.address}
              </span>
            </div>
            <div className="contact-card contact-card--hours">
              <Clock aria-hidden="true" />
              <span>
                <strong>Opening hours</strong>
                <table>
                  <tbody>
                    {site.hours.map((h) => (
                      <tr key={h.days}>
                        <th scope="row">{h.days}</th>
                        <td>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </span>
            </div>
          </div>

          <form className="form-card" noValidate onSubmit={(e) => e.preventDefault()}>
            <h2>Send us a message</h2>
            <p className="lede">We usually reply within one working day.</p>
            {sent && (
              <p className="notice" role="status">
                Your message is ready in WhatsApp or your email app. Press send there to deliver it.
              </p>
            )}
            <div className="form-grid">
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" className="input" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} autoComplete="name" />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="field">
                <label htmlFor="c-topic">Topic</label>
                <select id="c-topic" className="select" value={form.topic} onChange={set('topic')}>
                  {topics.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" type="email" className="input" value={form.email} onChange={set('email')} aria-invalid={!!(errors.email || errors.contact)} autoComplete="email" />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="c-phone">Phone</label>
                <input id="c-phone" type="tel" className="input" value={form.phone} onChange={set('phone')} aria-invalid={!!errors.contact} placeholder="+255" autoComplete="tel" />
              </div>
              {errors.contact && <span className="error span-2">{errors.contact}</span>}
              <div className="field span-2">
                <label htmlFor="c-msg">Message</label>
                <textarea id="c-msg" className="textarea" value={form.message} onChange={set('message')} aria-invalid={!!errors.message} />
                {errors.message && <span className="error">{errors.message}</span>}
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="btn btn--wa" onClick={() => submit('wa')}>
                <WhatsAppIcon /> Send on WhatsApp
              </button>
              <button type="button" className="btn btn--outline" onClick={() => submit('email')}>
                <Mail /> Send by email
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="map" aria-label="Map of our location">
        <iframe
          title="Zeal Energy location map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
