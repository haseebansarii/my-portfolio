import { faqs, services } from './portfolio';
import { SITE_URL } from '../components/Seo';

// FAQPage structured data — can earn rich results in Google and is highly
// digestible for LLMs. Built from the same FAQ content shown on the page.
export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

// Services offered — tells search engines exactly what is for sale and that it
// is offered remotely to clients in the United States.
export const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Development Services by Haseeb Ansari',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.description,
      serviceType: s.title,
      areaServed: { '@type': 'Country', name: 'United States' },
      provider: {
        '@type': 'Person',
        name: 'Haseeb Ansari',
        url: `${SITE_URL}/`,
      },
    },
  })),
};
