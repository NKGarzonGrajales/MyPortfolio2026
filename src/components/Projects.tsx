'use client';

import { useTranslations } from 'next-intl';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const t = useTranslations();

  return (
    <section id="projects" className="bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              {t("projects.title")}
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Proyectos desplegados y funcionales
          </p>
        </div>

        {/* Grid de Proyectos */}
          <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm min-w-[320px] flex justify-center items-stretch"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}