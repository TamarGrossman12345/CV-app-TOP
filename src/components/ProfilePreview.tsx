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
    <div className="profile-container">
      <h1 className="container-profile-title">Profile</h1>

      <h2>Name: {data.name}</h2>
      <h3>Position: {data.position}</h3>
      <h3>Career Objective: {data.careerObjective}</h3>
    </div>
  );
}

export default ProfilePreview;
