import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const SEOHead = ({ title, description, canonical, ogImage = "https://lovable.dev/opengraph-image-p98pqg.png" }: SEOHeadProps) => {
  useEffect(() => {
    // Set title
    document.title = title;
    
    // Set meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    // Set canonical link
    let canonical_element = document.querySelector('link[rel="canonical"]');
    if (!canonical_element) {
      canonical_element = document.createElement('link');
      canonical_element.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical_element);
    }
    canonical_element.setAttribute('href', canonical);
    
    // Set meta tags
    setMetaTag('description', description);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', canonical, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
  }, [title, description, canonical, ogImage]);
  
  return null;
};

export default SEOHead;
