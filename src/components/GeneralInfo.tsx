import Accordion from "./Accordion";
import "../styles/GeneralInfo.css";
import InputCustom from "./InputCustom";
import InputDates from "./InputDates";
import { UserRound , GraduationCap, BriefcaseBusiness, Phone} from "lucide-react";

function GeneralInfo() {
  return (
    <div className="general-info-container ">
      <h1 className="main-title">CV GENERATOR</h1>
      <div className="cv-sections">
        <Accordion title="Profile" icon={UserRound}>
          <InputCustom title="Full Name" placeholder="Enter Full Name" />
          <InputCustom
            title="Position / Title"
            placeholder="Enter Your Position"
          />
          <InputCustom
            placeholder="Enter a short career objective"
            title="Career Objective"
            type="textarea"
          />
        </Accordion>

        <Accordion title="Education" icon={GraduationCap}>
          <InputCustom title="Degree" placeholder="Enter Degree" />
          <InputCustom
            title="School / College"
            placeholder="Enter School or College"
          />
          <InputCustom title="Location" placeholder="Enter Location" />
          <InputDates />
        </Accordion>

        <Accordion title="Experience" icon={BriefcaseBusiness}>
          <InputCustom title="Job Title" placeholder="Enter Job Title" />
          <InputCustom title="Company" placeholder="Enter Company" />
          <InputDates />
          <InputCustom type="textarea" title="Description" placeholder="Enter Job Description" />
        </Accordion>

        <Accordion title="Contact" icon={Phone}>
          <InputCustom title="Phone Number" placeholder="Enter Your Phone Number" />
          <InputCustom title="Email" placeholder="Enter Your Email" />
          <InputCustom title="Location" placeholder="Enter Your Email" />
          <InputCustom title="Linkedin URL" placeholder="Enter Your Linkedin Profile URL" />
        </Accordion>
      </div>
    </div>
  );
}

export default GeneralInfo;
