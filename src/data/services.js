import { photos } from './images';

export const services = [
  {
    slug: 'electrical-installation',
    name: 'Electrical installation',
    icon: 'PlugZap',
    image: photos.heroTechnician,
    summary: 'Complete wiring and power installations for commercial buildings, factories and facilities.',
    intro:
      'From new builds to plant extensions, our engineers install power, lighting and control systems that meet IEC standards and pass inspection the first time.',
    includes: [
      'Low-voltage power and lighting installation',
      'Distribution board and switchgear installation',
      'Cable routing, trays, trunking and containment',
      'Earthing and lightning protection',
      'Testing, certification and handover documentation',
    ],
    faqs: [
      { q: 'Do you work on occupied buildings?', a: 'Yes. We plan work in phases and outside working hours where needed to keep your operations running.' },
      { q: 'Do you provide test certificates?', a: 'Every installation is tested and handed over with test results, as-built drawings and a completion certificate.' },
    ],
  },
  {
    slug: 'industrial-automation',
    name: 'Industrial automation & PLC',
    icon: 'Cpu',
    image: photos.robots,
    summary: 'PLC programming, SCADA and control panels that make production lines efficient and reliable.',
    intro:
      'We design, program and commission automation systems using Siemens, Schneider and other leading platforms, and upgrade legacy controls without long shutdowns.',
    includes: [
      'PLC and HMI programming',
      'SCADA and remote monitoring',
      'Control and MCC panel design and assembly',
      'Variable speed drive installation and tuning',
      'Legacy system migration and upgrades',
    ],
    faqs: [
      { q: 'Can you work with our existing PLC?', a: 'Yes. We support existing installations, back up and document programs, and migrate obsolete controllers to current models.' },
      { q: 'Do you offer remote support?', a: 'With a secure remote connection we can diagnose many faults without a site visit.' },
    ],
  },
  {
    slug: 'solar-backup-power',
    name: 'Solar & backup power',
    icon: 'Sun',
    image: photos.solarRoof,
    summary: 'Solar PV, battery storage and generator systems that cut energy bills and keep power on.',
    intro:
      'We size each system to your real load profile, then supply, install and maintain solar, battery and generator solutions for homes, businesses and off-grid sites.',
    includes: [
      'Site survey and energy audit',
      'Grid-tied, hybrid and off-grid solar systems',
      'Battery storage and UPS systems',
      'Generator supply, installation and changeover panels',
      'Monitoring and scheduled maintenance',
    ],
    faqs: [
      { q: 'How much can solar save?', a: 'It depends on your usage and roof space. After a site survey we give you a written estimate of output, savings and payback period.' },
      { q: 'Can solar run during power cuts?', a: 'Yes, with a hybrid system and batteries. We size the battery bank for the loads you need to keep running.' },
    ],
  },
  {
    slug: 'maintenance-inspection',
    name: 'Maintenance & inspection',
    icon: 'Wrench',
    image: photos.panelMultimeter,
    summary: 'Planned maintenance, thermal inspections and fault finding that prevent costly downtime.',
    intro:
      'Regular inspection catches loose connections, overloads and worn components before they fail. Our maintenance plans keep your systems safe and compliant.',
    includes: [
      'Preventive maintenance contracts',
      'Thermal imaging and power quality analysis',
      'Breaker, switchgear and transformer servicing',
      'Emergency fault finding and repair',
      'Inspection reports with recommendations',
    ],
    faqs: [
      { q: 'How often should equipment be inspected?', a: 'Most commercial and industrial systems need inspection at least once a year. Critical sites benefit from quarterly checks.' },
      { q: 'Do you handle emergency call-outs?', a: 'Yes. Contact us by phone or WhatsApp and we will dispatch an engineer as soon as possible.' },
    ],
  },
  {
    slug: 'power-distribution',
    name: 'Power distribution & substations',
    icon: 'Zap',
    image: photos.substation,
    summary: 'Transformer, switchgear and substation works for industrial sites and large facilities.',
    intro:
      'We handle power distribution projects from the utility connection to the final circuit, including transformers, ring main units and power factor correction.',
    includes: [
      'Transformer and RMU installation',
      'MV/LV switchgear installation',
      'Power factor correction systems',
      'Underground and overhead cabling',
      'Load studies and protection coordination',
    ],
    faqs: [
      { q: 'Do you coordinate with TANESCO?', a: 'Yes. We prepare documentation and coordinate with the utility for new connections and upgrades.' },
      { q: 'Can you improve our power factor?', a: 'We measure your power quality and install correction equipment to reduce penalties and losses.' },
    ],
  },
  {
    slug: 'design-consulting',
    name: 'System design & consulting',
    icon: 'DraftingCompass',
    image: photos.teamBlueprint,
    summary: 'Electrical design, load calculations and specifications for projects of any size.',
    intro:
      'Our engineers prepare designs, drawings and bills of quantities that give contractors and owners a clear, buildable plan with accurate costs.',
    includes: [
      'Load calculations and single-line diagrams',
      'Lighting and power layout design',
      'Equipment specification and BOQ preparation',
      'Energy efficiency assessments',
      'Tender support and site supervision',
    ],
    faqs: [
      { q: 'Can you design for a contractor’s tender?', a: 'Yes. We provide drawings, specifications and BOQs ready for tendering.' },
      { q: 'Do you supervise installation?', a: 'We can supervise the work of other contractors to make sure the design is built correctly.' },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const serviceProcess = [
  { title: 'Site visit', text: 'An engineer visits, assesses your needs and takes measurements.' },
  { title: 'Proposal', text: 'You receive a clear scope, timeline and fixed quotation.' },
  { title: 'Installation', text: 'Certified technicians complete the work safely and to standard.' },
  { title: 'Handover & support', text: 'We test, document and stay on hand for maintenance.' },
];
