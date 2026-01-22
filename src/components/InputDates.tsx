import "../styles/InputDates.css";

interface InputDatesProps {
  onChangeFunc: (name: string, value: string) => void;
  startName: string;
  startValue: string;
  endName: string;
  endValue: string;
}

function InputDates({
  onChangeFunc,
  startName,
  startValue,
  endName,
  endValue,
}: InputDatesProps) {
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFunc(e.target.name, e.target.value);
  };
  
  return (
    <div className="dates-row">
      <div className="single-date-group">
        <label className="input-label">Start Date</label>
        <input
          name={startName}
          value={startValue}
          onChange={handleChange}
          className="custom-input"
          type="date"
          placeholder="MM/YY"
        />
      </div>

      <div className="single-date-group">
        <label className="input-label">End Date</label>
        <input
          name={endName}
          value={endValue}
          onChange={handleChange}
          className="custom-input"
          type="date"
          placeholder="MM/YY"
        />
      </div>
    </div>
  );
}

export default InputDates;
