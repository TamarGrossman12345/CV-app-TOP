import { type ReactNode } from "react";
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

function Accordion({ title, children, icon: Icon, onClick, isLocked, displayContent }: AccordionProps) {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        <div className="accordion-title-group">
          {Icon && <Icon className="accordion-icon" />}
          <p className={`accordion-title ${isLocked ? "header-disabled" : ""}`}>{title}</p>
        </div>

        <button className={`accordion-toggle ${isLocked ? "header-disabled" : ""}`}>{displayContent ? "▲" : "▼"}</button>
      </div>
      {displayContent && <div className="accordion-content">{children} </div>}
    </div>
  );
}

export default Accordion;
