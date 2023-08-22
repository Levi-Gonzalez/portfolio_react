import { useMemo } from "react";
import { getByCategory } from "../helpers";
import CertificatesCard from "./CertificatesCard";

const ListCertificates = ({ category }) => {

  const certificates = useMemo(()=>  getByCategory(category), [category])

  return (
    <div>
        <h1 className="font-bold text-center m-6 text-4xl">Certificados: {category}</h1>
      <div className="flex gap-6 flex-wrap justify-center">
        {certificates.map((certificate) => (
          <CertificatesCard key={certificate.id} certificate={...certificate} />
          ))}
      </div>
    </div>
  );
};

export default ListCertificates;
