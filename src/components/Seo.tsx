import { Head } from 'vite-react-ssg';

export const SITE_URL = 'https://www.mhaseeb.dev';
const OG_IMAGE = `${SITE_URL}/image2.png`;

interface SeoProps {
  title: string;
  description: string;
  /** Route path beginning with "/" — e.g. "/about". Use "/" for home. */
  path: string;
  /** Optional JSON-LD structured data object(s) injected into <head>. */
  jsonLd?: object | object[];
  /** Site-root-relative image for social cards — falls back to the site OG image. */
  image?: string;
}

export default function Seo({ title, description, path, jsonLd, image }: SeoProps) {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const ogImage = image ? `${SITE_URL}${image}` : OG_IMAGE;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Haseeb Ansari" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
}
