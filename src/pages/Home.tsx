import AboutUs from "@/components/custom-components/about/AboutUs"
import HowItWorks from "@/components/custom-components/HowItWorks";
import Navbar from "@/components/custom-components/Navbar"
import Register from "@/components/custom-components/register/Register"
import aboutUsData from "@/data/aboutUsData.json";
import profileData from "@/data/profileData.json";
import HeroSection from "@/section/home/HeroSection";

const Home = () => {
  return (
    <div className='flex flex-col bg-white max-w-[1600px]'>
      <Navbar/>
      <HeroSection/>
      <AboutUs data={aboutUsData} />
      <Register profiles={profileData} />
      <HowItWorks/>
      


      
      
   </div>
  )
}

export default Home