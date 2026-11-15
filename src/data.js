export const experiences = [
  {
    index: '01', name: 'OneStop ESG', role: 'Business Development & Operations',
    note: 'Worked across research, company outreach, onboarding, platform management and content operations for a sustainability-focused marketplace.',
    metrics: [['400+', 'profiles created or updated'], ['1,200+', 'LinkedIn outreach activities'], ['1,200+', 'email outreach activities'], ['50+', 'events added'], ['60+', 'courses added'], ['30+', 'news updates'], ['10+', 'articles and listicles']],
    color: 'sage',
  },
  {
    index: '02', name: 'TUNIC Club · JMIT', role: 'Convenor · Team Leadership & Events',
    note: 'Led student teams and coordinated the planning and execution of institutional and inter-school events across operations, delegation, promotions and on-ground coordination.',
    metrics: [['70+', 'member team'], ['3', 'Zest Day editions'], ['230+', 'participants'], ['18', 'schools']],
    color: 'coral',
  },
  {
    index: '03', name: 'Google Student Ambassador', role: 'Student Ambassador · 2025',
    note: 'Selected among the Top 250 ambassadors in the 2025 program. Contributed to student engagement, awareness initiatives and conversations around technology and AI.',
    metrics: [['Top 250', 'ambassadors · 2025']],
    color: 'yellow',
  },
  {
    index: '04', name: 'JMIT Chronicles', role: 'Scriptwriter · Anchor · Video Editor',
    note: 'Mentored students, became part of the team and helped operate JMIT Chronicles across two seasons.',
    metrics: [['2', 'seasons'], ['Team', 'operations and mentoring']],
    color: 'blue',
  },
  {
    index: '05', name: 'Net Impact DU', role: 'Marketing & Communications',
    note: 'Posters, videos and digital content made in collaboration with a community team.',
    metrics: [['MarCom', 'creative team']],
    color: 'lavender',
  },
];

export const destinations = [
  { name: 'Manali', category: 'Mountain journeys', tag: 'Himachal Pradesh', note: 'Mountain paths, river water and time outdoors.', cover: 28, images: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33] },
  { name: 'Kasol', category: 'Mountain journeys', tag: 'Parvati Valley', note: 'A few quiet frames from along the Parvati.', cover: 37, images: [34, 35, 36, 37, 38, 39, 40, 41, 42] },
  { name: 'McLeod Ganj', category: 'Mountain journeys', tag: 'Dharamshala', note: 'Mountain air, long views and a slower pace.', cover: 66, images: [63, 64, 65, 66, 67, 68, 69] },
  { name: 'Varanasi', category: 'Culture & heritage', tag: 'Along the ghats', note: 'River light, old streets and the steps along the ghats.', cover: 45, images: [43, 44, 45, 46, 47, 48, 49, 50, 51] },
  { name: 'Jaipur', category: 'Culture & heritage', tag: 'Rajasthan', note: 'Historic streets and warm colours across the old city.', cover: 53, images: [52, 53, 54, 55] },
  { name: 'Udaipur', category: 'Culture & heritage', tag: 'Rajasthan', note: 'Water, architecture and a city seen at an easy pace.', cover: 56, images: [56, 57, 58] },
  { name: 'Random shots', category: 'Personal moments', tag: 'Everyday moments', note: 'A mixed roll of small moments, changing skies and scenes collected along the way.', cover: 74, images: [5, 22, 23, 59, 60, 61, 62, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82] },
  { name: 'Mussoorie', category: 'Mountain escapes', tag: 'Uttarakhand', note: 'Mountain views, waterfalls, wildflowers and evening skies.', cover: '/images/travel/mussoorie/09.webp', images: Array.from({ length: 21 }, (_, index) => `/images/travel/mussoorie/${String(index + 1).padStart(2, '0')}.webp`) },
];

export const img = (n) => typeof n === 'string' ? n : `/images/portfolio/image${n}.webp`;
