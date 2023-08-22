import images from "../../../assets/images/foto-perfil.jpg";
import CVPage from "./CvPage";
import Tecnology from "./Tecnology";
import Typical from "react-typical";

const MyDates = () => {

  return (
    <div className="px-4 md:px-8 lg:px-16 mt-32">
      {" "}
      {/* Agrega padding lateral para todos los tamaños */}
      <div className="text-center text-5xl my-4">
        <Typical
            loop={Infinity}
            wrapper="b"
          steps={[
            "Desarrollador de software",
            1000,
            "Programador  Full Stack",
            1000,
          ]}
        />
      </div>
      <div
        className="flex flex-col md:flex-row justify-center md:justify-between items-center ml-8 first-letter
      "
      >
        <img
          src={images}
          alt="imagen author"
          className="mb-8 sm:w-32 h-32 rounded-full md:w-auto h-a xl:w-60 md:h-60 md:rounded-2xl md:ml-0 shadow-2xl shadow-cyan-800       animate__animated animate__fadeIn
          "
        />

        <div className="text-left md:w-3/4  mt-2 xl:mt-0 md:ml-10">
          <p className="font-medium text-sm md:text-base">
            Soy Levi Tobías González, Desarrollador de software apasionado y
            comprometido con la innovación y la creatividad. Mi carrera se ha
            destacado por proyectos vanguardistas que reflejan mi progreso y mi
            dedicación a las últimas tecnologías.
          </p>
          <p className="my-3 md:my-2 font-medium text-sm md:text-base">
            Mantengo un compromiso constante con la actualización de las últimas
            tendencias y tecnologías. Además, mis conocimientos y pasión me
            llevan a comenzar la Tecnicatura Universitaria de Programación, un
            nuevo paso en mi viaje de crecimiento y aprendizaje.
          </p>

          <CVPage />
        </div>
      </div>
      <Tecnology />
    </div>
  );
};

export default MyDates;
