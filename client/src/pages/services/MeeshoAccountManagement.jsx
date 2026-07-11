import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import meeshoLogo from '../../assets/meeshologo.png';
import {
  Search, LayoutGrid, Tag, PackageCheck,
  ShieldCheck, Package, FileText, TrendingUp
} from 'lucide-react';

const whatWeManage = [
  {
    icon: Search,
    title: 'Product Listing Optimization',
    desc: 'Create clear, keyword-optimized listings that attract resellers and buyers on Meesho.',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    icon: LayoutGrid,
    title: 'Catalog Management',
    desc: 'Manage product variations, pricing tiers, and catalog uploads at scale.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Tag,
    title: 'Pricing Strategy',
    desc: 'Set competitive reseller-friendly pricing while protecting your margins.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: PackageCheck,
    title: 'Order & Return Management',
    desc: 'Streamline order processing and reduce return rates effectively.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: ShieldCheck,
    title: 'Account Health Management',
    desc: 'Monitor ratings, penalties, and compliance to protect account standing on Meesho.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: Package,
    title: 'Inventory Monitoring',
    desc: 'Track stock levels to prevent cancellations and maintain visibility.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: FileText,
    title: 'Sales Performance Reporting',
    desc: 'Regular reports covering order volume, returns, and growth trends.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    desc: 'Category-specific strategies to increase orders and reseller engagement.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
];

const whyChoose = [
  'Dedicated Meesho account manager',
  'Reseller-market expertise',
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
    desc: 'We analyze your Meesho account to identify growth opportunities.',
  },
  {
    title: 'Strategy Planning',
    desc: 'We prepare a customized roadmap tailored to your catalog and goals.',
  },
  {
    title: 'Implementation',
    desc: 'Our team optimizes listings, pricing, and catalog performance.',
  },
  {
    title: 'Continuous Optimization',
    desc: 'We monitor results and continuously refine strategies for growth.',
  },
];

const whoBenefits = [
  'New Meesho sellers',
  'Established suppliers',
  'Manufacturers',
  'Wholesalers',
  'Retail businesses',
  'D2C brands',
  'Importers and exporters',
];

const faqs = [
  {
    q: 'Do you manage complete Meesho seller accounts?',
    a: 'Yes. We handle listings, catalog management, pricing, account health, and growth strategies.',
  },
  {
    q: 'Can you help reduce return rates?',
    a: 'Yes. We optimize listings and sizing information to set accurate buyer expectations and reduce returns.',
  },
  {
    q: 'Do you provide regular reports?',
    a: 'Yes. We provide regular performance reports with actionable recommendations.',
  },
];

export default function MeeshoAccountManagement() {
  return (
    <ServicePageTemplate
      tag="Meesho Services"
      title="Meesho Account Management"
      highlight="Services"
      subtitle="Grow Your Meesho Business with Expert Account Management"
      description="Meesho's reseller-driven model rewards sellers who master pricing, catalog quality, and fulfillment consistency. At V2 Ecom Services, we manage your Meesho seller account to help you increase order volume, improve ratings, and build a scalable, profitable business."
      logo={meeshoLogo}
      logoAlt="Meesho"
      iconBg="bg-[#FFF0F4]"
      whatWeManage={whatWeManage}
      whyChoose={whyChoose}
      steps={steps}
      whoBenefits={whoBenefits}
      faqs={faqs}
    />
  );
}
