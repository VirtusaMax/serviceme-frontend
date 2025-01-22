import AboutUs from "@/section/home/AboutUs";
import HeroSection from "@/section/home/HeroSection";

const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="max-w-[1700px]">
        <HeroSection />
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
