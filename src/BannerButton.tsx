import { ReactNode, FC, useContext } from "react"
import { BannerContext } from "./Banner"

interface BannerButtonProps {
    children: ReactNode;
    [key: string]: any;
  }
  
  const BannerButton: FC<BannerButtonProps> = ({ children }) => {

        const { toggle } = useContext(BannerContext)

        if(!useContext(BannerContext)){
            throw new Error("BannerButton must be used within a Banner Provider")
        }
  
      return (<button onClick={toggle}>
        {children}
        </button>);
    };
    
    export default BannerButton; 