import CVPage from "./portfolio/components/CvPage";
import MyDates from "./portfolio/components/MyDates";
import PersonalCertificates from "./portfolio/pages/PersonalCertificates";
import TechnicalCertificates from "./portfolio/pages/TechnicalCertificates";
import NavBar from "./portfolio/ui/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <NavBar/>
      <Routes>
        <Route path="/*" element={<MyDates />}/>
        <Route path="/cv" element={<CVPage/>}/>
        <Route path="/" element={<MyDates />}/>
        <Route path="/personal-certificates" element={<PersonalCertificates/>}/>
        <Route path="/technical-certificates" element={<TechnicalCertificates/>}/>
      </Routes>
    </>
  );
}

export default App;
