// Company details used across the site. Edit here and every page updates.
export const site = {
  name: 'Zeal Energy Systems and Recyclers',
  shortName: 'Zeal Energy',
  phone: '+255 692 897 243',
  phoneHref: 'tel:+255692897243',
  whatsapp: '255692897243', // international format, no "+" or spaces
  email: 'zeal@zeal.co.tz',
  address: 'Dar es Salaam, Tanzania',
  mapQuery: 'Dar es Salaam, Tanzania',
  hours: [
    { days: 'Monday – Friday', time: '08:00 – 17:30' },
    { days: 'Saturday', time: '09:00 – 14:00' },
    { days: 'Sunday & public holidays', time: 'Closed' },
  ],
  hoursShort: 'Mon–Fri 08:00–17:30 · Sat 09:00–14:00',
  url: 'https://zeal.co.tz',
  // Add the full profile URLs to show icons in the footer. Empty ones are hidden.
  socials: {
    facebook: '',
    instagram: '',
    linkedin: '',
    x: '',
    youtube: '',
  },
};

// Headline figures shown on the home and about pages. Update them as the business grows.
export const stats = [
  { value: '6,800+', unit: 'tonnes', label: 'of waste collected and recycled' },
  { value: '8+', unit: 'brands', label: 'of genuine equipment supplied' },
  { value: '1', unit: 'working day', label: 'typical reply time for quotes' },
  { value: '6', unit: 'service lines', label: 'from design to maintenance' },
];

export const brands = [
  { name: 'Siemens', logo: '/img/brands/siemens-logo.webp', w: 400, h: 77 },
  { name: 'Schneider Electric', logo: '/img/brands/schneider-electric.webp', w: 355, h: 111 },
  { name: 'ABB', logo: '/img/brands/ABB.webp', w: 298, h: 120 },
  { name: 'Legrand', logo: '/img/brands/legrand.webp', w: 400, h: 101 },
  { name: 'Mitsubishi Electric', logo: '/img/brands/mitshubishi.webp', w: 131, h: 120 },
  { name: 'General Electric', logo: '/img/brands/general-electric.webp', w: 118, h: 120 },
  { name: 'NXP', logo: '/img/brands/NXP.webp', w: 334, h: 120 },
  { name: 'SolarCity', logo: '/img/brands/solarcity.webp', w: 351, h: 94 },
];

export const industries = [
  'Manufacturing & processing',
  'Mining & quarrying',
  'Hospitals & healthcare',
  'Data centres & telecoms',
  'Commercial buildings',
  'Agriculture & agro-processing',
  'Hotels & hospitality',
  'Utilities & public sector',
];

export const faqs = [
  {
    q: 'How do I get a price for products or a project?',
    a: 'Add products to your quote list, or open the Request a quote form and describe what you need. Send it by WhatsApp or email and our sales team replies with pricing and availability, usually within one working day.',
  },
  {
    q: 'Do you supply genuine, branded equipment?',
    a: 'Yes. We source from manufacturers and their authorised distributors, including Siemens, Schneider Electric, ABB and Legrand, and every item ships with its original documentation and warranty.',
  },
  {
    q: 'Can you deliver outside Dar es Salaam?',
    a: 'We deliver across Tanzania. Delivery cost and lead time depend on the order size and location, and are included in your quote.',
  },
  {
    q: 'Do you install the equipment you sell?',
    a: 'Yes. Our engineers handle design, installation, testing and commissioning, then offer maintenance plans so your system stays reliable.',
  },
  {
    q: 'What electronic waste do you collect for recycling?',
    a: 'Computers and IT equipment, cables, batteries, circuit boards, electrical panels, motors and other metal scrap. We collect from homes, offices and industrial sites, or you can drop off at our facility.',
  },
  {
    q: 'Can I get a certificate for recycled equipment?',
    a: 'Businesses receive a recycling report for each collection, which you can use for your environmental and asset-disposal records.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Bank transfer and mobile money for most orders. Payment terms for regular business customers can be agreed with our sales team.',
  },
];
