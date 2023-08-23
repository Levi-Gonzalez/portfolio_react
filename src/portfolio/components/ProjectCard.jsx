const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    techStack,
    demoUrl,
    sourceCodeUrl,
    imageUrl,
  } = project;

  const newTech = (description) => {
    description.inclues(",")
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-md text-center capitalize hover:shadow-xl  transition delay-150 wow animate__animated animate__backInUp md:hover:-translate-y-8">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <a href={demoUrl} target="_blank">
        <img
          src={imageUrl}
          alt={title}
          srcSet=""
          className=" h-40 w-full object-contain"
        />
      </a>
      <div className="p-3 bg-gray-200 mt-6">
        <p className="text-gray-400">{techStack}</p>
        <p className="text-gray-600">{newTech}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
