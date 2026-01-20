import "../styles/InputCustom.css";

interface InputCustomProps {
  title: string;
  placeholder: string;
  type?: string;
}

function InputCustom({ title, placeholder, type }: InputCustomProps) {

  if (type === "textarea") {
    return ( 
      <div className="input-group">
        <label className="input-label">{title}</label>
        <textarea
        className="custom-input" 
        placeholder={placeholder}
        ></textarea>
      </div>
    )
  }
  return (
    <div className="input-group">
      <label className="input-label">{title}</label>
      <input 
        className="custom-input" 
        type="text"
        placeholder={placeholder} 
      />
    </div>
  );
}

export default InputCustom;