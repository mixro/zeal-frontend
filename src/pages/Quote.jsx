import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Building2,
  Check,
  CheckCircle2,
  ClipboardList,
  Cog,
  Copy,
  Mail,
  PackageSearch,
  Recycle,
  Trash2,
  Wrench,
  Zap,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/Icon';
import { SmartLink } from '../components/SmartLink';
import { QtyStepper } from '../components/QuoteDrawer';
import { PageHero } from '../components/ui';
import { useQuote } from '../context/QuoteContext';
import { services } from '../data/services';
import { site } from '../data/site';
import { load, remove as removeStored, save } from '../lib/storage';
import { useSeo } from '../lib/useSeo';
import { mailLink, waLink } from '../lib/whatsapp';
import './pages.css';
import './quote.css';

const DRAFT_KEY = 'zeal.quote.draft';

const needs = [
  { value: 'Products / equipment supply', icon: PackageSearch },
  { value: 'Installation project', icon: Zap },
  { value: 'Maintenance or repair', icon: Wrench },
  { value: 'Automation / control system', icon: Cog },
  { value: 'Recycling / scrap collection', icon: Recycle },
  { value: 'Something else', icon: Building2 },
];

const STEPS = ['Your details', 'Your requirement', 'Items & notes', 'Review & send'];

const empty = {
  name: '',
  company: '',
  phone: '',
  email: '',
  location: '',
  need: '',
  service: '',
  timeline: 'Within 2 weeks',
  delivery: 'Delivery to site',
  notes: '',
};

const makeRef = () => {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  return `ZQ-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
};

export default function Quote() {
  useSeo({
    title: 'Request a quote',
    description: 'Request a quotation for electrical equipment, installation, maintenance or recycling from Zeal Energy. Reply within one working day.',
    path: '/request-quote',
  });

  const [params] = useSearchParams();
  const { items, setQty, remove, clear } = useQuote();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState(() => {
    const draft = load(DRAFT_KEY, empty);
    const presetService = params.get('service');
    const svc = services.find((s) => s.slug === presetService);
    if (svc) return { ...empty, ...draft, service: svc.name, need: draft.need || 'Installation project' };
    if (items.length && !draft.need) return { ...empty, ...draft, need: 'Products / equipment supply' };
    return { ...empty, ...draft };
  });

  useEffect(() => save(DRAFT_KEY, form), [form]);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    document.getElementById('quote-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelector('.quote__card input, .quote__card textarea')?.focus({ preventScroll: true });
  }, [step]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = (s) => {
    const e = {};
    if (s === 0) {
      if (!form.name.trim()) e.name = 'Enter your full name';
      if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) e.phone = 'Enter a phone number, for example +255 7XX XXX XXX';
      if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address';
      if (!form.location.trim()) e.location = 'Enter your city or site location';
    }
    if (s === 1 && !form.need) e.need = 'Choose what you need a quote for';
    if (s === 2 && !items.length && form.notes.trim().length < 10) e.notes = 'Add products to your list or describe what you need (at least 10 characters)';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => validate(step) && setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const goTo = (i) => {
    if (i < step) return setStep(i);
    for (let s = step; s < i; s += 1) if (!validate(s)) return setStep(s);
    setStep(i);
  };

  const ref = useMemo(makeRef, []);

  const summary = useMemo(() => {
    const lines = [
      `*Quote request ${ref}*`,
      '',
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Location: ${form.location}`,
      '',
      `Need: ${form.need}`,
      form.service ? `Service: ${form.service}` : null,
      `Timeline: ${form.timeline}`,
      `Delivery: ${form.delivery}`,
    ];
    if (items.length) {
      lines.push('', '*Items*');
      items.forEach((i, n) => lines.push(`${n + 1}. ${i.name} (${i.brand}) × ${i.qty}`));
    }
    if (form.notes.trim()) lines.push('', '*Details*', form.notes.trim());
    return lines.filter((l) => l !== null).join('\n');
  }, [form, items, ref]);

  const send = (via) => {
    if (via === 'wa') window.open(waLink(summary), '_blank', 'noopener,noreferrer');
    else window.location.href = mailLink(`Quote request ${ref} – ${form.company || form.name}`, summary.replace(/\*/g, ''));
    setDone({ ref, via, name: form.name.split(' ')[0] });
    clear();
    removeStored(DRAFT_KEY);
    setForm(empty);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary.replace(/\*/g, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  };

  if (done) {
    return (
      <>
        <PageHero title="Request a quote" crumbs={[{ label: 'Request a quote' }]} />
        <section className="section">
          <div className="container quote-done">
            <CheckCircle2 aria-hidden="true" />
            <h2>Thank you{done.name ? `, ${done.name}` : ''}. Your request is ready.</h2>
            <p>
              We opened {done.via === 'wa' ? 'WhatsApp' : 'your email app'} with your request. Press <strong>send</strong> there to deliver it. Your
              reference is <strong className="quote-done__ref">{done.ref}</strong>.
            </p>
            <p>Our team usually replies within one working day. For urgent requests call {site.phone}.</p>
            <div className="quote-done__actions">
              <SmartLink to="/products" className="btn">
                Continue browsing
              </SmartLink>
              <SmartLink to="/" className="btn btn--outline">
                Back to home
              </SmartLink>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Request a quote"
        intro="Tell us what you need. It takes about two minutes, and we reply with pricing, availability and delivery time, usually within one working day."
        crumbs={[{ label: 'Request a quote' }]}
      />

      <section className="section quote-section" id="quote-top">
        <div className="container quote">
          <div className="quote__main">
            <ol className="stepper" aria-label="Progress">
              {STEPS.map((s, i) => (
                <li key={s} className={i === step ? 'is-current' : i < step ? 'is-done' : ''}>
                  <button type="button" onClick={() => goTo(i)} aria-current={i === step ? 'step' : undefined}>
                    <span className="stepper__dot">{i < step ? <Check aria-hidden="true" /> : i + 1}</span>
                    <span className="stepper__label">{s}</span>
                  </button>
                </li>
              ))}
            </ol>

            <form
              className="form-card quote__card"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                if (step < STEPS.length - 1) next();
              }}
            >
              {step === 0 && (
                <fieldset className="fieldset">
                  <legend>
                    <h2>Your details</h2>
                    <p>So we know who to send the quotation to.</p>
                  </legend>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="q-name">Full name</label>
                      <input id="q-name" className="input" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} autoComplete="name" />
                      {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="field">
                      <label htmlFor="q-company">
                        Company <span className="hint">(optional)</span>
                      </label>
                      <input id="q-company" className="input" value={form.company} onChange={set('company')} autoComplete="organization" />
                    </div>
                    <div className="field">
                      <label htmlFor="q-phone">Phone / WhatsApp</label>
                      <input id="q-phone" type="tel" className="input" value={form.phone} onChange={set('phone')} aria-invalid={!!errors.phone} placeholder="+255" autoComplete="tel" />
                      {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                    <div className="field">
                      <label htmlFor="q-email">
                        Email <span className="hint">(optional)</span>
                      </label>
                      <input id="q-email" type="email" className="input" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} autoComplete="email" />
                      {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="field span-2">
                      <label htmlFor="q-location">City or site location</label>
                      <input id="q-location" className="input" value={form.location} onChange={set('location')} aria-invalid={!!errors.location} placeholder="e.g. Mikocheni, Dar es Salaam" />
                      {errors.location && <span className="error">{errors.location}</span>}
                    </div>
                  </div>
                </fieldset>
              )}

              {step === 1 && (
                <fieldset className="fieldset">
                  <legend>
                    <h2>What do you need?</h2>
                    <p>Pick the option closest to your request.</p>
                  </legend>
                  <div className="choice-grid choice-grid--lg" role="radiogroup" aria-invalid={!!errors.need}>
                    {needs.map(({ value, icon: I }) => (
                      <label key={value} className="choice">
                        <input type="radio" name="need" value={value} checked={form.need === value} onChange={set('need')} />
                        <I aria-hidden="true" />
                        {value}
                      </label>
                    ))}
                  </div>
                  {errors.need && <span className="error">{errors.need}</span>}
                  <div className="form-grid" style={{ marginTop: 24 }}>
                    <div className="field span-2">
                      <label htmlFor="q-service">
                        Related service <span className="hint">(optional)</span>
                      </label>
                      <select id="q-service" className="select" value={form.service} onChange={set('service')}>
                        <option value="">Not sure / not applicable</option>
                        {services.map((s) => (
                          <option key={s.slug}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="q-timeline">When do you need it?</label>
                      <select id="q-timeline" className="select" value={form.timeline} onChange={set('timeline')}>
                        <option>Urgent (within 48 hours)</option>
                        <option>Within 2 weeks</option>
                        <option>Within 1 month</option>
                        <option>Planning / budgeting</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="q-delivery">Delivery</label>
                      <select id="q-delivery" className="select" value={form.delivery} onChange={set('delivery')}>
                        <option>Delivery to site</option>
                        <option>Collect from Zeal</option>
                        <option>Supply and install</option>
                        <option>Not applicable</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
              )}

              {step === 2 && (
                <fieldset className="fieldset">
                  <legend>
                    <h2>Items & project details</h2>
                    <p>Review your quote list and add anything else we should know.</p>
                  </legend>

                  {items.length ? (
                    <ul className="q-items">
                      {items.map((i) => (
                        <li key={i.slug}>
                          <div>
                            <strong>{i.name}</strong>
                            <small>{i.brand}</small>
                          </div>
                          <QtyStepper small value={i.qty} onChange={(v) => setQty(i.slug, v)} label={`Quantity of ${i.name}`} />
                          <button type="button" className="icon-btn" onClick={() => remove(i.slug)} aria-label={`Remove ${i.name}`}>
                            <Trash2 />
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="q-empty">
                      <ClipboardList aria-hidden="true" />
                      <p>
                        Your quote list is empty. You can <SmartLink to="/products">add products from the catalogue</SmartLink>, or simply describe what
                        you need below.
                      </p>
                    </div>
                  )}

                  <div className="field" style={{ marginTop: 24 }}>
                    <label htmlFor="q-notes">Describe your requirement</label>
                    <textarea
                      id="q-notes"
                      className="textarea"
                      rows={6}
                      value={form.notes}
                      onChange={set('notes')}
                      aria-invalid={!!errors.notes}
                      placeholder="Part numbers, quantities, ratings, site details, drawings you can share…"
                    />
                    <span className="hint">Have drawings, photos or a BOQ? Mention it here and attach them in WhatsApp or email after sending.</span>
                    {errors.notes && <span className="error">{errors.notes}</span>}
                  </div>
                </fieldset>
              )}

              {step === 3 && (
                <div className="fieldset">
                  <div className="legend-like">
                    <h2>Review & send</h2>
                    <p>Check your request, then send it by WhatsApp or email.</p>
                  </div>
                  <dl className="review">
                    <div>
                      <dt>Contact</dt>
                      <dd>
                        {form.name}
                        {form.company && `, ${form.company}`}
                        <br />
                        {form.phone}
                        {form.email && ` · ${form.email}`}
                        <br />
                        {form.location}
                      </dd>
                      <button type="button" className="review__edit" onClick={() => setStep(0)}>
                        Edit
                      </button>
                    </div>
                    <div>
                      <dt>Requirement</dt>
                      <dd>
                        {form.need}
                        {form.service && ` · ${form.service}`}
                        <br />
                        {form.timeline} · {form.delivery}
                      </dd>
                      <button type="button" className="review__edit" onClick={() => setStep(1)}>
                        Edit
                      </button>
                    </div>
                    <div>
                      <dt>Items</dt>
                      <dd>
                        {items.length ? (
                          <ul>
                            {items.map((i) => (
                              <li key={i.slug}>
                                {i.qty} × {i.name}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          'No catalogue items'
                        )}
                        {form.notes && <p className="review__notes">{form.notes}</p>}
                      </dd>
                      <button type="button" className="review__edit" onClick={() => setStep(2)}>
                        Edit
                      </button>
                    </div>
                  </dl>
                  <div className="send-options">
                    <button type="button" className="btn btn--wa" onClick={() => send('wa')}>
                      <WhatsAppIcon /> Send on WhatsApp
                    </button>
                    <button type="button" className="btn" onClick={() => send('email')}>
                      <Mail /> Send by email
                    </button>
                    <button type="button" className="btn btn--outline" onClick={copy}>
                      {copied ? <Check /> : <Copy />} {copied ? 'Copied' : 'Copy text'}
                    </button>
                  </div>
                  <p className="hint" style={{ marginTop: 12 }}>
                    Reference {ref}. Sending opens WhatsApp or your email app with the request filled in.
                  </p>
                </div>
              )}

              {step < 3 && (
                <div className="quote__nav">
                  {step > 0 ? (
                    <button type="button" className="btn btn--outline" onClick={back}>
                      Back
                    </button>
                  ) : (
                    <span />
                  )}
                  <button type="submit" className="btn btn--gold">
                    {step === 2 ? 'Review request' : 'Continue'}
                  </button>
                </div>
              )}
              {step === 3 && (
                <div className="quote__nav">
                  <button type="button" className="btn btn--outline" onClick={back}>
                    Back
                  </button>
                </div>
              )}
            </form>
          </div>

          <aside className="quote__side">
            <div className="side-card">
              <h2>What happens next</h2>
              <ol className="mini-steps">
                <li>We review your request and check stock.</li>
                <li>An engineer calls if anything needs clarifying.</li>
                <li>You receive a written quotation, usually within one working day.</li>
              </ol>
            </div>
            <div className="side-card side-card--plain">
              <h2>Prefer to talk?</h2>
              <a href={site.phoneHref} className="side-link">
                {site.phone}
              </a>
              <a href={waLink('Hello Zeal Energy, I would like a quotation.')} className="btn btn--wa btn--block" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
