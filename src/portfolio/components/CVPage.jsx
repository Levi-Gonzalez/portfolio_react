import DownloadButton from "./DowloadButton";

const CVPage = () => {
  const levi = "/cv/Cv-Levi_Tobias_Gonzalez.pdf";

  return (
    <div className=" md:w-full justify-center mt-10 lg:justify-end">
      <DownloadButton url={levi} label="Descargar CV" />
    </div>
  );
};

export default CVPage;
