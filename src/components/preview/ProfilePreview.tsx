import "../styles/CvPreview.css";

interface ProfileData {
  name: string;
  position: string;
  careerObjective: string;
}

interface ProfilePreviewProps {
  data: ProfileData;
}

function ProfilePreview({ data }: ProfilePreviewProps) {
    if (!data.name && !data.position && ! data.careerObjective) {
    return null; 
  }

  return (
    <> 
      <h2>Name: {data.name}</h2>
      <h4>Position: {data.position}</h4>
      <h4>Career Objective: {data.careerObjective}</h4>
      <div className="line-sep "></div>
    </>
  );
}

export default ProfilePreview;
