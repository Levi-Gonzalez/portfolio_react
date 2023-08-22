import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl mt-20 uppercase">Proyectos</h1>
    <section className="py-4 px-6 bg-gray-100 mt-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={...project}/>
          ))}
      </div>
    </section>
          </>
  );
};

export default Projects;
