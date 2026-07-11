import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import { Briefcase, Globe, Settings, DollarSign, Award, Users, BarChart2, Map } from 'lucide-react';

const whatWeManage = [
  {
    icon: Briefcase,
    title: 'Business & Growth Strategy',
    desc: 'Develop roadmaps aligned with your revenue and expansion goals across channels.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Globe,
    title: 'Marketplace Strategy',
    desc: 'Advise on which platforms and channels best suit your products and margins.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: Settings,
    title: 'Operational Efficiency Review',
    desc: 'Identify bottlenecks in fulfillment, catalog, and account management operations.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: DollarSign,
    title: 'Pricing & Margin Strategy',
    desc: 'Optimize pricing structures for profitability across all channels.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Award,
    title: 'Brand Positioning Guidance',
    desc: 'Strengthen brand presence across marketplaces and D2C channels.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Users,
    title: 'Team & Process Setup',
    desc: 'Advise on building internal teams or outsourcing e-commerce operations.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: BarChart2,
    title: 'Performance Benchmarking',
    desc: 'Compare your metrics against industry and category standards for improvement.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Map,
    title: 'Expansion Planning',
    desc: 'Guide entry into new marketplaces, categories, or geographies.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
];

const whyChoose = [
  'Experienced e-commerce consultants',
  'Practical, implementation-focused advice',
  'Multi-marketplace expertise',
  'Transparent communication',
  'Customized consulting engagements',
  'Regular strategy reviews',
  'Flexible engagement models',
  'Long-term partnership approach',
];

const steps = [
  {
    title: 'Business Assessment',
    desc: 'We review your current operations, metrics, and challenges.',
  },
  {
    title: 'Strategy Development',
    desc: 'We build a customized growth and operations roadmap.',
  },
  {
    title: 'Implementation Support',
    desc: 'We guide execution alongside your team.',
  },
  {
    title: 'Ongoing Advisory',
    desc: 'We provide continued strategic support as your business scales.',
  },
];

const whoBenefits = [
  'New and established sellers',
  'Manufacturers',
  'Wholesalers',
  'Retail businesses',
  'D2C brands',
  'Private label sellers',
  'Importers and exporters',
];

const faqs = [
  {
    q: 'Do you work with businesses already selling online?',
    a: 'Yes. We work with both new sellers and established businesses looking to scale or restructure operations.',
  },
  {
    q: 'Is consulting a one-time or ongoing service?',
    a: 'We offer both one-time strategy engagements and ongoing advisory partnerships, based on your needs.',
  },
  {
    q: 'Do you help with multi-marketplace strategy?',
    a: 'Yes. We advise on channel prioritization and strategy across Amazon, Flipkart, Meesho, and D2C platforms.',
  },
];

export default function EcommerceConsulting() {
  return (
    <ServicePageTemplate
      tag="Consulting Services"
      title="E-commerce Business"
      highlight="Consulting"
      subtitle="Strategic Guidance to Scale Your Online Business"
      description="Growing an e-commerce business requires more than day-to-day operations — it needs a clear strategy across marketplaces, channels, and business functions. At V2 Ecom Services, we provide expert consulting to help brands plan, scale, and optimize their entire e-commerce operation."
      Icon={Briefcase}
      iconBg="bg-blue-50"
      iconColor="text-blue-600"
      whatWeManage={whatWeManage}
      whyChoose={whyChoose}
      steps={steps}
      whoBenefits={whoBenefits}
      faqs={faqs}
    />
  );
}
