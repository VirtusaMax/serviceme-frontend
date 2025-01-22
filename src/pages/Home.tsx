import Register from "@/components/custom-components/register/Register";
import AboutUs from "@/section/home/AboutUs";
import HeroSection from "@/section/home/HeroSection";
import profileData from "@/data/profileData.json"

const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="max-w-[1700px]">
        <HeroSection />
        <AboutUs />
        <Register profiles={profileData} />
      </div>
    </div>
  );
};

export default Home;
