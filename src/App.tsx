//import { useState } from 'react'
import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo";
import CvPreview from "./components/preview/CvPreview";
import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";

function App() {
  const [isLocked, setIsLocked] = useState(false);
  const [gifData, setGifData] = useState<any | null>(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.giphy.com/v1/gifs/translate?api_key=6HhzNZRANElKsCCxCN5V6ckTiNDAXh2U&s=dogs",
        );

        setGifData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("משהו השתבש...", error);
      }
    };

    fetchData();
  }, []);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!allFieldsFilled()) {
      alert("Please fill in all fields!");

      return false;
    } else {
      setIsLocked(true);
      console.log("Form is complete!", cvData);
      return true;
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
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {!isLocked && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {gifData ? (
              <img
                src={gifData.images.original.url}
                alt={gifData.title}
                style={{ maxWidth: "300px", borderRadius: "8px", height: "300px", }}
              />
            ) : (
              <p>טוען גיף...</p>
            )}
            <p>Finish already!!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
