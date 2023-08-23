import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Button = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const COMPONENTES = [
    <a
      href="https://www.linkedin.com/in/levi-gonzalez/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillLinkedin
        size={35}
        className="mb-10 text-sky-800 rounded-md hover:shadow-2xl hover:text-sky-900"
      />
    </a>,
    <a
      href="https://github.com/Levi-Gonzalez"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillGithub size={35} />
    </a>,
    <a
      href="https://api.whatsapp.com/send?phone=+5491136518905&text=Hola,%20me%20gustaría%20conectarme%20contigo."
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsWhatsapp size={35} className="mt-10 text-green-700 rounded-md hover:shadow-2xl hover:text-green-800" />
    </a>,
  ];

  return (
    <>
      <button
        className="bg-indigo-900 px-5 py-3 text-white rounded-full shadow-md bottom-4 right-4 hover:bg-sky-700 active:bg-sky-900 font-black"
        onClick={toggleExpanded}
      >
        +
      </button>

      {isExpanded && (
        <div className="flex flex-col bg-white p-4 rounded-md absolute bottom-14 transition-all shadow-xl py-8 ">
          {COMPONENTES.map((component, index) => (
            <div key={index}>
              {component}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Button;
