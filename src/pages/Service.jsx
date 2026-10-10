import { useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import Img from '../components/Img';
import Icon, { WhatsAppIcon } from '../components/Icon';
import { SmartLink } from '../components/SmartLink';
import { CtaBand, Faqs, PageHero } from '../components/ui';
import { getService, serviceProcess, services } from '../data/services';
import { site } from '../data/site';
import { useSeo } from '../lib/useSeo';
import { serviceMessage, waLink } from '../lib/whatsapp';
import NotFound from './NotFound';
import './pages.css';

export default function Service() {
  const { slug } = useParams();
  const service = getService(slug);

  useSeo({
    title: service?.name || 'Service not found',
    description: service ? `${service.summary} Zeal Energy, Tanzania.` : undefined,
    path: `/services/${slug}`,
  });

  if (!service) return <NotFound />;
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero title={service.name} intro={service.summary} crumbs={[{ label: 'Services', to: '/services' }, { label: service.name }]} />

      <section className="section">
        <div className="container service-detail">
          <div className="service-detail__main">
            <Img image={service.image} priority className="service-detail__img" sizes="(max-width: 960px) 100vw, 66vw" />
            <p className="service-detail__intro">{service.intro}</p>

            <h2>What’s included</h2>
            <ul className="check-list check-list--cols">
              {service.includes.map((i) => (
                <li key={i}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <h2>How it works</h2>
            <ol className="steps">
              {serviceProcess.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>

            <h2>Questions about {service.name.toLowerCase()}</h2>
            <Faqs items={service.faqs} />
          </div>

          <aside className="service-detail__side">
            <div className="side-card">
              <h2>Talk to an engineer</h2>
              <p>Describe your project and we’ll arrange a site visit or send a quotation.</p>
              <SmartLink to={`/request-quote?service=${service.slug}`} className="btn btn--gold btn--block">
                Request a quote
              </SmartLink>
              <a href={waLink(serviceMessage(service.name))} className="btn btn--wa btn--block" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> WhatsApp us
              </a>
              <a href={site.phoneHref} className="btn btn--outline btn--block">
                <Phone /> {site.phone}
              </a>
            </div>
            <nav className="side-nav" aria-label="Other services">
              <h2>Other services</h2>
              <ul>
                {others.map((s) => (
                  <li key={s.slug}>
                    <SmartLink to={`/services/${s.slug}`}>
                      <Icon name={s.icon} />
                      {s.name}
                      <ArrowRight aria-hidden="true" />
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <CtaBand waText={serviceMessage(service.name)} />
    </>
  );
}
