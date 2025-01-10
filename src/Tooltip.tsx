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
    <div
    >
      {isVisible && (
          <div className={`tooltip-${color}-${shade}`} >
            <div className={`tooltip-icon-${icon}-${color}-${shade}`}>
                </div>
            <div className="tooltip-title">
                {title}
                </div>
                <div className={`tooltip-X-${color}-${shade}`} onClick={handleClick}>
                    </div>
                    <p className="tooltip-text">
                    {children}
                    </p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;