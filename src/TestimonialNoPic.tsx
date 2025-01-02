import { ReactNode, FC } from "react"

interface TestimonialNoPicProps {
  children: ReactNode;
  name: string;
  title: string;
  brand: string;
  [key: string]: any;
}

const TestimonialNoPic: FC<TestimonialNoPicProps> = ({ children, name, title, brand }) => {
  
    return (
    
    <div className={"testimonial-no-pic"} >
        <div className="testimonial-no-pic-container">
            <img src={`\assets\\${brand}LogoDesktop.png`} alt={`${brand} logo`} className={`${brand}-logo-desktop`} />
            {children}
            <div className="testimonial-no-pic-signature">
                <div className="testimonial-no-pic-name">
                {name}
                </div>
                <img src="\assets\Divider.png" alt="divider" className="divider-image" />
                <div className ="testimonial-no-pic-title">
                {title}
                </div>
            </div>
        </div>
        <div className="dot-pattern">
        </div>
    </div>
    )
  };
  
  export default TestimonialNoPic; 
  