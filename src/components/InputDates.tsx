import "../styles/InputDates.css"; 

function InputDates() {
  return (
    <div className="dates-row">
      
      <div className="single-date-group">
        <label className="input-label">Start Date</label>
        <input className="custom-input" type="text" placeholder="MM/YY" />
      </div>


      <div className="single-date-group">
        <label className="input-label">End Date</label>
        <input className="custom-input" type="text" placeholder="MM/YY" />
      </div>

    </div>
  );
}

export default InputDates;