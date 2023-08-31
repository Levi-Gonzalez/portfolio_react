import { getByCategory } from "../helpers";
import CertificatesCard from "./CertificatesCard";

const ListCertificates = ({ category }) => {

  const certificates = getByCategory(category)

  return (
    <div>
        <h1 className="font-bold text-center m-6 text-4xl mt-20">Certificados: {category}</h1>
      <div className="flex flex-wrap justify-center m-8 sm:m-0 md:m-0 ">
        {certificates.map((certificate) => (
          <CertificatesCard key={certificate.id} certificate={certificate} />
          ))}
      </div>

    </div>
  );
};

export default ListCertificates;
