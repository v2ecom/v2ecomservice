import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import amazonLogo from '../../assets/amazonlogo.png';
import {
  LayoutGrid, Search, TrendingUp, XCircle, Wallet,
  FlaskConical, FileText, Rocket
} from 'lucide-react';

const whatWeManage = [
  {
    icon: LayoutGrid,
    title: 'Campaign Setup & Structure',
    desc: 'Build organized campaign structures for Sponsored Products, Sponsored Brands, and Sponsored Display.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: Search,
    title: 'Keyword Research & Targeting',
    desc: 'Identify high-converting keywords and product targets using competitor and search-term data.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Bid Optimization',
    desc: 'Adjust bids daily based on performance to maximize returns and control ad spend.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: XCircle,
    title: 'Negative Keyword Management',
    desc: 'Eliminate wasted spend by filtering out irrelevant search terms.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: Wallet,
    title: 'Budget Allocation',
    desc: 'Distribute budgets across campaigns based on profitability and seasonality.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: FlaskConical,
    title: 'A/B Testing',
    desc: 'Test ad creatives, targeting, and placements to identify winning combinations.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: FileText,
    title: 'Performance Reporting',
    desc: 'Weekly and monthly reports covering spend, sales, ad efficiency, overall profitability, and conversion trends.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Rocket,
    title: 'Product Launch Campaigns',
    desc: 'Aggressive ranking strategies to boost visibility for new listings.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
];

const whyChoose = [
  'Certified PPC specialists',
  'Daily campaign monitoring',
  'Transparent spend reporting',
  'Focus on profitability, not just visibility',
  'Customized bidding strategies',
  'Regular strategy calls',
  'Affordable management plans',
  'Long-term partnership approach',
];

const steps = [
  {
    title: 'Free PPC Audit',
    desc: 'We review your existing campaigns to identify wasted spend and missed opportunities.',
  },
  {
    title: 'Strategy Planning',
    desc: 'We build a keyword and campaign strategy aligned with your margins and goals.',
  },
  {
    title: 'Implementation',
    desc: 'Campaigns are launched, structured, and optimized from day one.',
  },
  {
    title: 'Continuous Optimization',
    desc: 'We refine bids, budgets, and targeting weekly for sustained performance.',
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



export default function AmazonPPCManagement() {
  return (
    <ServicePageTemplate
      tag="Amazon Advertising"
      title="Amazon PPC Management"
      highlight="Services"
      subtitle="Maximize Sales with Data-Driven Amazon Advertising"
      description="Running profitable Amazon ads requires more than just boosting a product — it demands constant bid adjustments, keyword refinement, and budget control. At V2 Ecom Services, we manage Sponsored Products, Sponsored Brands, and Sponsored Display campaigns to help you reduce ad costs, increase visibility, and drive consistent, profitable sales."
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
