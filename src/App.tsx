import './App.css'
import Badge from "./Badge"
import Banner from "./Banner"
import BannerButton from "./BannerButton"
import BannerDropdown from "./BannerDropdown"

function App() {

  return (
    <>
      <h1>Badges</h1>
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
      <h1>Banners</h1>
      <Banner shape="square" color="red">
        <BannerButton>Banner Button</BannerButton>
        <BannerDropdown>
          Banner Dropdown
        </BannerDropdown>
      </Banner>
      <Banner shape="pill" color="green">
        <BannerButton>Banner Button</BannerButton>
        <BannerDropdown>
          Banner Dropdown
        </BannerDropdown>
      </Banner>
    </>
  )
}

export default App
