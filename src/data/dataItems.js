import {
  Award, BriefcaseBusiness, Clipboard, Code2,
} from 'lucide-react'

const EMAIL = 'shivamkhare6762@gmail.com'
const LINKS = {
  github: 'https://github.com/Shivam-kumar-khare/',
  linkedin: 'https://linkedin.com/in/shivamkumarkhare/',
}

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
]

const skills = [
  { icon: Code2, title: 'Programming languages', items: ['C++', 'Java', 'JavaScript', 'C'] },
  { icon: Clipboard, title: 'Web & frameworks', items: ['React.js', 'Node.js', 'Express.js', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'] },
  { icon: BriefcaseBusiness, title: 'Databases & tools', items: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman'] },
]

const projects = [
  {
    number: '01',
    kind: 'Backend focused',
    title: 'Video Uploading Social Media Platform',
    description: 'A production-minded backend for a video-first social experience, designed around secure users, performant media workflows, and useful creator insights.',
    points: ['Designed RESTful APIs for video, user, playlist, and subscription workflows.', 'Implemented secure JWT authentication, password hashing, and protected routes.', 'Built a media pipeline with Multer and Cloudinary, including channel analytics.'],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT', 'Bcrypt', 'Multer'],
    accent: 'bg-[#e76432]',
    demo: '#',
  },
  {
    number: '02',
    kind: 'Frontend focused',
    title: 'Modern Blogging Web Platform',
    description: 'A clean publishing platform with a focused writing experience and predictable, centralized application state.',
    points: ['Built role-based authorization for secure, permission-aware user journeys.', 'Enabled rich-text post creation, editing, and lifecycle management.', 'Centralized client state with Redux Toolkit for a consistent interface.'],
    stack: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Appwrite', 'Vite'],
    accent: 'bg-[#4b7bec]',
    demo: '#',
  },
]

const timeline = [
  { type: 'Experience', icon: BriefcaseBusiness, title: 'Big Data & Business Management Intern', org: 'IBM SkillsBuild & AICTE', period: 'Jun 2026 – Jul 2026', detail: 'Built practical foundations in data-driven business analysis and large-scale data concepts through guided, industry-aligned learning.' },
  { type: 'Certification', icon: Award, title: 'Samsung AI Certification', org: 'Samsung Innovation Campus', period: 'Dec 2025 – Mar 2026', detail: 'Completed structured training in artificial intelligence concepts and their practical applications.' },
  { type: 'Certification', icon: Award, title: 'Introduction to Generative AI', org: 'Google Cloud / Coursera', period: 'Credential earned', detail: 'Explored core generative AI concepts, use cases, and responsible implementation practices.' },
]

export { EMAIL, LINKS, navItems, skills, projects, timeline }
