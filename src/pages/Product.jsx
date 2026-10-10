import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BadgeCheck, ClipboardPlus, FileText, ShieldCheck, Truck } from 'lucide-react';
import Img from '../components/Img';
import { WhatsAppIcon } from '../components/Icon';
import { SmartLink } from '../components/SmartLink';
import { QtyStepper } from '../components/QuoteDrawer';
import { CtaBand, PageHero, ProductCard } from '../components/ui';
import { getCategory, getProduct, products } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import { useSeo } from '../lib/useSeo';
import { mailLink, productMessage, waLink } from '../lib/whatsapp';
import NotFound from './NotFound';
import './catalog.css';

export default function Product() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const [qty, setQty] = useState(1);
  const { add } = useQuote();

  useSeo({
    title: product?.name || 'Product not found',
    description: product ? `${product.summary} Request a quote from Zeal Energy, Tanzania.` : undefined,
    path: `/products/${slug}`,
  });

  if (!product) return <NotFound />;

  const cat = getCategory(product.category);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const more = related.length < 4 ? products.filter((p) => p.category !== product.category && p.featured).slice(0, 4 - related.length) : [];

  return (
    <>
      <PageHero
        title={product.name}
        crumbs={[
          { label: 'Products', to: '/products' },
          { label: cat.name, to: `/products?category=${cat.slug}` },
          { label: product.name },
        ]}
      />

      <section className="section">
        <div className="container pdp">
          <div className="pdp__media">
            <Img image={product.image} contain={product.image.local} priority sizes="(max-width: 900px) 100vw, 50vw" className="pdp__img" />
          </div>

          <div className="pdp__info">
            <div className="pdp__meta">
              <span className="badge">{product.brand}</span>
              <span className="badge badge--gold">{cat.name}</span>
            </div>
            <p className="pdp__summary">{product.summary}</p>

            <ul className="check-list">
              {product.features.map((f) => (
                <li key={f}>
                  <BadgeCheck aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="pdp__buy">
              <div className="pdp__price">
                <strong>Price on request</strong>
                <span>Pricing depends on quantity and specification. We reply within one working day.</span>
              </div>
              <div className="pdp__actions">
                <QtyStepper value={qty} onChange={setQty} />
                <button type="button" className="btn" onClick={() => add(product, qty)}>
                  <ClipboardPlus /> Add to quote list
                </button>
              </div>
              <div className="pdp__secondary">
                <a href={waLink(`${productMessage(product.name)} Quantity: ${qty}.`)} className="btn btn--wa" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> Ask on WhatsApp
                </a>
                <a
                  href={mailLink(`Datasheet request: ${product.name}`, `Hello Zeal Energy,\n\nPlease send the datasheet for: ${product.name}.\n\nThank you.`)}
                  className="btn btn--outline"
                >
                  <FileText /> Request datasheet
                </a>
              </div>
            </div>

            <ul className="pdp__assure">
              <li>
                <ShieldCheck aria-hidden="true" /> Genuine, with manufacturer warranty
              </li>
              <li>
                <Truck aria-hidden="true" /> Delivery across Tanzania
              </li>
            </ul>
          </div>
        </div>

        <div className="container pdp__specs">
          <h2>Specifications</h2>
          <table className="spec-table">
            <tbody>
              <tr>
                <th scope="row">Brand</th>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <th scope="row">Category</th>
                <td>{cat.name}</td>
              </tr>
              {Object.entries(product.specs).map(([k, v]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="spec-note">
            Specifications are typical for this product line. Tell us your exact model or rating and we’ll confirm the right variant.{' '}
            <SmartLink to="/contact">Talk to an engineer</SmartLink>.
          </p>
        </div>
      </section>

      {related.length + more.length > 0 && (
        <section className="section section--steel">
          <div className="container">
            <div className="section-head">
              <h2>{related.length ? `More in ${cat.name}` : 'You may also need'}</h2>
            </div>
            <div className="grid-products">
              {[...related, ...more].map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
