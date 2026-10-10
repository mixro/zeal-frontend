import { useEffect, useRef, useState } from 'react';
import { Send, X } from 'lucide-react';
import { WhatsAppIcon } from './Icon';
import { waLink } from '../lib/whatsapp';

const presets = [
  { label: 'Product price & availability', text: 'Hello Zeal Energy, I would like price and availability for some products.' },
  { label: 'Book an installation or service', text: 'Hello Zeal Energy, I would like to book an installation / service visit.' },
  { label: 'Schedule a recycling pickup', text: 'Hello Zeal Energy, I would like to schedule an e-waste recycling pickup.' },
  { label: 'Emergency fault support', text: 'Hello Zeal Energy, I need urgent help with an electrical fault.' },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const panel = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    panel.current?.querySelector('button, textarea')?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const send = (text) => {
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
    setOpen(false);
    setMsg('');
  };

  return (
    <div className={`wa ${open ? 'is-open' : ''}`}>
      {open && (
        <div className="wa__panel" ref={panel} role="dialog" aria-label="Chat with Zeal Energy on WhatsApp">
          <div className="wa__head">
            <span className="wa__avatar">
              <img src="/icon-192.png" alt="" width="40" height="40" />
            </span>
            <div>
              <strong>Zeal Energy</strong>
              <small>Replies during business hours</small>
            </div>
            <button type="button" className="wa__close" onClick={() => setOpen(false)} aria-label="Close chat">
              <X />
            </button>
          </div>
          <div className="wa__body">
            <p className="wa__bubble">Hi there 👋 How can we help you today? Pick a topic or type your message.</p>
            <ul className="wa__presets">
              {presets.map((p) => (
                <li key={p.label}>
                  <button type="button" onClick={() => send(p.text)}>
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <form
            className="wa__form"
            onSubmit={(e) => {
              e.preventDefault();
              if (msg.trim()) send(msg.trim());
            }}
          >
            <label htmlFor="wa-msg" className="sr-only">
              Your message
            </label>
            <textarea
              id="wa-msg"
              rows={1}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (msg.trim()) send(msg.trim());
                }
              }}
              placeholder="Type a message"
            />
            <button type="submit" aria-label="Send on WhatsApp" disabled={!msg.trim()}>
              <Send />
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="wa__fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        aria-expanded={open}
      >
        {open ? <X /> : <WhatsAppIcon />}
      </button>
    </div>
  );
}
