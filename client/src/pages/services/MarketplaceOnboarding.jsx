import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import { UserPlus, FileCheck, Award, Lock, CreditCard, Upload, Truck, BookOpen } from 'lucide-react';

const whatWeManage = [
  {
    icon: UserPlus,
    title: 'Seller Account Registration',
    desc: 'Complete account setup on Amazon, Flipkart, Meesho, and other major marketplaces.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: FileCheck,
    title: 'Documentation & Compliance',
    desc: 'Assist with GST, business documents, and category-specific approvals.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Award,
    title: 'Brand Registry Assistance',
    desc: 'Guide you through brand registration and IP protection processes.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Lock,
    title: 'Category & Gating Approvals',
    desc: 'Navigate restricted category approvals where required for your products.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: CreditCard,
    title: 'Bank & Payment Setup',
    desc: 'Configure payment gateways and settlement accounts for your marketplace.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: Upload,
    title: 'Initial Catalog Upload',
    desc: 'Create and upload your first set of optimized product listings.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: Truck,
    title: 'Shipping & Fulfillment Setup',
    desc: 'Configure shipping settings, FBA/fulfillment programs, and logistics preferences.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: BookOpen,
    title: 'Platform Orientation',
    desc: 'Complete walkthrough of seller dashboards, policies, and best practices.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
];

const whyChoose = [
  'End-to-end onboarding support',
  'Multi-marketplace expertise',
  'Faster approval turnaround',
  'Transparent communication',
  'Step-by-step guidance',
  'Customized onboarding plans',
  'Affordable service packages',
  'Long-term partnership approach',
];

const steps = [
  {
    title: 'Free Onboarding Consultation',
    desc: 'We understand your business and identify the right marketplaces for your products.',
  },
  {
    title: 'Documentation & Registration',
    desc: 'We prepare and submit all required documents and approvals.',
  },
  {
    title: 'Account & Catalog Setup',
    desc: 'We configure your account and upload your initial catalog.',
  },
  {
    title: 'Launch & Handover',
    desc: 'We guide you through your first sales cycle and hand over a fully functional account.',
  },
];

const whoBenefits = [
  'First-time online sellers',
  'Manufacturers',
  'Wholesalers',
  'Retail businesses',
  'D2C brands',
  'Private label sellers',
  'Importers and exporters',
];

const faqs = [
  {
    q: 'Which marketplaces can you help me onboard on?',
    a: 'We assist with onboarding on Amazon, Flipkart, Meesho, and other major Indian marketplaces.',
  },
  {
    q: 'Do you help with restricted category approvals?',
    a: 'Yes. We guide you through documentation and approval processes for gated categories.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'Timelines vary by marketplace and category, but we work to complete onboarding as efficiently as possible.',
  },
];

export default function MarketplaceOnboarding() {
  return (
    <ServicePageTemplate
      tag="Onboarding Services"
      title="Marketplace Onboarding"
      highlight="Services"
      subtitle="Launch Your Business on Amazon, Flipkart & Meesho the Right Way"
      description="Getting started on a new marketplace involves more than just creating an account — it requires proper registration, documentation, category approvals, and catalog setup. At V2 Ecom Services, we handle complete marketplace onboarding so your business launches smoothly and compliantly from day one."
      Icon={UserPlus}
      iconBg="bg-teal-50"
      iconColor="text-teal-600"
      whatWeManage={whatWeManage}
      whyChoose={whyChoose}
      steps={steps}
      whoBenefits={whoBenefits}
      faqs={faqs}
    />
  );
}
