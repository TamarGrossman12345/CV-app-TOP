import Accordion from "./common/Accordion";
import "../styles/GeneralInfo.css";
import InputCustom from "./common/InputCustom";
import InputDates from "./common/InputDates";
import {
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  Phone,
} from "lucide-react";
import type { GeneralInfoProps } from "../types";
import { Button, Box } from "@mui/material";
import { useState } from "react";

function GeneralInfo({
  data,
  onUpdate,
  onSubmit,
  isLocked,
  onEdit,
}: GeneralInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const displayContent = isOpen && !isLocked;

  const handleOpening = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="general-info-container">
      <h1 className="main-title">CV GENERATOR</h1>

      <div className="cv-sections">
        <Accordion
          isLocked={isLocked}
          displayContent={displayContent}
          onClick={handleOpening}
          title="Profile"
          icon={UserRound}
        >
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

        <Accordion
          isLocked={isLocked}
          displayContent={displayContent}
          onClick={handleOpening}
          title="Education"
          icon={GraduationCap}
        >
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

        <Accordion
          isLocked={isLocked}
          displayContent={displayContent}
          onClick={handleOpening}
          title="Experience"
          icon={BriefcaseBusiness}
        >
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

        <Accordion
          isLocked={isLocked}
          displayContent={displayContent}
          onClick={handleOpening}
          title="Contact"
          icon={Phone}
        >
          <InputCustom
            isLocked={isLocked}
            fieldType="tel"
            onChangeFunc={onUpdate}
            name="phone"
            value={data.phone}
            title="Phone Number"
            placeholder="Enter Your Phone Number"
          />
          <InputCustom
            isLocked={isLocked}
            onChangeFunc={onUpdate}
            fieldType="email"
            name="email"
            value={data.email}
            title="Email"
            placeholder="Enter Your Email"
          />
          <InputCustom
            isLocked={isLocked}
            onChangeFunc={onUpdate}
            name="contactLocation"
            value={data.contactLocation}
            title="Location"
            placeholder="Enter Your Location"
          />
          <InputCustom
            isLocked={isLocked}
            fieldType="url"
            onChangeFunc={onUpdate}
            name="linkedin"
            value={data.linkedin}
            title="Linkedin URL"
            placeholder="Enter Your Linkedin Profile URL"
          />
        </Accordion>
      </div>
      <div className="button-container">
        <Box display="flex" justifyContent="center" gap={4}>
          <Button
            onClick={onSubmit}
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#2721db",
              "&:hover": {
                backgroundColor: "#7490de",
              },
            }}
          >
            SAVE
          </Button>
          <Button
            onClick={onEdit}
            variant="contained"
            type="button"
            sx={{
              backgroundColor: "#2721db",
              "&:hover": {
                backgroundColor: "#7490de",
              },
            }}
          >
            EDIT
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default GeneralInfo;
