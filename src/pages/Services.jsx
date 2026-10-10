import { ArrowRight } from 'lucide-react';
import { SmartLink } from '../components/SmartLink';
import Img from '../components/Img';
import Icon from '../components/Icon';
import { CtaBand, PageHero } from '../components/ui';
import { serviceProcess, services } from '../data/services';
import { industries } from '../data/site';
import { useSeo } from '../lib/useSeo';
import './pages.css';

export default function Services() {
  useSeo({
    title: 'Electrical engineering services',
    description:
      'Electrical installation, industrial automation, solar and backup power, maintenance and power distribution services across Tanzania by Zeal Energy.',
    path: '/services',
  });

  return (
    <>
      <PageHero
        title="Engineering services for every stage of your power system"
        intro="Design, installation, automation and maintenance by certified engineers who know the equipment because we supply it."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((s) => (
              <SmartLink key={s.slug} to={`/services/${s.slug}`} className="service-card">
                <Img image={s.image} className="service-card__img" sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 400px" alt="" />
                <div className="service-card__body">
                  <span className="service-card__icon">
                    <Icon name={s.icon} />
                  </span>
                  <h2>{s.name}</h2>
                  <p>{s.summary}</p>
                  <span className="link-arrow">
                    Learn more <ArrowRight aria-hidden="true" />
                  </span>
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="section-head">
            <h2>How we deliver a project</h2>
            <p>A clear process means fewer surprises on site, accurate costs and systems that are documented for the people who run them.</p>
          </div>
          <ol className="steps">
            {serviceProcess.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Industries we serve</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Our engineers work in environments where downtime is expensive and safety is not negotiable.
            </p>
          </div>
          <ul className="tag-list">
            {industries.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Planning a project? Book a site visit." text="Tell us about your site and what you need. An engineer will contact you to arrange a visit and prepare a fixed quotation." />
    </>
  );
}
