//import { useState } from 'react'
import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo";
import CvPreview from "./components/preview/CvPreview";
import { useState, type FormEvent } from "react";

function App() {
  const [isLocked, setIsLocked] = useState(false);
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

  const allFieldsFilled = () => {
    return Object.values(cvData).every(
      (value) => value.toString().trim() !== "",
    );
  };

  const handleChange = (field: string, value: string) => {
    setCvData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEdit = () => {
    setIsLocked(false);
  };

  const handleSubmit = (e: FormEvent) =>  {
    e.preventDefault();

    if (!allFieldsFilled()) {
      alert("Please fill in all fields!");

      return false;
    } else {
      setIsLocked(true);
      console.log("Form is complete!", cvData);
      return true
    }
  };

  return (
    <div className="app-wrapper">
      <div className="general-info-container">
        <GeneralInfo
          isLocked={isLocked}
          data={cvData}
          onUpdate={handleChange}
          onSubmit={handleSubmit}
          onEdit={handleEdit}
        />
      </div>
      {isLocked && (
        <div className="cv-preview-container">
          <CvPreview data={cvData} />
        </div>
      )}
    </div>
  );
}

export default App;
