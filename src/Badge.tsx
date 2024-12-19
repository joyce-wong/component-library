import { ReactNode, FC } from "react"
import classnames from "classnames"

interface BadgeProps {
  children: ReactNode;
  className?: string;
  shape: string;
  color?: string;
  [key: string]: any;
}

const Badge: FC<BadgeProps> = ({children, className, shape, color, ...rest}) => {
  const shapeClass = shape && `button-${shape}`
  const colorClass = color && `button-${color}`
  const allClasses = classnames(shapeClass, colorClass, className)
    return (<button className={allClasses} {...rest}>
      {children}
      </button>);
  };
  
  export default Badge; 
  