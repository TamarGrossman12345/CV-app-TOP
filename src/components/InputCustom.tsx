import "../styles/InputCustom.css";

interface InputCustomProps {
  title: string;
  placeholder: string;
  type?: string;
  fieldType?: string;
  value: string;
  name: string;
  onChangeFunc: (name: string, value: string) => void;
}

function InputCustom({ title, placeholder, type , onChangeFunc, value, name, fieldType }: InputCustomProps) {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeFunc(name, e.target.value);
  };


  if (type === "textarea") {
    return ( 
      <div className="input-group">
        <label className="input-label">{title}</label>
        <textarea
          name={name}
          className="custom-input" 
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          ></textarea>
      </div>
    )
  }
  return (
    <div className="input-group">
      <label className="input-label">{title}</label>
      <input 
        name={name}
        className="custom-input" 
        type={fieldType}
        placeholder={placeholder} 
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputCustom;