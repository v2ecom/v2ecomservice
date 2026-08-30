import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import {
  Search, Type, List, Code2, Image, Tag, BarChart2, RefreshCw
} from 'lucide-react';
import { BookOpen } from 'lucide-react';

const whatWeManage = [
  {
    icon: Search,
    title: 'Keyword Research',
    desc: 'Identify high-search, high-relevance keywords your customers are actually using.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Type,
    title: 'Title Optimization',
    desc: 'Craft clear, keyword-rich titles that balance SEO with readability.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: List,
    title: 'Bullet Points & Descriptions',
    desc: 'Highlight features and benefits in persuasive, scannable formats.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Code2,
    title: 'Backend Search Terms',
    desc: 'Optimize hidden keyword fields to widen organic discoverability.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Image,
    title: 'Image & A+ Content Guidance',
    desc: 'Recommend visual improvements to boost conversions and trust.',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    icon: Tag,
    title: 'Category & Attribute Accuracy',
    desc: 'Ensure listings are placed in the correct categories with accurate attributes.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: BarChart2,
    title: 'Competitor Benchmarking',
    desc: 'Analyze top-performing listings in your niche to identify gaps and opportunities.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: RefreshCw,
    title: 'Ongoing Listing Audits',
    desc: 'Regularly review and refresh listings to keep pace with algorithm changes.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
];

const whyChoose = [
  'Proven listing optimization framework',
  'Marketplace-specific expertise',
  'Data-driven keyword strategy',
  'Conversion-focused copywriting',
  'Transparent reporting',
  'Regular content refreshes',
  'Affordable service plans',
  'Long-term partnership approach',
];

const steps = [
  {
    title: 'Free Listing Audit',
    desc: 'We review your current listings to identify weaknesses and missed opportunities.',
  },
  {
    title: 'Strategy Planning',
    desc: 'We prepare a keyword and content roadmap tailored to your products.',
  },
  {
    title: 'Implementation',
    desc: 'Our team rewrites and restructures listings for maximum impact.',
  },
  {
    title: 'Continuous Optimization',
    desc: 'We monitor rankings and conversions, refining content over time.',
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



export default function ProductListingOptimization() {
  return (
    <ServicePageTemplate
      tag="Listing Services"
      title="Product Listing"
      highlight="Optimization"
      subtitle="Turn Browsers into Buyers with High-Converting Listings"
      description="Your product listing is your digital storefront — and on Amazon, Flipkart, and Meesho, first impressions decide whether a shopper clicks 'Buy Now' or moves on. At V2 Ecom Services, we craft SEO-optimized, conversion-focused listings that improve visibility, build trust, and drive sales."
      Icon={BookOpen}
      iconBg="bg-emerald-50"
      iconColor="text-emerald-600"
      whatWeManage={whatWeManage}
      whyChoose={whyChoose}
      steps={steps}
      whoBenefits={whoBenefits}
    />
  );
}
