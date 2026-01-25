import { useState, type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
import "../../styles/Accordion.css";

type AccordionProps = {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  displayContent?: boolean;
  onClick: () => void;
  isLocked?: boolean;
};

function Accordion({ title, children, icon: Icon, isLocked }: AccordionProps) {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  
  
    const handleOpening = () => {
      setIsAccordionOpen(!isAccordionOpen);
    };
  

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleOpening}>
        <div className="accordion-title-group">
          {Icon && <Icon className="accordion-icon" />}
          <p className={`accordion-title ${isLocked ? "header-disabled" : ""}`}>{title}</p>
        </div>

        <button className="accordion-toggle">{isAccordionOpen ? "▲" : "▼"}</button>
      </div>
      {isAccordionOpen && <div className="accordion-content">{children} </div>}
    </div>
  );
}

export default Accordion;
