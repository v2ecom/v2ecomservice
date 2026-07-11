import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import flipkartLogo from '../../assets/flipkartlogo.png';
import {
  Search, LayoutGrid, Megaphone, Package,
  ShieldCheck, Tag, FileText, TrendingUp
} from 'lucide-react';

const whatWeManage = [
  {
    icon: Search,
    title: 'Product Listing Optimization',
    desc: 'Create SEO-friendly listings with optimized titles, descriptions, and keywords for Flipkart.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: LayoutGrid,
    title: 'Catalog Management',
    desc: 'Manage product variations, attributes, and category mapping for smooth navigation.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Megaphone,
    title: 'Flipkart Ads (PPC) Management',
    desc: 'Run and optimize advertising campaigns to increase visibility and sales on Flipkart.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Package,
    title: 'Inventory & Order Management',
    desc: 'Track stock levels and ensure smooth order fulfillment across your catalog.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: ShieldCheck,
    title: 'Account Health Management',
    desc: 'Monitor seller ratings, compliance, and policy adherence on Flipkart.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Tag,
    title: 'Pricing & Promotions Strategy',
    desc: 'Plan competitive pricing and participate in Flipkart sales events effectively.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: FileText,
    title: 'Sales Performance Reporting',
    desc: 'Weekly and monthly reports covering sales, ads, and growth insights.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    desc: 'Custom strategies based on category trends and competitor analysis on Flipkart.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
];

const whyChoose = [
  'Dedicated Flipkart account manager',
  'Platform-specific marketplace expertise',
  'Data-driven optimization',
  'Transparent communication',
  'Regular performance reviews',
  'Customized business strategies',
  'Affordable service plans',
  'Long-term partnership approach',
];

const steps = [
  {
    title: 'Free Account Audit',
    desc: 'We analyze your Flipkart account to identify growth opportunities.',
  },
  {
    title: 'Strategy Planning',
    desc: 'We prepare a customized roadmap tailored to your products and goals.',
  },
  {
    title: 'Implementation',
    desc: 'Our team optimizes listings, advertising, pricing, and catalog performance.',
  },
  {
    title: 'Continuous Optimization',
    desc: 'We monitor results and continuously refine strategies for sustained growth.',
  },
];

const whoBenefits = [
  'New Flipkart sellers',
  'Established brands',
  'Manufacturers',
  'Wholesalers',
  'Retail businesses',
  'D2C brands',
  'Private label sellers',
  'Importers and exporters',
];

const faqs = [
  {
    q: 'Do you manage complete Flipkart seller accounts?',
    a: 'Yes. We handle listings, advertising, catalog management, account health, reporting, and growth strategies.',
  },
  {
    q: 'Can you help during Flipkart sale events?',
    a: 'Yes. We plan pricing, inventory, and promotional strategies to maximize performance during major sale events.',
  },
  {
    q: 'Do you provide regular reports?',
    a: 'Yes. We provide weekly and monthly performance reports with actionable recommendations.',
  },
];

export default function FlipkartAccountManagement() {
  return (
    <ServicePageTemplate
      tag="Flipkart Services"
      title="Flipkart Account Management"
      highlight="Services"
      subtitle="Grow Your Flipkart Business with Expert Account Management"
      description="Flipkart is one of India's largest marketplaces, but success requires platform-specific strategy — from catalog compliance to Flipkart Ads. At V2 Ecom Services, we manage your Flipkart seller account end-to-end, helping you increase visibility, improve conversions, and scale sales sustainably."
      logo={flipkartLogo}
      logoAlt="Flipkart"
      iconBg="bg-[#F0F5FF]"
      whatWeManage={whatWeManage}
      whyChoose={whyChoose}
      steps={steps}
      whoBenefits={whoBenefits}
      faqs={faqs}
    />
  );
}
