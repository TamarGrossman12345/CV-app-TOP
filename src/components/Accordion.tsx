import { useState, type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
import "../styles/Accordion.css";

type AccordionProps = {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
};

function Accordion({ title, children, icon: Icon }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion-title-group">
          {Icon && <Icon className="accordion-icon" />}
          <p className="accordion-title">{title}</p>
        </div>

        <button className="accordion-toggle">{isOpen ? "▲" : "▼"}</button>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;
