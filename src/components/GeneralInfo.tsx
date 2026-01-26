import Accordion from "./common/Accordion";
import "../styles/GeneralInfo.css";
import InputCustom from "./common/InputCustom";
import InputDates from "./common/InputDates";
import type { DateField, GeneralInfoProps, InputField } from "../types";
import { Button, Box } from "@mui/material";
import { useState } from "react";
import { FORM_SECTIONS } from "../constants/generalForm";

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
        {FORM_SECTIONS.map((section) => (
          <Accordion
            key={`${section.id}-${isLocked}`}
            title={section.title}
            icon={section.icon}
            isLocked={isLocked}
            displayContent={displayContent}
            onClick={handleOpening}
          >
            {section.inputCustomFields.map((field: InputField) => (
              <InputCustom
                key={field.name}
                name={field.name}
                title={field.title}
                placeholder={field.placeholder}
                type={field.type || "text"}
                fieldType={field.fieldType || "text"}
                value={data[field.name as keyof typeof data] || ""}
                onChangeFunc={onUpdate}
                isLocked={isLocked}
              />
            ))}

            {section.inputDatesFields?.map((dateField: DateField) => (
              <InputDates
                key={dateField.startName}
                isLocked={isLocked}
                onChangeFunc={onUpdate}
                startName={dateField.startName}
                startValue={
                  data[dateField.startName as keyof typeof data] || ""
                }
                endName={dateField.endName}
                endValue={data[dateField.endName as keyof typeof data] || ""}
              />
            ))}
          </Accordion>
        ))}
      </div>

      <div className="button-container">
        <Box display="flex" justifyContent="center" gap={4} mt={4}>
          <Button
            onClick={onSubmit}
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#2721db",
              "&:hover": { backgroundColor: "#7490de" },
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
              "&:hover": { backgroundColor: "#7490de" },
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
