import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="py-24 container mx-auto px-4 md:px-8">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-slate-900">
          Selected<br/>Work
        </h2>
        <div className="text-slate-500 text-right hidden md:block">
          <p className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">Case Studies</p>
          <p className="text-sm font-mono">2023 — 2024</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className={index % 2 !== 0 ? 'md:mt-24' : ''}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <button className="border border-slate-300 text-slate-900 px-8 py-4 uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-all duration-300">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default WorkGrid;