import { useState } from "react";
import InputCustom from "./InputCustom";
import "../styles/Accordion.css";

type AccordionProps = {
  title: string;
};

function Accordion({ title }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <p className="accordion-title">{title}</p>
        <button className="accordion-toggle">
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      
      {isOpen && (
        <div className="accordion-content">
          <InputCustom title="Full Name" placeholder="e.g. John Doe" />
          <InputCustom title="Email" placeholder="e.g. john@example.com" />
          {/* כאן תוסיף עוד אינפוטים בהמשך */}
        </div>
      )}
    </div>
  );
}

export default Accordion;