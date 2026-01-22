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
  onUpdate: (field: string, value: string) => void ;
}
