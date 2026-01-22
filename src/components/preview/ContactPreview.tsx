import "../styles/CvPreview.css";

interface ContactData {
  phone: string;
  email: string;
  contactLocation: string;
  linkedin: string;
}

interface ContactPreviewProps {
  data: ContactData;
}

function ContactPreview({ data }: ContactPreviewProps) {
  if (!data.phone && !data.email && !data.contactLocation && !data.linkedin) {
    return null;
  }

  return (
    <div className="profile-container ">
      <h1 className="container-profile-title">Contact</h1>
      <h2>{data.phone}</h2>
      <h4>{data.email}</h4>
      <h4>{data.linkedin}</h4>
      <h4> {data.contactLocation}</h4>
    </div>
  );
}

export default ContactPreview;
