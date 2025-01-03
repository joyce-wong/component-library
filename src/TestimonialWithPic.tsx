import { ReactNode, FC } from "react"

interface TestimonialWithPicProps {
  children: ReactNode;
  name: string;
  title: string;
  personImage: string;
  [key: string]: any;
}

const TestimonialWithPic: FC<TestimonialWithPicProps> = ({ children, name, title, personImage }) => {
  
    return (

    <div className={"testimonial-with-pic"} >
        <div className="plate"></div>
        <img src={`${personImage}`} alt={`headshot of ${name} ${title}`} className="headshot" />
        <div className="testimonial-with-pic-container">
            <img src="/assets/OpenQuoteDesktop.png" alt="open quotation mark" className="open-quote" />
            {children}
            <div className="testimonial-with-pic-signature">
                <div className="testimonial-with-pic-name">
                {name}
                </div>
                <div className ="testimonial-with-pic-title">
                {title}
                </div>
            </div>
        </div>
    </div>

    )
  };
  
  export default TestimonialWithPic; 
  