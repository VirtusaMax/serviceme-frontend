import AboutUs from "@/components/custom-components/about/AboutUs"
import HowItWorks from "@/section/home/HowItWorks";
import Navbar from "@/section/mainSection/Navbar"
import Register from "@/components/custom-components/register/Register"
import aboutUsData from "@/data/aboutUsData.json";
import profileData from "@/data/profileData.json";
import HeroSection from "@/section/home/HeroSection";
import Services from "@/section/home/Services";
import Footer from "@/section/mainSection/Footer";



const Home = () => {
  return (
    <div className='flex flex-col bg-white max-w-[1600px]'>
     
      <HeroSection/>
      <AboutUs data={aboutUsData} />
      <Services />
      <Register profiles={profileData} />
      <HowItWorks/>
      <Footer/>
      
   </div>
  )
}

export default Home