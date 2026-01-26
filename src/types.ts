import type { LucideIcon } from "lucide-react";
import type { FormEvent } from "react";

export type GeneralInfoData = {
  name: string;
  position: string;
  careerObjective: string;
  // Education
  degree: string;
  school: string;
  eduLocation: string;
  eduStartDate: string;
  eduEndDate: string;
  // Experience
  jobTitle: string;
  company: string;
  expDescription: string;
  expStartDate: string;
  expEndDate: string;
  // Contact
  phone: string;
  email: string;
  contactLocation: string;
  linkedin: string;
}

export type GeneralInfoProps = {
  data: GeneralInfoData;
  onUpdate: (field: string, value: string) => void;
  onSubmit?: (e: FormEvent) => void;
  isLocked?: boolean;
  onEdit?: (e: FormEvent) => void;
}

export type CvData = {
  data: GeneralInfoData;
  onUpdate?: (field: string, value: string) => void;
  onSubmit?: (e: FormEvent) => void;
  isLocked?: boolean;
}

export type InputField= {
  name: string;
  title: string;
  placeholder: string;
  type?: "text" | "textarea"; // אופציונלי, ברירת מחדל תהיה text
  fieldType?: "email" | "tel" | "url" | "text"; // אופציונלי
}

export type DateField ={
  startName: string;
  endName: string;
}

export type FormSection ={
  id: string;
  title: string;
  icon: LucideIcon;
  inputCustomFields: InputField[];
  inputDatesFields?: DateField[];
}