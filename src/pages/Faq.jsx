import { CtaBand, Faqs, PageHero } from '../components/ui';
import { faqs } from '../data/site';
import { useSeo } from '../lib/useSeo';
import './pages.css';

export default function Faq() {
  useSeo({
    title: 'Frequently asked questions',
    description: 'Answers about quotes, delivery, installation, recycling and payment at Zeal Energy Systems and Recyclers.',
    path: '/faq',
  });

  return (
    <>
      <PageHero title="Frequently asked questions" intro="Quick answers about quotes, delivery, installation and recycling." crumbs={[{ label: 'FAQ' }]} />
      <section className="section">
        <div className="container narrow">
          <Faqs items={faqs} />
        </div>
      </section>
      <CtaBand title="Still have a question?" text="Message us on WhatsApp or request a quote and an engineer will get back to you." />
    </>
  );
}
