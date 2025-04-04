// src/components/Seo.tsx
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description = 'Portfolio von Chris Schubert – Webdesign & React Entwicklung aus Potsdam.',
  keywords = 'Chris Schubert, Webdesign, Potsdam, React, Frontend, UI Design',
  image = 'https://deine-domain.de/assets/og-image.jpg',
  url = 'https://deine-domain.de',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="Chris Schubert" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);

export default Seo;
