import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import QuoteDrawer from './components/QuoteDrawer';
import { BackToTop, PageLoader, ScrollToTop } from './components/ui';
import { pages } from './lib/routes';

const { Home, Products, Product, Services, Service, Recycling, About, Contact, Quote, Faq, Legal, NotFound } = pages;

export default function App() {
  // After the first page is idle, quietly fetch the most visited pages.
  useEffect(() => {
    const warm = () => [pages.Products, pages.Services, pages.Quote, pages.Contact].forEach((p) => p.preload());
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(warm, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(warm, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<Service />} />
            <Route path="/recycling" element={<Recycling />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-quote" element={<Quote />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy" element={<Legal kind="privacy" />} />
            <Route path="/terms" element={<Legal kind="terms" />} />
            {/* Old URLs from the previous site */}
            <Route path="/about-us" element={<About />} />
            <Route path="/services-and-installations" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <QuoteDrawer />
      <WhatsAppWidget />
      <BackToTop />
    </>
  );
}
