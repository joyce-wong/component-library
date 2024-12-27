import { ReactNode, FC, useContext } from "react"
import { BannerContext } from "./Banner"

interface BannerButtonProps {
    children: ReactNode;
    color: string;
    iconImage: string;
    [key: string]: any;
  }
  
  const BannerButton: FC<BannerButtonProps> = ({ children, color, iconImage}) => {

        const { toggle } = useContext(BannerContext)

        if(!useContext(BannerContext)){
            throw new Error("BannerButton must be used within a Banner Provider")
        }
  
      return (<button className={`banner-button-${color}`} onClick={toggle} >
        <div className={`banner-icon-${iconImage}`}></div>​
        {children}
        </button>);
    };
    
    export default BannerButton; 