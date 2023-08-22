const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    techStack,
    demoUrl,
    sourceCodeUrl,
    imageUrl,
  } = project;

  return (
    <div className="bg-white p-4 shadow-md rounded-md text-center capitalize hover:shadow-xl hover:-translate-y-8 transition delay-150 wow animate__animated animate__backInUp">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <a href={demoUrl} target="_blank">
        <img
          src={imageUrl}
          alt={title}
          srcset=""
          className=" h-40 w-full object-contain"
        />
      </a>
      <div className="p-3 bg-gray-200 mt-6">
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
