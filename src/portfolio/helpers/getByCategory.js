import { certificates } from "../data/certificates";


export const getByCategory = (category) => {
  const categoryValid = ["Técnicos", "Desarrollo Personal"];

  if (!categoryValid.includes(category)) {
    throw new Error("No existe");
  }
  return certificates.filter(certificate => certificate.category === category);
};
