import aboutUsData from "@/data/aboutUsData.json";
import AboutUs from "@/components/custom-components/about/AboutUs"

const AboutUsPage = () => {
  return (
    <div className="flex w-full justify-center items-center">
        <AboutUs data={aboutUsData} />
    </div>
  )
}

export default AboutUsPage