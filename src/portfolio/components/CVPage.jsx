import DownloadButton from "./DowloadButton";
const CVPage = () => {
  const cvUrl = "../../../public/cv/Cv - Levi Tobias Gonzalez.pdf";

  return (
    <div className=" md:w-full justify-center mt-10 xl:justify-end">
      <DownloadButton url={cvUrl} label="Descargar CV" />
    </div>
  );
};

export default CVPage;
