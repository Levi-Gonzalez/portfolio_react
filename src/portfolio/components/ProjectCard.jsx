const TechStack = ({ techStack }) => {
  return (
    <p className="text-gray-900">
      Aplicaciones utilizadas: {techStack.join(', ')}
    </p>
  );
};

const ProjectCard = ({ project }) => {
  const { title, demoUrl, imageUrl, techStack } = project;

  return (
    <div className="bg-white p-4 shadow-md rounded-md text-center capitalize hover:shadow-xl transition delay-150 wow animate__animated animate__backInUp md:hover:-translate-y-8">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <a href={demoUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="h-40 w-full object-contain" />
      </a>
      <div className="p-3 bg-gray100 mt-6 bg-gray1200 rounded-md shadow-md">
        <TechStack techStack={techStack} />
      </div>
    </div>
  );
};

export default ProjectCard;
