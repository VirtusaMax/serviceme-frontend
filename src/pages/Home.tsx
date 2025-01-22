import AboutUs from "@/components/custom-components/about/AboutUs"
import Navbar from "@/components/custom-components/Navbar"
import Register from "@/components/custom-components/register/Register"
import aboutUsData from "@/data/aboutUsData.json";
import profileData from "@/data/profileData.json";

const Home = () => {
  return (
    <div className='flex flex-col bg-white max-w-[1600px]'>
      <Navbar/>
      <AboutUs data={aboutUsData} />
      <Register profiles={profileData} />

      
      
   </div>
  )
}

export default Home