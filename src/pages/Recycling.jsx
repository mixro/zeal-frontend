import { useState } from 'react';
import { Battery, Cable, CircuitBoard, Cog, FileCheck2, Monitor, Phone, Recycle, Truck, Zap } from 'lucide-react';
import Img from '../components/Img';
import { WhatsAppIcon } from '../components/Icon';
import { PageHero } from '../components/ui';
import { photos } from '../data/images';
import { site } from '../data/site';
import { useSeo } from '../lib/useSeo';
import { mailLink, waLink } from '../lib/whatsapp';
import './pages.css';

const recyclingStats = [
  { label: 'General waste', value: 3850.7 },
  { label: 'Cardboard', value: 2053 },
  { label: 'Mixed recycling', value: 654.97 },
  { label: 'Plastic', value: 240.11 },
  { label: 'Metal', value: 13.61 },
  { label: 'Pallets', value: 3.3 },
];
const total = recyclingStats.reduce((n, s) => n + s.value, 0);

const accepted = [
  { icon: Monitor, title: 'Computers & IT', text: 'Desktops, laptops, servers, printers, monitors, networking gear' },
  { icon: Cable, title: 'Cables & wiring', text: 'Copper and aluminium cables, offcuts and old installations' },
  { icon: CircuitBoard, title: 'Circuit boards', text: 'PCBs, control cards, UPS and inverter boards' },
  { icon: Battery, title: 'Batteries', text: 'Lead-acid, lithium and UPS battery banks' },
  { icon: Zap, title: 'Electrical equipment', text: 'Panels, breakers, transformers, meters, switchgear' },
  { icon: Cog, title: 'Motors & metal scrap', text: 'Electric motors, generators, steel and non-ferrous metal' },
];

const steps = [
  { title: 'Book a pickup', text: 'Tell us what you have and where. Small loads can be dropped off.' },
  { title: 'Collection', text: 'Our team collects, weighs and records everything on site.' },
  { title: 'Sorting & recovery', text: 'Materials are separated and valuable metals recovered safely.' },
  { title: 'Recycling report', text: 'Businesses receive a report of what was collected and recycled.' },
];

const fmt = (n) => n.toLocaleString('en-US', { maximumFractionDigits: 1 });

export default function Recycling() {
  useSeo({
    title: 'E-waste & scrap recycling',
    description:
      'Safe collection and recycling of electronic waste, cables, batteries and metal scrap in Tanzania. Schedule a pickup with Zeal Energy.',
    path: '/recycling',
  });

  const [form, setForm] = useState({ name: '', phone: '', location: '', items: [], volume: 'Small (fits in a car)', notes: '' });
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (t) => setForm((f) => ({ ...f, items: f.items.includes(t) ? f.items.filter((i) => i !== t) : [...f.items, t] }));

  const message = () =>
    [
      'Hello Zeal Energy, I would like to schedule a recycling pickup.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Location: ${form.location}`,
      `Items: ${form.items.join(', ') || 'Not specified'}`,
      `Approximate volume: ${form.volume}`,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n');

  const submit = (via) => {
    const e = {};
    if (!form.name.trim()) e.name = 'Enter your name';
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) e.phone = 'Enter a phone number we can call';
    if (!form.location.trim()) e.location = 'Enter the pickup location';
    setErrors(e);
    if (Object.keys(e).length) return;
    if (via === 'wa') window.open(waLink(message()), '_blank', 'noopener,noreferrer');
    else window.location.href = mailLink('Recycling pickup request', message());
  };

  return (
    <>
      <PageHero
        title="Responsible recycling for electronic and electrical waste"
        intro="We collect old equipment, cables, batteries and scrap from homes, offices and industrial sites, then recover materials safely so less ends up in landfill."
        crumbs={[{ label: 'Recycling' }]}
      >
        <div className="hero-actions">
          <a href="#pickup" className="btn btn--gold">
            Schedule a pickup
          </a>
          <a href={site.phoneHref} className="btn btn--ghost-light">
            <Phone /> Call {site.phone}
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container split split--media">
          <div>
            <h2>Advanced recycling, simple for you</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Our process separates, purifies and repurposes materials so that metals, plastics and components get a second life. You make one
              call; we handle collection, sorting and paperwork.
            </p>
            <ul className="check-list" style={{ marginTop: 24 }}>
              <li>
                <Truck aria-hidden="true" /> <span>Scheduled pickups or drop-off at our facility</span>
              </li>
              <li>
                <FileCheck2 aria-hidden="true" /> <span>Recycling reports for business and asset-disposal records</span>
              </li>
              <li>
                <Recycle aria-hidden="true" /> <span>Safe handling of batteries and hazardous components</span>
              </li>
            </ul>
          </div>
          <Img image={photos.eWaste} className="split__img" sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="section-head" style={{ margin: 0 }}>
              <h2>Recycling to date</h2>
              <p>Tonnes collected and processed by material.</p>
            </div>
            <p className="recycle-total">
              <strong>{fmt(total)}</strong> tonnes in total
            </p>
          </div>
          <ul className="bars">
            {recyclingStats.map((s) => (
              <li key={s.label}>
                <span className="bars__label">{s.label}</span>
                <span className="bars__track">
                  <span className="bars__fill" style={{ '--w': `${Math.max((s.value / recyclingStats[0].value) * 100, 0.8)}%` }} />
                </span>
                <span className="bars__value">{fmt(s.value)} t</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What we collect</h2>
            <p>Not sure about an item? Send a photo on WhatsApp and we’ll tell you.</p>
          </div>
          <ul className="accept-grid">
            {accepted.map(({ icon: I, title, text }) => (
              <li key={title}>
                <I aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-head">
            <h2>How collection works</h2>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="pickup">
        <div className="container split">
          <div>
            <h2>Schedule a pickup</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Fill in the details and send them to us on WhatsApp or by email. We’ll confirm a collection time.
            </p>
            <Img image={photos.eWastePile} className="split__img" style={{ marginTop: 32 }} sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <form className="form-card" noValidate onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="r-name">Your name</label>
                <input id="r-name" className="input" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} autoComplete="name" />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="field">
                <label htmlFor="r-phone">Phone number</label>
                <input id="r-phone" className="input" type="tel" value={form.phone} onChange={set('phone')} aria-invalid={!!errors.phone} placeholder="+255" autoComplete="tel" />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="field span-2">
                <label htmlFor="r-loc">Pickup location</label>
                <input id="r-loc" className="input" value={form.location} onChange={set('location')} aria-invalid={!!errors.location} placeholder="Area, street or landmark" />
                {errors.location && <span className="error">{errors.location}</span>}
              </div>
              <fieldset className="field span-2 fieldset">
                <legend className="label">What do you have?</legend>
                <div className="choice-grid">
                  {accepted.map(({ icon: I, title }) => (
                    <label key={title} className="choice">
                      <input type="checkbox" checked={form.items.includes(title)} onChange={() => toggle(title)} />
                      <I aria-hidden="true" />
                      {title}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="field span-2">
                <label htmlFor="r-vol">Approximate volume</label>
                <select id="r-vol" className="select" value={form.volume} onChange={set('volume')}>
                  <option>Small (fits in a car)</option>
                  <option>Medium (pickup truck)</option>
                  <option>Large (lorry load)</option>
                  <option>Ongoing / regular collection</option>
                </select>
              </div>
              <div className="field span-2">
                <label htmlFor="r-notes">Notes (optional)</label>
                <textarea id="r-notes" className="textarea" value={form.notes} onChange={set('notes')} placeholder="Access details, preferred dates, quantities" />
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="btn btn--wa" onClick={() => submit('wa')}>
                <WhatsAppIcon /> Send on WhatsApp
              </button>
              <button type="button" className="btn btn--outline" onClick={() => submit('email')}>
                Send by email
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
