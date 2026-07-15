export const defaultLocale = 'en' as const;
export const locales = ['en', 'es'] as const;

export const pathnames = {
  '/': '/',
  '/about': {
    es: '/sobre-mi',
    en: '/about',
  },
  '/projects': {
    es: '/proyectos',
    en: '/projects',
  },
  '/contact': {
    es: '/contacto',
    en: '/contact',
  },
};