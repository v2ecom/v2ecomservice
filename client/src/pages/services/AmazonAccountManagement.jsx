import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import amazonLogo from '../../assets/amazonlogo.png';
import {
  BarChart2, Search, LayoutGrid, Megaphone, Package,
  ShieldCheck, FileText, TrendingUp
} from 'lucide-react';

const whatWeManage = [
  {
    icon: Search,
    title: 'Product Listing Optimization',
    desc: 'Create and optimize SEO-friendly product listings with high-converting titles, bullet points, descriptions, keywords, and attributes.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Amazon SEO',
    desc: 'Improve organic rankings using advanced keyword research and listing optimization techniques.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: LayoutGrid,
    title: 'Catalog Management',
    desc: 'Manage product variations, attributes, category updates, and catalog corrections for a seamless shopping experience.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: Megaphone,
    title: 'Amazon PPC Management',
    desc: 'Create, optimize, and monitor advertising campaigns to maximize return on investment and increase profitable sales.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Package,
    title: 'Inventory Monitoring',
    desc: 'Track inventory levels, reduce stock-outs, and support inventory planning to maintain consistent sales.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: ShieldCheck,
    title: 'Account Health Management',
    desc: 'Monitor account performance metrics, policy compliance, and resolve issues to keep your account healthy.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: FileText,
    title: 'Sales Performance Reporting',
    desc: 'Receive detailed weekly and monthly reports covering sales, advertising, inventory, and business insights.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: BarChart2,
    title: 'Growth Strategy',
    desc: 'Develop customized strategies based on your business goals, market trends, and competitor analysis.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
];

const whyChoose = [
  'Dedicated Amazon account manager',
  'Marketplace experts with practical experience',
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
    desc: 'We analyze your Amazon account to identify growth opportunities.',
  },
  {
    title: 'Strategy Planning',
    desc: 'We prepare a customized roadmap tailored to your products and business goals.',
  },
  {
    title: 'Implementation',
    desc: 'Our team optimizes listings, advertising, pricing, and catalog performance.',
  },
  {
    title: 'Continuous Optimization',
    desc: 'We monitor results, refine strategies, and continuously improve account performance.',
  },
];

const whoBenefits = [
  'New Amazon sellers',
  'Established brands',
  'Manufacturers',
  'Wholesalers',
  'Retail businesses',
  'D2C brands',
  'Private label sellers',
  'Importers and exporters',
];



export default function AmazonAccountManagement() {
  return (
    <ServicePageTemplate
      tag="Amazon Services"
      title="Amazon Account Management"
      highlight="Services"
      subtitle="Grow Your Amazon Business with Expert Account Management"
      description="Managing an Amazon seller account requires constant optimization, strategic planning, and continuous monitoring. At V2 Ecom Services, we provide complete Amazon account management to help brands increase visibility, improve conversions, optimize advertising, and achieve sustainable sales growth. Whether you're a new seller or an established brand, our experienced team manages your Amazon business so you can focus on manufacturing, sourcing, and expanding your business."
      logo={amazonLogo}
      logoAlt="Amazon"
      iconBg="bg-[#FFF8F0]"
      whatWeManage={whatWeManage}
      whyChoose={whyChoose}
      steps={steps}
      whoBenefits={whoBenefits}
    />
  );
}
