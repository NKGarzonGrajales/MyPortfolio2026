'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="bg-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            {t('about.title')}
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-slate-300 leading-relaxed space-y-6">
            <p className="text-lg">{t('about.description')}</p>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'NestJS', 'Stripe'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-200 text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imagen/Avatar */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-lg bg-linear-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👩‍💻</div>
                <p className="text-slate-400">Nidia Karina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}