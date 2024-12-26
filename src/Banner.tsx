import { ReactNode, FC, useState, createContext } from "react"
import classnames from "classnames"

interface BannerContextType {
  open: boolean;
  toggle: () => void;
}

const BannerContext = createContext()

interface BannerProps {
  children: ReactNode;
  className?: string;
  shape: string;
  color?: string;
  [key: string]: any;
}

const Banner: FC<BannerProps> = ({children, className, shape, color, ...rest}) => {
  

  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen(prevOpen => !prevOpen)
  }
  const shapeClass = shape && `banner-${shape}`
  const colorClass = color && `banner-${color}`
  const allClasses = classnames(shapeClass, colorClass, className)
    return (
    <BannerContext.Provider value={{open, toggle}}>
    <div className={allClasses} {...rest}>
      {children}
      </div>
      </BannerContext.Provider>);
  };
  
  export default Banner; 

  export { BannerContext }
  