import { ReactNode, FC } from "react"

interface TestimonialNoPicProps {
  children: ReactNode;
  [key: string]: any;
}

const TestimonialNoPic: FC<TestimonialNoPicProps> = ({ children }) => {
  
    return (
    
    <div className={"testimonial-no-pic"} >
        <div className="testimonial-no-pic-container">
            <img src="\assets\WorkcationLogoDesktop.png" alt="workcation logo" className="workcation-logo-desktop" />
            {children}
            <div className="testimonial-no-pic-signature">
                <div className="testimonial-no-pic-name">
                May Andersons
                </div>
                <img src="\assets\Divider.png" alt="divider" className="divider-image" />
                <div className ="testimonial-no-pic-title">
                Workcation CTO
                </div>
            </div>
        </div>
        <div className="dot-pattern">
        </div>
    </div>
    )
  };
  
  export default TestimonialNoPic; 
  