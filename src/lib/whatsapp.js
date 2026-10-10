import { site } from '../data/site';

export const waLink = (message = '') =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const mailLink = (subject, body) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const productMessage = (name) =>
  `Hello Zeal Energy, I'd like to ask about: ${name}. Please share price and availability.`;

export const serviceMessage = (name) =>
  `Hello Zeal Energy, I'm interested in your ${name} service. Can we discuss my project?`;
