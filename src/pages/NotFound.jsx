import { Search } from 'lucide-react';
import { SmartLink } from '../components/SmartLink';
import { useSeo } from '../lib/useSeo';
import { categories } from '../data/products';
import './pages.css';

export default function NotFound() {
  useSeo({ title: 'Page not found' });
  return (
    <section className="section notfound">
      <div className="container notfound__inner">
        <span className="notfound__code" aria-hidden="true">
          404
        </span>
        <h1>This page has moved or no longer exists</h1>
        <p className="lede">The link may be from our old website. Try one of these instead, or search the catalogue.</p>
        <div className="notfound__actions">
          <SmartLink to="/" className="btn">
            Go to home
          </SmartLink>
          <SmartLink to="/products" className="btn btn--outline">
            <Search /> Browse products
          </SmartLink>
        </div>
        <ul className="tag-list">
          {categories.map((c) => (
            <li key={c.slug}>
              <SmartLink to={`/products?category=${c.slug}`}>{c.name}</SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
