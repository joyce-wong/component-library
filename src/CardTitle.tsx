import { FC, ReactNode } from "react"

interface CardTitleProps {
    children: ReactNode;
}

const CardTitle: FC<CardTitleProps> = ({ children }) => {
  
  
    return (
      <h3 className="card-title">
      {children}
      </h3>
    )
  };
  
  export default CardTitle; 
  