import "../styles/InputCustom.css";

interface InputCustomProps {
  title: string;
  placeholder: string;
}

function InputCustom({ title, placeholder }: InputCustomProps) {
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