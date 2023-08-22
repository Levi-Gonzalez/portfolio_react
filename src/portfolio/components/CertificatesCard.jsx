import React from "react";

const CertificatesCard = ({ certificate }) => {
  const { id, course, platform, url } = certificate;

  const imageUrl = `../../../assets/images/${id}.jpg`;

  return (
    <div className="w-full sm:w-1/2 m-10 md:w-1/3 lg:w-1/4 xl:w-1/4 drop-shadow-lg ease-in-out">
          <h2 className="text-center font-medium ">
            {course} - {platform}
          </h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={course}
          className="w-auto h-full rounded-md object-bottom shadow-xl mt-2 hover:scale-125 duration-300 transition-all "
        />
      </a>
    </div>
  );
};

export default CertificatesCard;
