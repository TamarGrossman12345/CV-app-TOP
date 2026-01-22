import "../../styles/CvPreview.css";

interface EducationData {
  degree: string;
  school: string;
  eduLocation: string;
  eduStartDate: string;
  eduEndDate: string;
}

interface EducationPreviewProps {
  data: EducationData;
}

function EducationPreview({ data }: EducationPreviewProps) {
  if (
    !data.degree &&
    !data.school &&
    !data.eduLocation &&
    !data.eduLocation &&
    !data.eduEndDate &&
    !data.eduStartDate
  ) {
    return null;
  }

  return (
    <div className="profile-container ">
        <h1 className="container-profile-title">Education</h1>
      <h2>Degree: {data.degree}</h2>
      <h4>School: {data.school}</h4>
      <h4>Location: {data.eduLocation}</h4>
      <h5> {data.eduStartDate}  - {data.eduEndDate}</h5>
    </div>
  );
}

export default EducationPreview;
