import { Compass, Eye, Handshake, Leaf, ShieldCheck, Target } from 'lucide-react';
import Img from '../components/Img';
import { BrandStrip, CtaBand, PageHero } from '../components/ui';
import { photos } from '../data/images';
import { stats } from '../data/site';
import { useSeo } from '../lib/useSeo';
import './pages.css';

const values = [
  { icon: ShieldCheck, title: 'Safety first', text: 'Every installation is designed, built and tested to protect people and property.' },
  { icon: Handshake, title: 'Honest advice', text: 'We recommend what your system needs, not the most expensive option.' },
  { icon: Compass, title: 'Technical excellence', text: 'Our engineers train continuously on the equipment we supply and install.' },
  { icon: Leaf, title: 'Sustainability', text: 'We recover and recycle materials so the energy transition does not create new waste.' },
];

export default function About() {
  useSeo({
    title: 'About us',
    description:
      'Zeal Energy Systems and Recyclers imports, installs and services electrical equipment and provides recycling solutions in Tanzania. Learn about our mission and values.',
    path: '/about',
  });

  return (
    <>
      <PageHero
        title="Electrical solutions with a cleaner future in mind"
        intro="Zeal Energy Systems and Recyclers imports, exports, installs and services electrical equipment, and runs recycling operations that keep valuable materials in use."
        crumbs={[{ label: 'About us' }]}
      />

      <section className="section">
        <div className="container split split--media">
          <div>
            <h2>Who we are</h2>
            <div className="prose">
              <p>
                We are a Tanzanian company built around a simple idea: the businesses that depend on electricity deserve one partner who can supply
                the right equipment, install it properly and take responsibility for it at the end of its life.
              </p>
              <p>
                Our team of engineers, technicians and sourcing specialists works with manufacturers such as Siemens, Schneider Electric and ABB to
                deliver reliable systems for factories, hospitals, commercial buildings and homes. Alongside our engineering work, our recycling
                division collects and processes electronic waste and scrap, recovering materials safely and reducing landfill.
              </p>
            </div>
          </div>
          <Img image={photos.teamBlueprint} className="split__img" sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="section section--steel">
        <div className="container mv">
          <article>
            <Target aria-hidden="true" />
            <h2>Our mission</h2>
            <p>
              To provide top-quality electrical solutions and sustainable recycling services that improve efficiency, safety and environmental
              responsibility for industries, businesses and communities.
            </p>
          </article>
          <article>
            <Eye aria-hidden="true" />
            <h2>Our vision</h2>
            <p>
              To be a leading force in East Africa’s electrical and recycling sectors, known for innovation, reliability and a commitment to a
              cleaner, more energy-efficient future.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What we stand for</h2>
          </div>
          <ul className="values">
            {values.map(({ icon: I, title, text }) => (
              <li key={title}>
                <I aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <dl className="about-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>
                  {s.value} <span>{s.unit}</span>
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container split split--media split--reverse">
          <div>
            <h2>Import and distribution</h2>
            <div className="prose">
              <p>
                We import electrical and automation equipment through manufacturer and authorised distribution channels, then hold stock in Dar es
                Salaam for fast delivery. For specialised parts, our sourcing team finds the exact item, with clear lead times and pricing.
              </p>
            </div>
          </div>
          <Img image={photos.warehouse} className="split__img" sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <BrandStrip title="Brands we supply and support" />
      <CtaBand title="Let’s build something reliable together." />
    </>
  );
}
