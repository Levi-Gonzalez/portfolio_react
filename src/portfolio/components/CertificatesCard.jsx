import { memo } from "react";

const CertificatesCard = memo(({ certificate }) => {
  const { course, platform, url, imageUrl } = certificate;

  return (
    <>
      <div className="w-full sm:w-1/2 m-10 md:w-1/3 lg:w-1/4 xl:w-1/4 drop-shadow-lg ease-in-out wowanimate__animated animate__fadeIn">
        <h2 className="text-center font-medium ">
          {course} - {platform}
        </h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt={course}
            className="w-auto h-auto rounded-md object-bottom shadow-xl mt-2 hover:scale-105 duration-300 transition-all"
          />
        </a>
      </div>
      <div className=" fixed z-50 flex ">
      </div>
    </>
  );
});
export default CertificatesCard;
