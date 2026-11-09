// Pure validation helpers shared by the admission form (browser) and /api/academy-apply (server).
// No browser or Node-only APIs here.
import { ACADEMY, INDIAN_STATES } from '../config/academy.js';

const O = ACADEMY.options;
const COURSE_IDS = ACADEMY.courses.map((c) => c.id);

export const FIELD_LIMITS = { name: 80, city: 80, business: 120, message: 1000, email: 254 };

// Normalises an Indian mobile number to 10 digits; returns '' if it cannot be one.
export function normalizeIndianMobile(value) {
  let digits = String(value ?? '').replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : '';
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_RE = /^[\p{L}][\p{L}\p{M}\s.'’-]*$/u;

const oneOf = (value, list) => list.includes(value);
const allIn = (arr, list) => Array.isArray(arr) && arr.length > 0 && arr.every((v) => list.includes(v));
const clean = (v) => String(v ?? '').trim().replace(/\s+/g, ' ');

// Fields belonging to each step of the form (used for per-step validation).
export const STEP_FIELDS = {
  1: ['fullName', 'mobile', 'whatsapp', 'email', 'city', 'state', 'ageGroup', 'gender', 'qualification'],
  2: ['occupation', 'businessName', 'currentPlatforms', 'experience'],
  3: ['courseId', 'mode', 'batch', 'language', 'interests'],
  4: ['objective', 'source', 'message', 'consent'],
};

export const emptyForm = {
  fullName: '', mobile: '', whatsapp: '', email: '', city: '', state: 'Tamil Nadu', ageGroup: '', gender: '', qualification: '',
  occupation: '', businessName: '', currentPlatforms: [], experience: '',
  courseId: '', mode: '', batch: '', language: '', interests: [],
  objective: '', source: '', message: '', consent: false,
};

// Returns { errors, values } — values are cleaned/normalised copies of the input.
export function validateApplication(input, onlyFields) {
  const v = input || {};
  const errors = {};
  const values = {
    fullName: clean(v.fullName),
    mobile: normalizeIndianMobile(v.mobile),
    whatsapp: normalizeIndianMobile(v.whatsapp),
    email: clean(v.email).toLowerCase(),
    city: clean(v.city),
    state: clean(v.state),
    ageGroup: clean(v.ageGroup),
    gender: clean(v.gender),
    qualification: clean(v.qualification),
    occupation: clean(v.occupation),
    businessName: clean(v.businessName),
    currentPlatforms: Array.isArray(v.currentPlatforms) ? v.currentPlatforms.map(clean) : [],
    experience: clean(v.experience),
    courseId: clean(v.courseId),
    mode: clean(v.mode),
    batch: clean(v.batch),
    language: clean(v.language),
    interests: Array.isArray(v.interests) ? v.interests.map(clean) : [],
    objective: clean(v.objective),
    source: clean(v.source),
    message: String(v.message ?? '').trim().slice(0, FIELD_LIMITS.message),
    consent: v.consent === true,
  };

  const check = (field, fn) => {
    if (onlyFields && !onlyFields.includes(field)) return;
    const msg = fn();
    if (msg) errors[field] = msg;
  };

  check('fullName', () => {
    if (!values.fullName) return 'Please enter your full name.';
    if (values.fullName.length < 2) return 'Name looks too short.';
    if (values.fullName.length > FIELD_LIMITS.name) return 'Name is too long.';
    if (!NAME_RE.test(values.fullName)) return 'Use letters only in your name.';
  });
  check('mobile', () => {
    if (!String(v.mobile ?? '').trim()) return 'Please enter your mobile number.';
    if (!values.mobile) return 'Enter a valid 10-digit Indian mobile number (starting with 6–9).';
  });
  check('whatsapp', () => {
    if (!String(v.whatsapp ?? '').trim()) return 'Please enter your WhatsApp number.';
    if (!values.whatsapp) return 'Enter a valid 10-digit Indian WhatsApp number (starting with 6–9).';
  });
  check('email', () => {
    if (!values.email) return 'Please enter your email address.';
    if (values.email.length > FIELD_LIMITS.email || !EMAIL_RE.test(values.email)) return 'Enter a valid email address.';
  });
  check('city', () => {
    if (!values.city) return 'Please enter your city.';
    if (values.city.length > FIELD_LIMITS.city) return 'City name is too long.';
  });
  check('state', () => (oneOf(values.state, INDIAN_STATES) ? '' : 'Please select your state.'));
  check('ageGroup', () => (oneOf(values.ageGroup, O.ageGroups) ? '' : 'Please select your age group.'));
  check('gender', () => (!values.gender || oneOf(values.gender, O.genders) ? '' : 'Please choose a valid option.'));
  check('qualification', () => (oneOf(values.qualification, O.qualifications) ? '' : 'Please select your highest qualification.'));

  check('occupation', () => (oneOf(values.occupation, O.statuses) ? '' : 'Please select your current status.'));
  check('businessName', () => (values.businessName.length <= FIELD_LIMITS.business ? '' : 'Business name is too long.'));
  check('currentPlatforms', () => (allIn(values.currentPlatforms, O.currentPlatforms) ? '' : 'Select at least one option (choose “Not Yet Started” if none).'));
  check('experience', () => (oneOf(values.experience, O.experience) ? '' : 'Please select your experience level.'));

  check('courseId', () => (oneOf(values.courseId, COURSE_IDS) ? '' : 'Please choose a course.'));
  check('mode', () => (oneOf(values.mode, O.modes) ? '' : 'Please choose Online or Offline.'));
  check('batch', () => (oneOf(values.batch, O.batches) ? '' : 'Please choose a preferred batch.'));
  check('language', () => (oneOf(values.language, O.languages) ? '' : 'Please choose a preferred language.'));
  check('interests', () => (allIn(values.interests, O.interests) ? '' : 'Select at least one marketplace you are interested in.'));

  check('objective', () => (oneOf(values.objective, O.objectives) ? '' : 'Please tell us why you want to join.'));
  check('source', () => (oneOf(values.source, O.sources) ? '' : 'Please tell us how you heard about us.'));
  check('consent', () => (values.consent ? '' : 'Consent is required so our team can contact you about your application.'));

  return { errors, values };
}
