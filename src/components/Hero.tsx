'use client';

import { useTranslations } from 'next-intl';
//import Link from 'next/link';
import { Link } from '../navigation';
import RotatingNKSphere from './RotatingNKSphere';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-10">
      <div 
        className="max-w-6xl w-full pt-6 pb-50 px-6 md:px-12 rounded-2xl"
        suppressHydrationWarning
        style={{
          background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.05) 0%, rgba(71, 85, 105, 0.03) 100%)',
          border: '1px solid rgba(148, 163, 184, 0.15)',
          boxShadow: `
            inset 0 1px 2px rgba(255, 255, 255, 0.1),
            inset 0 -1px 2px rgba(0, 0, 0, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.3)
          `,
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="text-center">
          {/* Esfera rotando */}
          <div className="mb-8">
            <RotatingNKSphere />
          </div>

          {/* Nombre */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center leading-relaxed" suppressHydrationWarning>
            <span className="text-slate-200 block mb-4" suppressHydrationWarning>{t('hero.greeting')}</span>
            <span className="text-slate-100 font-light tracking-wide">
              Nidia K Garzón
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-semibold">
            {t('hero.tagline')}
          </p>

          {/* Descripción */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={{ pathname: '/', hash: 'projects' }}
              className="px-8 py-3 bg-linear-to-r from-blue-500 to-violet-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              {t('projects.title')}
            </Link>
            <Link
              href={{ pathname: '/', hash: 'contact' }}
              className="px-8 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              {t('contact.title')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}