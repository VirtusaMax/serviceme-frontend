import AboutUs from "@/components/custom-components/about/AboutUs"
import HowItWorks from "@/section/home/HowItWorks";
import Register from "@/components/custom-components/register/Register";
import aboutUsData from "@/data/aboutUsData.json";
import profileData from "@/data/profileData.json";
import HeroSection from "@/section/home/HeroSection";
 


const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className='w-full flex flex-col bg-white max-w-[1600px]'>
      <HeroSection/>
      <AboutUs data={aboutUsData} />
      <Register profiles={profileData} />
      <HowItWorks/>
   </div>
    </div>
  )
}

export default Home