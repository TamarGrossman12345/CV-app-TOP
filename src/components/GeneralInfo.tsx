import Accordion from "./Accordion";
import "../styles/GeneralInfo.css";
import InputCustom from "./InputCustom";
import InputDates from "./InputDates";
import {
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  Phone,
} from "lucide-react";
import type { GeneralInfoProps } from "../types";


function GeneralInfo({ data, onUpdate }: GeneralInfoProps) {
  return (
    <div className="general-info-container ">
      <h1 className="main-title">CV GENERATOR</h1>
      <div className="cv-sections">
        <Accordion title="Profile" icon={UserRound}>
          <InputCustom
            title="Full Name"
            placeholder="Enter Full Name"
            name="name"
            value={data.name}
            onChangeFunc={onUpdate}
          />
          <InputCustom
            value={data.position}
            onChangeFunc={onUpdate}
            title="Position / Title"
            placeholder="Enter Your Position"
            name="position"
          />
          <InputCustom
            value={data.careerObjective}
            onChangeFunc={onUpdate}
            placeholder="Enter a short career objective"
            title="Career Objective"
            type="textarea"
            name="careerObjective"
          />
        </Accordion>

        <Accordion title="Education" icon={GraduationCap}>
          <InputCustom
            onChangeFunc={onUpdate}
            name="degree"
            value={data.degree}
            title="Degree"
            placeholder="Enter Degree"
          />
          <InputCustom
            onChangeFunc={onUpdate}
            name="school"
            value={data.school}
            title="School / College"
            placeholder="Enter School or College"
          />
          <InputCustom
            onChangeFunc={onUpdate}
            name="eduLocation"
            value={data.eduLocation}
            title="Location"
            placeholder="Enter Location"
          />
          <InputDates
            onChangeFunc={onUpdate}
            startName="eduStartDate"
            startValue={data.eduStartDate}
            endName="eduEndDate"
            endValue={data.eduEndDate}
          />
        </Accordion>

        <Accordion title="Experience" icon={BriefcaseBusiness}>
          <InputCustom
            onChangeFunc={onUpdate}
            name="jobTitle"
            value={data.jobTitle}
            title="Job Title"
            placeholder="Enter Job Title"
          />
          <InputCustom
            onChangeFunc={onUpdate}
            name="company"
            value={data.company}
            title="Company"
            placeholder="Enter Company"
          />
          <InputDates
            onChangeFunc={onUpdate}
            startName="expStartDate"
            startValue={data.expStartDate}
            endName="expEndDate"
            endValue={data.expEndDate}
          />
          <InputCustom
            onChangeFunc={onUpdate}
            name="expDescription"
            value={data.expDescription}
            type="textarea"
            title="Description"
            placeholder="Enter Job Description"
          />
        </Accordion>

        <Accordion title="Contact" icon={Phone}>
          <InputCustom
            fieldType="number"
            onChangeFunc={onUpdate}
            name="phone"
            value={data.phone}
            title="Phone Number"
            placeholder="Enter Your Phone Number"
          />
          <InputCustom
            onChangeFunc={onUpdate}
            fieldType="email"
            name="email"
            value={data.email}
            title="Email"
            placeholder="Enter Your Email"
          />
          <InputCustom
            onChangeFunc={onUpdate}
            name="contactLocation"
            value={data.contactLocation}
            title="Location"
            placeholder="Enter Your Email"
          />
          <InputCustom
            fieldType="url"
            onChangeFunc={onUpdate}
            name="linkedin"
            value={data.linkedin}
            title="Linkedin URL"
            placeholder="Enter Your Linkedin Profile URL"
          />
        </Accordion>
      </div>
    </div>
  );
}

export default GeneralInfo;
