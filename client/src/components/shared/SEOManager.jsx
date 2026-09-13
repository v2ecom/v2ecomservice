import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'V2 Ecom Services — Launch, Manage & Scale Your Marketplace Business';
const DEFAULT_DESCRIPTION = "India's premier marketplace growth partner. V2 Ecom Services helps sellers launch, manage, and scale businesses on Amazon, Flipkart, and Meesho with end-to-end seller management solutions.";

const PAGE_SEO = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  '/about': {
    title: 'About Us | V2 Ecom Services',
    description: 'Learn about V2 Ecom Services, a trusted marketplace growth partner helping Amazon, Flipkart, and Meesho sellers scale with expert account management.',
  },
  '/services': {
    title: 'Our Services | V2 Ecom Services',
    description: 'Explore our full range of marketplace management services: Amazon account management, PPC, listing optimization, Flipkart and Meesho management, and more.',
  },
  '/case-studies': {
    title: 'Case Studies | V2 Ecom Services',
    description: 'Real examples of how V2 Ecom Services helps sellers improve visibility, optimize advertising, and grow sales across Amazon, Flipkart, and Meesho.',
  },
  '/faq': {
    title: 'Frequently Asked Questions | V2 Ecom Services',
    description: 'Answers to common questions about marketplace management, pricing, onboarding, and working with V2 Ecom Services.',
  },
  '/blog': {
    title: 'Blog | V2 Ecom Services',
    description: 'Marketplace growth tips, seller guides, and e-commerce insights from the V2 Ecom Services team.',
  },
  '/contact': {
    title: 'Contact Us | V2 Ecom Services',
    description: 'Get in touch with V2 Ecom Services for a free marketplace consultation. Reach our team by phone, email, or the contact form.',
  },
  '/services/amazon-account-management': {
    title: 'Amazon Account Management Services | V2 Ecom Services',
    description: 'Complete Amazon account management: listing optimization, PPC, inventory monitoring, and growth strategy from experienced marketplace specialists.',
  },
  '/services/amazon-ppc-management': {
    title: 'Amazon PPC Management Services | V2 Ecom Services',
    description: 'Data-driven Amazon PPC management to lower ACOS, improve keyword targeting, and scale profitable ad spend.',
  },
  '/services/product-listing-optimization': {
    title: 'Product Listing Optimization Services | V2 Ecom Services',
    description: 'SEO-optimized titles, bullet points, and descriptions that improve visibility and convert more marketplace shoppers into buyers.',
  },
  '/services/flipkart-account-management': {
    title: 'Flipkart Account Management Services | V2 Ecom Services',
    description: 'End-to-end Flipkart seller account management to improve visibility, sales, and operational efficiency.',
  },
  '/services/meesho-account-management': {
    title: 'Meesho Account Management Services | V2 Ecom Services',
    description: 'Marketplace setup, catalog management, pricing optimization, and sales growth support for Meesho sellers.',
  },
  '/services/marketplace-onboarding': {
    title: 'Marketplace Onboarding Services | V2 Ecom Services',
    description: 'Fast, hassle-free onboarding across Amazon, Flipkart, Meesho and more, with complete documentation support.',
  },
  '/services/product-research': {
    title: 'Product Research Services | V2 Ecom Services',
    description: 'Data-backed product research to identify high-potential opportunities before you invest in inventory.',
  },
  '/services/ecommerce-consulting': {
    title: 'E-commerce Consulting Services | V2 Ecom Services',
    description: 'Strategic e-commerce consulting to help brands and manufacturers plan and execute marketplace growth.',
  },
  '/services/catalog-management': {
    title: 'Catalog Management Services | V2 Ecom Services',
    description: 'Accurate, consistent product catalog management across marketplaces to reduce errors and improve the shopping experience.',
  },
  '/services/account-health-management': {
    title: 'Account Health Management Services | V2 Ecom Services',
    description: 'Proactive account health monitoring and policy compliance support to protect your marketplace selling privileges.',
  },
};

export default function SEOManager() {
  const location = useLocation();

useEffect(() => {
  const seo = PAGE_SEO[location.pathname] ?? { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION };

          document.title = seo.title;

          let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', seo.description);
}, [location.pathname]);

return null;
}
