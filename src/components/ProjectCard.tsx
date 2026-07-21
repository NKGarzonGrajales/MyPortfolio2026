'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations();
  const locale = useLocale();

  const title = locale === 'es' ? project.titleEs : project.titleEn;
  const description = locale === 'es' ? project.descriptionEs : project.descriptionEn;

  return (
    <div className="group bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between h-full w-full">
      <div>
        <div className="h-2 bg-linear-to-r from-blue-500 to-violet-500"></div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Descripción con límite de 3 líneas */}
          <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Botones alineados siempre al fondo */}
      <div className="p-6 pt-0 flex gap-3">
        <Link
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-linear-to-r from-blue-500 to-violet-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all text-center text-sm"
        >
          {t('projects.viewDemo')}
        </Link>
        <Link
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-colors text-center text-sm"
        >
          {t('projects.viewCode')}
        </Link>
      </div>
    </div>
  );
}