import Accordion from "./Accordion";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  return (
    <div className="general-info-container">
      <h1 className="main-title">CV GENERATOR</h1>
      <div className="cv-sections">
        <Accordion title="General Information" />
        <Accordion title="Educational Experience" />
        <Accordion title="Practical Experience" />
      </div>
    </div>
  );
}

export default GeneralInfo;