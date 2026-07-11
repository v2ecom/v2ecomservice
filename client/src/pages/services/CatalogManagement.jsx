import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import { Upload, LayoutGrid, Tag, AlertTriangle, Copy, Image, RefreshCw, FileText } from 'lucide-react';

const whatWeManage = [
  {
    icon: Upload,
    title: 'Bulk Catalog Uploads',
    desc: 'Efficiently upload large product catalogs using marketplace-specific templates.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: LayoutGrid,
    title: 'Product Variation Management',
    desc: 'Organize size, color, and style variations correctly under parent listings.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Tag,
    title: 'Attribute & Category Mapping',
    desc: 'Ensure products are placed in accurate categories with complete attributes.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: AlertTriangle,
    title: 'Catalog Error Correction',
    desc: 'Identify and fix suppressed, flagged, or incomplete listings efficiently.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: Copy,
    title: 'Duplicate Listing Resolution',
    desc: 'Detect and resolve duplicate or conflicting catalog entries.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: Image,
    title: 'Image & Content Compliance',
    desc: 'Ensure listings meet marketplace image and content guidelines.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: RefreshCw,
    title: 'Inventory Feed Management',
    desc: 'Keep stock and pricing data synced and accurate across the entire catalog.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: FileText,
    title: 'Catalog Health Reporting',
    desc: 'Regular reports on catalog status, errors, and improvement areas.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
];

const whyChoose = [
  'Dedicated catalog management team',
  'Multi-marketplace expertise',
  'Error-free bulk processing',
  'Transparent communication',
  'Regular catalog audits',
  'Customized catalog strategies',
  'Affordable service plans',
  'Long-term partnership approach',
];

const steps = [
  {
    title: 'Free Catalog Audit',
    desc: 'We review your catalog to identify errors and gaps.',
  },
  {
    title: 'Cleanup Planning',
    desc: 'We prepare a plan to correct and organize your catalog.',
  },
  {
    title: 'Implementation',
    desc: 'Our team uploads, corrects, and structures your catalog.',
  },
  {
    title: 'Continuous Maintenance',
    desc: 'We monitor and maintain catalog health on an ongoing basis.',
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

const faqs = [
  {
    q: 'Can you manage large catalogs with thousands of SKUs?',
    a: 'Yes. We handle bulk catalog uploads and management for catalogs of any size.',
  },
  {
    q: 'Do you fix suppressed or flagged listings?',
    a: 'Yes. We identify and resolve catalog errors that cause listings to be suppressed or restricted.',
  },
  {
    q: 'Do you provide regular reports?',
    a: 'Yes. We provide regular catalog health reports with clear recommendations.',
  },
];

export default function CatalogManagement() {
  return (
    <ServicePageTemplate
      tag="Catalog Services"
      title="Catalog Management"
      highlight="Services"
      subtitle="Keep Your Product Catalog Accurate, Organized & Optimized"
      description="A well-structured catalog is the backbone of a successful marketplace business. Errors, missing attributes, or poor organization can hurt visibility and sales. At V2 Ecom Services, we manage your product catalog across marketplaces to ensure accuracy, compliance, and a seamless shopping experience."
      Icon={LayoutGrid}
      iconBg="bg-purple-50"
      iconColor="text-purple-600"
      whatWeManage={whatWeManage}
      whyChoose={whyChoose}
      steps={steps}
      whoBenefits={whoBenefits}
      faqs={faqs}
    />
  );
}
