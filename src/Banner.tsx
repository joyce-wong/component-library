import { ReactNode, FC, useState, createContext } from "react"
import classnames from "classnames"

interface BannerContext {
  open: boolean;
  toggle: () => void;
}

const BannerContext = createContext<BannerContext>({
  open: false,
  toggle: () => {},
})

interface BannerProps {
  children: ReactNode;
  className?: string;
  color?: string;
  [key: string]: any;
}

const Banner: FC<BannerProps> = ({children, className, color, ...rest}) => {
  

  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen(prevOpen => !prevOpen)
  }

  const colorClass = color && `banner-${color}`
  const allClasses = classnames(colorClass, className)
    return (
    <BannerContext.Provider value={{open, toggle}}>
    <div className={allClasses} {...rest}>
      {children}
      </div>
      </BannerContext.Provider>);
  };
  
  export default Banner; 

  export { BannerContext }
  