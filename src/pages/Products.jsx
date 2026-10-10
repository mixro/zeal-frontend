import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LayoutGrid, List, PackageSearch, Search, SlidersHorizontal, X } from 'lucide-react';
import Icon, { WhatsAppIcon } from '../components/Icon';
import { CtaBand, PageHero, ProductCard } from '../components/ui';
import { categories, getCategory, productBrands, products } from '../data/products';
import { useSeo } from '../lib/useSeo';
import { waLink } from '../lib/whatsapp';
import { load, save } from '../lib/storage';
import './catalog.css';

const sorters = {
  featured: (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  az: (a, b) => a.name.localeCompare(b.name),
  za: (a, b) => b.name.localeCompare(a.name),
  brand: (a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name),
};

export default function Products() {
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || '';
  const brand = params.get('brand') || '';
  const q = params.get('q') || '';
  const sort = params.get('sort') || 'featured';
  const [layout, setLayoutState] = useState(() => load('zeal.layout', 'grid'));
  const [filtersOpen, setFiltersOpen] = useState(false);
  const activeCat = getCategory(category);

  useSeo({
    title: activeCat ? activeCat.name : 'Products',
    description: activeCat
      ? `${activeCat.name}: ${activeCat.blurb}. Genuine equipment supplied across Tanzania by Zeal Energy. Request a quote.`
      : 'Browse PLCs, drives, breakers, cables, solar and electronic components from Siemens, Schneider Electric, ABB and more. Request a quote.',
    path: '/products',
  });

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const setLayout = (l) => {
    setLayoutState(l);
    save('zeal.layout', l);
  };

  const list = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return products
      .filter((p) => !category || p.category === category)
      .filter((p) => !brand || p.brand === brand)
      .filter((p) => {
        if (!terms.length) return true;
        const hay = `${p.name} ${p.brand} ${p.summary} ${getCategory(p.category)?.name}`.toLowerCase();
        return terms.every((t) => hay.includes(t));
      })
      .sort(sorters[sort] || sorters.featured);
  }, [category, brand, q, sort]);

  const activeFilters = [
    category && { key: 'category', label: activeCat?.name },
    brand && { key: 'brand', label: brand },
    q && { key: 'q', label: `“${q}”` },
  ].filter(Boolean);

  return (
    <>
      <PageHero
        title={activeCat ? activeCat.name : 'Products'}
        intro={
          activeCat
            ? `${activeCat.blurb}. Add what you need to your quote list and we’ll confirm price and availability.`
            : 'Genuine electrical, automation and energy equipment. Add items to your quote list and send one request for prices and delivery.'
        }
        crumbs={activeCat ? [{ label: 'Products', to: '/products' }, { label: activeCat.name }] : [{ label: 'Products' }]}
      />

      <section className="section catalog-section">
        <div className="container catalog">
          <aside className={`filters ${filtersOpen ? 'is-open' : ''}`} aria-label="Filters">
            <div className="filters__head">
              <h2>Filters</h2>
              <button type="button" className="icon-btn filters__close" onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X />
              </button>
            </div>

            <div className="filters__group">
              <h3>Category</h3>
              <ul>
                <li>
                  <button type="button" className={!category ? 'is-active' : ''} onClick={() => update('category', '')}>
                    All products <span>{products.length}</span>
                  </button>
                </li>
                {categories.map((c) => (
                  <li key={c.slug}>
                    <button type="button" className={category === c.slug ? 'is-active' : ''} onClick={() => update('category', c.slug)}>
                      <Icon name={c.icon} />
                      {c.name}
                      <span>{products.filter((p) => p.category === c.slug).length}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filters__group">
              <h3>Brand</h3>
              <ul>
                <li>
                  <button type="button" className={!brand ? 'is-active' : ''} onClick={() => update('brand', '')}>
                    All brands
                  </button>
                </li>
                {productBrands.map((b) => (
                  <li key={b}>
                    <button type="button" className={brand === b ? 'is-active' : ''} onClick={() => update('brand', b)}>
                      {b}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filters__help">
              <strong>Need something not listed?</strong>
              <p>We source thousands of parts on request. Send us the part number.</p>
              <a href={waLink('Hello Zeal Energy, can you source this part for me? Part number: ')} className="btn btn--wa btn--sm" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Ask on WhatsApp
              </a>
            </div>
          </aside>
          {filtersOpen && <div className="filters__scrim" onClick={() => setFiltersOpen(false)} />}

          <div className="catalog__main">
            <div className="toolbar">
              <div className="toolbar__search">
                <Search aria-hidden="true" />
                <input
                  type="search"
                  value={q}
                  onChange={(e) => update('q', e.target.value)}
                  placeholder="Search by name, brand or part"
                  aria-label="Search products"
                />
              </div>
              <button type="button" className="btn btn--outline btn--sm toolbar__filters" onClick={() => setFiltersOpen(true)}>
                <SlidersHorizontal /> Filters
              </button>
              <label className="toolbar__sort">
                <span className="sr-only">Sort by</span>
                <select className="select" value={sort} onChange={(e) => update('sort', e.target.value === 'featured' ? '' : e.target.value)}>
                  <option value="featured">Sort: Popular</option>
                  <option value="az">Name: A to Z</option>
                  <option value="za">Name: Z to A</option>
                  <option value="brand">Brand</option>
                </select>
              </label>
              <div className="toolbar__layout" role="group" aria-label="Layout">
                <button type="button" className={layout === 'grid' ? 'is-active' : ''} onClick={() => setLayout('grid')} aria-label="Grid view" aria-pressed={layout === 'grid'}>
                  <LayoutGrid />
                </button>
                <button type="button" className={layout === 'list' ? 'is-active' : ''} onClick={() => setLayout('list')} aria-label="List view" aria-pressed={layout === 'list'}>
                  <List />
                </button>
              </div>
            </div>

            <div className="results-meta" aria-live="polite">
              <span>
                {list.length} {list.length === 1 ? 'product' : 'products'}
              </span>
              {activeFilters.map((f) => (
                <button key={f.key} type="button" className="chip" onClick={() => update(f.key, '')} aria-label={`Remove filter ${f.label}`}>
                  {f.label} <X aria-hidden="true" />
                </button>
              ))}
              {activeFilters.length > 1 && (
                <button type="button" className="chip chip--clear" onClick={() => setParams({}, { replace: true })}>
                  Clear all
                </button>
              )}
            </div>

            {list.length ? (
              <div className={layout === 'list' ? 'list-products' : 'grid-products'}>
                {list.map((p) => (
                  <ProductCard key={p.slug} product={p} layout={layout} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <PackageSearch aria-hidden="true" />
                <h3>No products match these filters</h3>
                <p>Clear a filter, or send us the part number and we’ll source it for you.</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <button type="button" className="btn btn--outline btn--sm" onClick={() => setParams({}, { replace: true })}>
                    Clear filters
                  </button>
                  <a href={waLink(`Hello Zeal Energy, I'm looking for: ${q}`)} className="btn btn--wa btn--sm" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> Ask us to source it
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CtaBand title="Have a full parts list or BOQ?" text="Send it as it is: a spreadsheet, photo or PDF. We’ll match every line and send back one consolidated quotation." />
    </>
  );
}
