import "../../styles/CvPreview.css";

interface ExperienceData {
  jobTitle: string;
  company: string;
  expDescription: string;
  expStartDate: string;
  expEndDate: string;
}

interface ExperiencePreviewProps {
  data: ExperienceData;
}

function ExperiencePreview({ data }: ExperiencePreviewProps) {
  if (
    !data.jobTitle &&
    !data.company &&
    !data.expDescription &&
    !data.expStartDate &&
    !data.expEndDate
  ) {
    return null;
  }

  return (
    <div className="profile-container ">
      <h1 className="container-profile-title">Education</h1>
      <h2>{data.jobTitle}</h2>
      <h4>{data.company}</h4>
      <h5>
        {data.expStartDate} - {data.expEndDate}
      </h5>
      <h4> {data.expDescription}</h4>
    </div>
  );
}

export default ExperiencePreview;
