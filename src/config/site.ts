// Site configuration
export const SITE_CONFIG = {
  site: 'https://alehardmode.github.io',
  base: '/alehardmode',
  title: 'Alejandro - Full Stack Developer',
  description:
    'Alejandro - Experienced Full Stack Developer specializing in modern web technologies.',
  author: 'Alejandro',
  social: {
    github: 'https://github.com/alehardmode',
    linkedin: 'https://linkedin.com/in/alehardmode',
    twitter: 'https://x.com/alehardmode',
    email: 'alehardmode@gmail.com',
  },
  projects: {
    puntoPetanca: {
      name: 'PuntoPetanca',
      url: 'https://puntopetanca.es',
      image: 'https://puntopetanca.es/og.png',
    },
    pomodoroTimer: {
      name: 'Pomodoro Timer',
      url: 'https://best-pomodoro-timer.vercel.app/',
      image: 'https://best-pomodoro-timer.vercel.app/og_image.png',
    },
  },
};

// Helper function to get full URL
export function getFullUrl(path: string = ''): string {
  if (typeof import.meta !== 'undefined') {
    const base = import.meta.env?.BASE_URL || SITE_CONFIG.base;
    const site = import.meta.env?.SITE || SITE_CONFIG.site;
    return `${site}${base}${path}`;
  }
  return `${SITE_CONFIG.site}${SITE_CONFIG.base}${path}`;
}
