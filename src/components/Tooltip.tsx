import { ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
  children: ReactNode; 
  text: string;
}

const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;