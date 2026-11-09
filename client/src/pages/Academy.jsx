import { useCallback, useEffect, useState } from 'react';
import { ACADEMY } from '../config/academy';
import AcademyHero from '../components/academy/AcademyHero';
import AcademyAbout from '../components/academy/AcademyAbout';
import AcademyCourses from '../components/academy/AcademyCourses';
import AcademyLearn from '../components/academy/AcademyLearn';
import AcademyDelivery from '../components/academy/AcademyDelivery';
import AcademyFAQ from '../components/academy/AcademyFAQ';
import { academyFaqs } from '../config/academyFaqs';
import AdmissionForm from '../components/academy/AdmissionForm';
import StickyApplyBar from '../components/academy/StickyApplyBar';

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

// Structured data only describes content that is visible on this page.
function useAcademyStructuredData() {
  useEffect(() => {
    const provider = { '@type': 'EducationalOrganization', name: ACADEMY.name, parentOrganization: { '@type': 'Organization', name: ACADEMY.parent }, url: `${ACADEMY.siteUrl}${ACADEMY.path}` };
    const data = [
      ...ACADEMY.courses.map((c) => ({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: c.name,
        description: `${c.name} – ${c.duration} e-commerce marketplace training by ${ACADEMY.name}. ${c.summary}`,
        provider,
        inLanguage: ['ta', 'en'],
      })),
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: academyFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ];
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.dataset.academy = 'true';
    tag.textContent = JSON.stringify(data);
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);
}

export default function Academy() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formKey, setFormKey] = useState(0);
  useAcademyStructuredData();

  const handleApply = useCallback((courseId) => {
    if (courseId) setSelectedCourse(courseId);
    scrollToId('apply');
  }, []);

  const handleReturn = useCallback(() => {
    setSelectedCourse('');
    setFormKey((k) => k + 1); // reset the form after a successful application
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <AcademyHero onExplore={() => scrollToId('courses')} />
      <AcademyAbout />
      <AcademyCourses onApply={handleApply} />
      <AcademyLearn />
      <AcademyDelivery />
      <AcademyFAQ />
      <AdmissionForm key={formKey} selectedCourse={selectedCourse} onReturn={handleReturn} />
      <StickyApplyBar onApply={() => handleApply()} />
    </>
  );
}
