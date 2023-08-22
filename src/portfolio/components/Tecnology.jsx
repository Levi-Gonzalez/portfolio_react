import React from "react";

const Technology = () => {
  const iconBaseUrl = "/icons/";
  const numberOfIcons = 8;

  const technologyIcons = [];
  for (let i = 1; i <= numberOfIcons; i++) {
    technologyIcons.push(`${iconBaseUrl}bxl-${i}.png`);
  }

  return (
    <>
      <h1 className="text-center font-semibold text-4xl mt-28 mb-20 ">Tecnologías</h1>
      <div className="flex justify-center">
        <div className="flex  sm:gap-1  xl:gap-3">
          {technologyIcons.map((icon, index) => (
            <div
              key={index}
              className={`flex items-center justify-center sm:p1 xl:p-4 shadow-2xl rounded-full `}
            >
              <img
                src={icon}
                alt={`Technology Icon ${index + 1}`}
                className="w-12 h-12 object-cover rounded-3xl hover:scale-125 transition-all fill-cyan-500 hover:fill-cyan-700"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Technology;
