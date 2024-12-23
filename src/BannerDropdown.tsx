import { ReactNode, FC, useContext } from "react"
import { BannerContext } from "./Banner"

interface BannerDropdownProps {
    children: ReactNode;
    [key: string]: any;
  }
  
  const BannerDropdown: FC<BannerDropdownProps> = ({ children }) => {

        const { open } = useContext(BannerContext)

        if(!useContext(BannerContext)){
            throw new Error("BannerDropdown must be used within a Banner Provider")
        }
  
  
      return open ? (<div className="banner-dropdown">
        {children}
        </div>
        ) : null
    };
    
    export default BannerDropdown; 