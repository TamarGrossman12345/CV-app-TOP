import "../styles/CvPreview.css"; 
import type { GeneralInfoProps } from "../types";
import ContactPreview from "./ContactPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import ProfilePreview from "./ProfilePreview";


function CvPreview({data} : GeneralInfoProps) { 


    return (
    <div className="CV-wrapper">
        <ProfilePreview data={data}></ProfilePreview>
        <EducationPreview data={data} />
        <ExperiencePreview data={data} />
        <ContactPreview data={data} />


    </div>
    )
}

export default CvPreview