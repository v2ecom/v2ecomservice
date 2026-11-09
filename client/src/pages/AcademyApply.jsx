import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ACADEMY } from '../config/academy';
import AdmissionForm from '../components/academy/AdmissionForm';

// Standalone, shareable admission form: /academy/apply
// Optional prefill: /academy/apply?course=marketplace-professional  (or marketplace-business-mastery)
export default function AcademyApply() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const requested = params.get('course');
  const course = ACADEMY.courses.some((c) => c.id === requested) ? requested : '';

  return (
    <div className="bg-white pt-20 sm:pt-24">
      <div className="container-base">
        <Link
          to="/academy"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-academy-royal hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-academy-royal"
        >
          <ArrowLeft size={15} aria-hidden="true" /> {ACADEMY.name} course details
        </Link>
      </div>
      <h1 className="sr-only">{ACADEMY.name} admission form</h1>
      <AdmissionForm selectedCourse={course} onReturn={() => navigate('/academy')} />
    </div>
  );
}
