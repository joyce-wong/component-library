import { ReactNode, FC, useContext } from "react"
import { BannerContext } from "./Banner"

interface BannerDropdownProps {
    children: ReactNode;
    [key: string]: any;
  }
  
  const BannerDropdown: FC<BannerDropdownProps> = ({ children }) => {

        const { open } = useContext(BannerContext)
  
      return open ? (<div className="banner-dropdown">
        {/* {children} */}
        Hello World
        </div>
        ) : null
    };
    
    export default BannerDropdown; 