import ProjectCard from '../common/project-card';
import { projects } from '@/lib/data/featured-projects';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-30 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Featured Projects
        </h1>
        <h2 className="mt-4 text-center">A selection of my works.</h2>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              role={project.role}
              avatar={project.avatar}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
              index={index}
              imageCredit={project.imageCredit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
