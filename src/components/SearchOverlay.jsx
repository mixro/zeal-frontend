import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CornerDownLeft, Search, X } from 'lucide-react';
import Icon from './Icon';
import { products, getCategory } from '../data/products';
import { services } from '../data/services';

const index = [
  ...products.map((p) => ({
    type: 'Product',
    title: p.name,
    sub: `${p.brand} · ${getCategory(p.category)?.name}`,
    to: `/products/${p.slug}`,
    icon: getCategory(p.category)?.icon,
    text: `${p.name} ${p.brand} ${p.summary} ${getCategory(p.category)?.name}`.toLowerCase(),
  })),
  ...services.map((s) => ({
    type: 'Service',
    title: s.name,
    sub: s.summary,
    to: `/services/${s.slug}`,
    icon: s.icon,
    text: `${s.name} ${s.summary} ${s.includes.join(' ')}`.toLowerCase(),
  })),
  { type: 'Page', title: 'E-waste recycling', sub: 'Schedule a pickup', to: '/recycling', icon: 'Recycle', text: 'recycling e-waste scrap pickup collection battery' },
];

export default function SearchOverlay({ onClose }) {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const input = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    input.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const results = useMemo(() => {
    const terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return index.slice(0, 6);
    return index.filter((r) => terms.every((t) => r.text.includes(t))).slice(0, 8);
  }, [q]);

  useEffect(() => setActive(0), [q]);

  const go = (r) => {
    navigate(r.to);
    onClose();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      if (results[active]) go(results[active]);
      else if (q.trim()) {
        navigate(`/products?q=${encodeURIComponent(q.trim())}`);
        onClose();
      }
    }
  };

  return (
    <div className="search" role="dialog" aria-modal="true" aria-label="Search">
      <div className="search__scrim" onClick={onClose} />
      <div className="search__panel">
        <div className="search__bar">
          <Search aria-hidden="true" />
          <input
            ref={input}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search products, brands or services"
            aria-label="Search products, brands or services"
            aria-controls="search-results"
            aria-activedescendant={results[active] ? `sr-${active}` : undefined}
          />
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close search">
            <X />
          </button>
        </div>
        <ul id="search-results" className="search__results" role="listbox">
          {!q && <li className="search__hint">Suggestions</li>}
          {results.map((r, i) => (
            <li key={r.to} id={`sr-${i}`} role="option" aria-selected={i === active}>
              <button type="button" className={`search__result ${i === active ? 'is-active' : ''}`} onMouseEnter={() => setActive(i)} onClick={() => go(r)}>
                <span className="search__icon">
                  <Icon name={r.icon} />
                </span>
                <span className="search__text">
                  <strong>{r.title}</strong>
                  <small>{r.sub}</small>
                </span>
                <span className="search__type">{r.type}</span>
              </button>
            </li>
          ))}
          {q && results.length === 0 && (
            <li className="search__none">
              No matches for “{q}”. Press Enter to search all products, or ask us on WhatsApp. We source parts on request.
            </li>
          )}
        </ul>
        <div className="search__foot">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> to move
          </span>
          <span>
            <kbd>
              <CornerDownLeft />
            </kbd>{' '}
            to open
          </span>
          <span>
            <kbd>Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
