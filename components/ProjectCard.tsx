import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative block">
      <div className="relative overflow-hidden aspect-[4/5] mb-4 bg-slate-100">
        <img 
          src={project.image} 
          alt={project.client} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Hover overlay button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="bg-white text-slate-900 px-6 py-3 rounded-full uppercase text-sm font-bold tracking-wider flex items-center gap-2 shadow-xl shadow-black/10">
             View Case <ArrowUpRight size={16} />
           </div>
        </div>
      </div>

      <div className="flex justify-between items-start border-t border-slate-200 pt-4">
        <div>
          <h3 className="text-2xl font-medium text-slate-900 mb-1">{project.client}</h3>
          <p className="text-indigo-600 text-sm uppercase tracking-wider font-semibold">{project.category}</p>
        </div>
        <span className="text-slate-500 font-mono text-sm">{project.year}</span>
      </div>
    </div>
  );
};

export default ProjectCard;