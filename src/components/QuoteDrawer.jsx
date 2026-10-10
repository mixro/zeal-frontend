import { useEffect, useRef } from 'react';
import { CheckCircle2, ClipboardList, Minus, Plus, Trash2, X } from 'lucide-react';
import { SmartLink } from './SmartLink';
import { useQuote } from '../context/QuoteContext';

export function QtyStepper({ value, onChange, label = 'Quantity', small }) {
  return (
    <div className={`qty ${small ? 'qty--sm' : ''}`} role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= 1} aria-label="Decrease quantity">
        <Minus />
      </button>
      <input
        type="number"
        min="1"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 1)}
        aria-label={label}
      />
      <button type="button" onClick={() => onChange(value + 1)} aria-label="Increase quantity">
        <Plus />
      </button>
    </div>
  );
}

export default function QuoteDrawer() {
  const { items, open, setOpen, setQty, remove, count, toast, dismissToast } = useQuote();
  const closeBtn = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    closeBtn.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, setOpen]);

  return (
    <>
      <div className={`drawer drawer--right ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <aside className="drawer__panel quote-drawer" role="dialog" aria-modal="true" aria-label="Quote list" inert={open ? undefined : ''}>
          <div className="drawer__head">
            <h2 className="quote-drawer__title">
              Quote list <span>({count})</span>
            </h2>
            <button ref={closeBtn} type="button" className="icon-btn" onClick={() => setOpen(false)} aria-label="Close quote list">
              <X />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="quote-drawer__empty">
              <ClipboardList aria-hidden="true" />
              <h3>Your quote list is empty</h3>
              <p>Add products while you browse, then send one request for prices and availability.</p>
              <SmartLink to="/products" className="btn btn--outline" onClick={() => setOpen(false)}>
                Browse products
              </SmartLink>
            </div>
          ) : (
            <>
              <ul className="quote-drawer__list">
                {items.map((i) => (
                  <li key={i.slug}>
                    <div>
                      <SmartLink to={`/products/${i.slug}`} onClick={() => setOpen(false)} className="quote-drawer__name">
                        {i.name}
                      </SmartLink>
                      <small>{i.brand}</small>
                    </div>
                    <div className="quote-drawer__row">
                      <QtyStepper small value={i.qty} onChange={(v) => setQty(i.slug, v)} label={`Quantity of ${i.name}`} />
                      <button type="button" className="icon-btn" onClick={() => remove(i.slug)} aria-label={`Remove ${i.name}`}>
                        <Trash2 />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="drawer__foot">
                <p className="quote-drawer__note">No payment needed. We reply with prices, availability and delivery time.</p>
                <SmartLink to="/request-quote" className="btn btn--gold btn--block" onClick={() => setOpen(false)}>
                  Continue to quote request
                </SmartLink>
                <button type="button" className="btn btn--outline btn--block" onClick={() => setOpen(false)}>
                  Keep browsing
                </button>
              </div>
            </>
          )}
        </aside>
      </div>

      <div className="toast-region" aria-live="polite">
        {toast && (
          <div className="toast">
            <CheckCircle2 aria-hidden="true" />
            <p>
              <strong>Added to quote list</strong>
              <span>
                {toast.qty} × {toast.name}
              </span>
            </p>
            <button
              type="button"
              className="toast__action"
              onClick={() => {
                dismissToast();
                setOpen(true);
              }}
            >
              View list
            </button>
          </div>
        )}
      </div>
    </>
  );
}
