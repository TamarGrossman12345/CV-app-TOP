import "../styles/CvPreview.css"; 
import ProfilePreview from "./ProfilePreview";


function CvPreview({data}) { 


    return (
    <div className="CV-wrapper">
        <ProfilePreview data={data}></ProfilePreview>


    </div>
    )
}

export default CvPreview