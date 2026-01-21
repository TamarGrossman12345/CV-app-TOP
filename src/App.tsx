//import { useState } from 'react'
import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo";
import CvPreview from "./components/CvPreview";
import { useState } from "react";

function App() {
  const [cvData, setCvData] = useState({
    // Profile
    name: "",
    position: "",
    careerObjective: "",
    // Education
    degree: "",
    school: "",
    eduLocation: "",
    eduStartDate: "",
    eduEndDate: "",
    // Experience
    jobTitle: "",
    company: "",
    expDescription: "",
    expStartDate: "",
    expEndDate: "",
    // Contact
    phone: "",
    email: "",
    contactLocation: "",
    linkedin: "",
  });

  const handleChange = (field: string, value: string) => {
    setCvData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="app-wrapper">
      <div className="general-info-container">
        <GeneralInfo data={cvData} onUpdate={handleChange} />
      </div>
      <div className="cv-preview-container">
        <CvPreview data={cvData}  />
        {/* data={cvData} */}
      </div>
    </div>
  );
}

export default App;
