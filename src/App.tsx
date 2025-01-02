import './App.css'
import Badge from "./Badge"
import Banner from "./Banner"
import BannerButton from "./BannerButton"
import BannerDropdown from "./BannerDropdown"
import Card from "./Card"
import CardTitle from './CardTitle'
import CardIcon from './CardIcon'
import TestimonialNoPic from './TestimonialNoPic'

function App() {

  return (
    <>
      <h1>Badges</h1>
      <div className="general-badges-container">
      <h2>Square</h2>
      <div className="badges-container">
      <Badge shape="square">Badge</Badge>
      <Badge shape="square" color="green">Badge</Badge>
      <Badge shape="square" color="yellow">Badge</Badge>
      <Badge shape="square" color="red">Badge</Badge>
      <Badge shape="square" color="blue">Badge</Badge>
      <Badge shape="square" color="indigo">Badge</Badge>
      <Badge shape="square" color="purple">Badge</Badge>
      <Badge shape="square" color="pink">Badge</Badge>
      </div>
      <h2>Pill</h2>
      <div className="badges-container">
      <Badge shape="pill">Badge</Badge>
      <Badge shape="pill" color="green">Badge</Badge>
      <Badge shape="pill" color="yellow">Badge</Badge>
      <Badge shape="pill" color="red">Badge</Badge>
      <Badge shape="pill" color="blue">Badge</Badge>
      <Badge shape="pill" color="indigo">Badge</Badge>
      <Badge shape="pill" color="purple">Badge</Badge>
      <Badge shape="pill" color="pink">Badge</Badge>
      </div>
      </div>
      <h1>Banners</h1>
      <div className="banners-container">
      <h2>Success</h2>
      <Banner color="green">
        <BannerButton color="green" iconImage="check">Congratulations!</BannerButton>
        <BannerDropdown>    
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </BannerDropdown>
      </Banner>
      <h2>Warning</h2>
      <Banner color="yellow">
        <BannerButton color="yellow" iconImage="exclamation">Attention</BannerButton>
        <BannerDropdown>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </BannerDropdown>
      </Banner>
      <h2>Error</h2>
      <Banner color="red">
        <BannerButton color="red" iconImage="xcircle">There is a problem with your application</BannerButton>
        <BannerDropdown>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum. 
        </BannerDropdown>
      </Banner>
      <h2>Neutral</h2>
      <Banner color="blue">
        <BannerButton color="blue" iconImage="information">Update available</BannerButton>
        <BannerDropdown>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </BannerDropdown>
      </Banner>
      </div>
      <h1>Card</h1>
      <div className="card-container">
      <Card>
        <CardIcon color="blue" iconImage="cloud" />
        <CardTitle>
          Easy Deployment
        </CardTitle>
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
      </Card>
    </div>
      <h1>Testimonials</h1>
      <div className="testimonial-container">
      <TestimonialNoPic name="May Andersons" title="Workcation, CTO" brand="workcation" logoImage="\assets\WorkcationLogoDesktop.png">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
      </TestimonialNoPic>
      </div>
    </>
  )
}

export default App
