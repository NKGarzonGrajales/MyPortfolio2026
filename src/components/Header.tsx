'use client';

import { useTranslations } from 'next-intl';
// 1. Mantenemos tu importación de navegación personalizada
import { Link } from '../navigation'; 
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 bg-slate-950/75 backdrop-blur-md w-full">
      {/* Línea sutil con degradado simétrico en la parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />

      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* NK Logo más grande, con tipografía imponente y degradado elegante */}
        <Link 
          href={{ pathname: '/' }} 
          className="text-3xl font-extrabold tracking-wider bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          NK
        </Link>

        {/* Menú de navegación elegante con letras más grandes y espaciado simétrico */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-8">
            <li>
              {/* Estructura con pathname + hash + animación de línea expansiva en hover */}
              <Link 
                href={{ pathname: '/', hash: 'about' }} 
                className="text-base font-medium text-slate-300 hover:text-blue-400 tracking-wide transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all"
              >
                {t('navbar.about')}
              </Link>
            </li>
            <li>
              <Link 
                href={{ pathname: '/', hash: 'projects' }} 
                className="text-base font-medium text-slate-300 hover:text-blue-400 tracking-wide transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all"
              >
                {t('navbar.projects')}
              </Link>
            </li>
            <li>
              <Link 
                href={{ pathname: '/', hash: 'contact' }} 
                className="text-base font-medium text-slate-300 hover:text-blue-400 tracking-wide transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all"
              >
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>

          {/* Separador visual fino antes del selector de idiomas */}
          <div className="hidden md:block h-5 w-px bg-slate-800" />

          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}