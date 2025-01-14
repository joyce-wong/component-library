import { FC, useState } from "react";

interface TooltipProps {
  color: string;
  shade: string;
  title: string;
  icon: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Tooltip: FC<TooltipProps> = ({ color, shade, title, icon, children }) => {

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    };

  return (
    <div className="tooltip-individual-container"
    >
      {isVisible && (
          <div className={`tooltip-${color}-${shade}`} >
            <div className={`tooltip-icon-${icon}-${color}-${shade}`}>
                </div>
            <div className={`tooltip-title-${shade === "bold" ? shade : color}`}>
                {title}
                </div>
                <div className={`tooltip-X-${shade === "bold" ? shade : color}`} onClick={handleClick}>
                    </div>
                    <p className={`tooltip-text-${shade === "bold" ? shade : color}`}>
                    {children}
                    </p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;