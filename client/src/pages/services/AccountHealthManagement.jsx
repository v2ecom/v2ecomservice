import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import { Activity, FileCheck, Monitor, ShieldAlert, LifeBuoy, AlertOctagon, Star, BarChart2 } from 'lucide-react';

const whatWeManage = [
  {
    icon: Activity,
    title: 'Performance Metric Monitoring',
    desc: 'Track order defect rate, cancellation rate, late shipment rate, and other key metrics.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: FileCheck,
    title: 'Policy Compliance Review',
    desc: 'Ensure listings and operations align with marketplace policies at all times.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Monitor,
    title: 'Account Health Dashboard',
    desc: 'Regularly review account health scores and warnings before they escalate.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: ShieldAlert,
    title: 'Suspension Prevention',
    desc: 'Identify risk factors early to prevent account suspensions proactively.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: LifeBuoy,
    title: 'Appeal & Reinstatement Support',
    desc: 'Prepare and submit appeals for suspended or restricted accounts.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: AlertOctagon,
    title: 'Policy Violation Resolution',
    desc: 'Address IP complaints, listing violations, and policy strikes effectively.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: Star,
    title: 'Customer Feedback Management',
    desc: 'Monitor reviews and feedback to maintain healthy ratings and reputation.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: BarChart2,
    title: 'Ongoing Risk Reporting',
    desc: 'Regular reports highlighting account health trends and risk areas.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
];

const whyChoose = [
  'Proactive account monitoring',
  'Experienced in suspension appeals',
  'Marketplace policy expertise',
  'Transparent communication',
  'Fast issue resolution',
  'Customized risk-prevention plans',
  'Affordable service plans',
  'Long-term partnership approach',
];

const steps = [
  {
    title: 'Free Account Health Check',
    desc: 'We assess your current account health and identify risks.',
  },
  {
    title: 'Risk Mitigation Planning',
    desc: 'We prepare a plan to resolve issues and prevent future violations.',
  },
  {
    title: 'Implementation',
    desc: 'We address compliance gaps and, if needed, submit appeals.',
  },
  {
    title: 'Continuous Monitoring',
    desc: 'We track account health metrics on an ongoing basis to keep your account safe.',
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
    q: 'Can you help reinstate a suspended account?',
    a: 'Yes. We prepare and submit appeals to help resolve suspensions and restrictions.',
  },
  {
    q: 'Do you monitor account health proactively?',
    a: 'Yes. We continuously track performance metrics and policy compliance to prevent issues before they occur.',
  },
  {
    q: 'Do you provide regular reports?',
    a: 'Yes. We provide regular account health reports with clear risk insights and recommendations.',
  },
];

export default function AccountHealthManagement() {
  return (
    <ServicePageTemplate
      tag="Account Health"
      title="Account Health &"
      highlight="Performance Management"
      subtitle="Protect Your Marketplace Account with Proactive Health Management"
      description="A suspended or restricted seller account can bring your business to a halt. At V2 Ecom Services, we monitor and manage your account health to keep you compliant, protect your performance metrics, and resolve issues before they escalate. From policy compliance to performance monitoring, our team acts as your first line of defense against account risks."
      Icon={ShieldAlert}
      iconBg="bg-green-50"
      iconColor="text-green-600"
      whatWeManage={whatWeManage}
      whyChoose={whyChoose}
      steps={steps}
      whoBenefits={whoBenefits}
      faqs={faqs}
    />
  );
}
