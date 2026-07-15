import { createNavigation } from 'next-intl/navigation';
import { locales, pathnames } from '../i18n.config'; 

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({
    locales,
    pathnames,
    localePrefix: 'always' // Lo definimos directamente aquí adentro
  });