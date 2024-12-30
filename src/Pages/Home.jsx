import FeatureSection from "./Components/FeatureSection"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import NavBar from "./Components/NavBar"
import { useAuth0 } from "@auth0/auth0-react"
import ReactLoading from 'react-loading';
const Home = () => {
  const {isLoading} = useAuth0()
  if(isLoading){
    return(
      <>
      {/* <div className="relative top-20 text-3xl w-screen h-screen flex justify-center items-center">Loading...</div> */}
      <div className="w-screen h-screen relative top-20 text-3xl flex justify-center items-center ">
        <ReactLoading type="balls" color="black" className=" w-20 h-20" />
      </div>
      </>
    )
  }
  return (
    <>
    <NavBar/>
    <HeroSection title="Shopi"/>
    <FeatureSection/>
    <Footer/>
    </>
  )
}

export default Home