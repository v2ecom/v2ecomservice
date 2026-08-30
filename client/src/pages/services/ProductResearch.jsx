import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import { BarChart2, DollarSign, Users, Search, Compass, Tag, Star, FileText } from 'lucide-react';

const whatWeManage = [
  {
    icon: BarChart2,
    title: 'Market Demand Analysis',
    desc: 'Evaluate search volume, seasonality, and category trends across marketplaces.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: DollarSign,
    title: 'Profitability Analysis',
    desc: 'Assess costs, fees, and margins to identify viable and high-return products.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Users,
    title: 'Competitor Benchmarking',
    desc: 'Analyze top competitors\' pricing, listings, reviews, and strategies.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: Search,
    title: 'Keyword & Search Trend Research',
    desc: 'Identify high-opportunity keywords for product positioning and discoverability.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Compass,
    title: 'Category & Niche Identification',
    desc: 'Discover underserved niches with strong growth potential.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: Tag,
    title: 'Pricing Strategy Recommendations',
    desc: 'Suggest competitive pricing based on market benchmarks and competitor analysis.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Star,
    title: 'Review & Rating Analysis',
    desc: 'Identify common customer complaints and improvement opportunities.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: FileText,
    title: 'Product Launch Feasibility Reports',
    desc: 'Comprehensive reports to support go/no-go decisions for new products.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
];

const whyChoose = [
  'Data-driven research methodology',
  'Marketplace-specific insights',
  'Actionable, easy-to-understand reports',
  'Transparent communication',
  'Custom research scopes',
  'Regular market updates',
  'Affordable service plans',
  'Long-term partnership approach',
];

const steps = [
  {
    title: 'Discovery Call',
    desc: 'We understand your business goals and target categories.',
  },
  {
    title: 'Research & Analysis',
    desc: 'We conduct in-depth market, product, and competitor research.',
  },
  {
    title: 'Report Delivery',
    desc: 'We present findings with clear, actionable recommendations.',
  },
  {
    title: 'Ongoing Support',
    desc: 'We provide continued research support as your catalog evolves.',
  },
];

const whoBenefits = [
  'New sellers',
  'Established brands',
  'Manufacturers',
  'Wholesalers',
  'Retail businesses',
  'D2C brands',
  'Private label sellers',
  'Importers and exporters',
];



export default function ProductResearch() {
  return (
    <ServicePageTemplate
      tag="Research Services"
      title="Product Research &"
      highlight="Competitor Analysis"
      subtitle="Make Smarter Product Decisions with Data-Driven Research"
      description="Choosing the right products and understanding your competition are the foundation of e-commerce success. At V2 Ecom Services, we conduct in-depth product research and competitor analysis to help you identify profitable opportunities and build a winning catalog strategy."
      Icon={Search}
      iconBg="bg-blue-50"
      iconColor="text-blue-600"
      whatWeManage={whatWeManage}
      whyChoose={whyChoose}
      steps={steps}
      whoBenefits={whoBenefits}
    />
  );
}
