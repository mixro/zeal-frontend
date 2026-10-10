import { PageHero } from '../components/ui';
import { site } from '../data/site';
import { useSeo } from '../lib/useSeo';
import './pages.css';

// Starter text. Have it reviewed by your legal adviser before publishing.
const content = {
  privacy: {
    title: 'Privacy policy',
    sections: [
      [
        'What we collect',
        'When you send a quote request, recycling pickup request or message, we receive the details you choose to share, such as your name, phone number, email, company and location. This website does not use advertising or tracking cookies.',
      ],
      [
        'How we use it',
        'We use your details only to respond to your request, prepare quotations, arrange deliveries, installations or collections, and keep records required by law.',
      ],
      [
        'Information stored on your device',
        'Your quote list and unfinished quote form are saved in your browser so you do not lose them. This information stays on your device and is not sent to us until you choose to send a request.',
      ],
      [
        'Sharing',
        'We do not sell your information. We share it only with service providers who help us deliver your order, or when required by law. Messages you send through WhatsApp or email are also subject to those services’ own privacy policies.',
      ],
      ['Your choices', `You can ask us to update or delete your information at any time by emailing ${site.email}.`],
    ],
  },
  terms: {
    title: 'Terms of service',
    sections: [
      [
        'Information on this website',
        'Product descriptions and specifications are provided for guidance. Exact models, ratings, prices and availability are confirmed in your written quotation.',
      ],
      [
        'Quotations',
        'Quotations are valid for the period stated on them. Prices may change due to exchange rates, supplier pricing or changes to the requested scope.',
      ],
      [
        'Orders and payment',
        'An order is confirmed when we receive your written acceptance and any agreed deposit. Payment terms are stated on each quotation or agreed in a supply contract.',
      ],
      [
        'Warranty',
        'Products carry the manufacturer’s warranty. Installation workmanship is guaranteed for the period stated in your contract.',
      ],
      ['Contact', `Questions about these terms can be sent to ${site.email} or ${site.phone}.`],
    ],
  },
};

export default function Legal({ kind }) {
  const page = content[kind] || content.privacy;
  useSeo({ title: page.title, path: `/${kind}` });

  return (
    <>
      <PageHero title={page.title} crumbs={[{ label: page.title }]} />
      <section className="section">
        <div className="container narrow prose legal">
          <p className="lede">
            {site.name} (“we”, “us”) is committed to being clear about how we work. Last updated {new Date().getFullYear()}.
          </p>
          {page.sections.map(([h, t]) => (
            <div key={h}>
              <h2>{h}</h2>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
