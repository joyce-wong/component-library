import { FC } from "react"

interface CardIconProps {
    color?: string;
    iconImage: string;
    [key: string]: any;

}

const CardIcon: FC<CardIconProps> = ({ color, iconImage }) => {
  
  
    return (
      <div className={`card-icon-${color}`}>
          <div className={`card-icon-${iconImage}`}></div>
      </div>
    )
  };
  
  export default CardIcon; 
  