// Import the Layout component
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ServiceProvider from "./pages/ServiceProvider";
import FAQPage from "./pages/FaqPage";
import ContactPage from "./pages/Contact";
import ProfilePage from "./pages/ViewProfilePage";
import AboutUs from "./components/custom-components/about/AboutUs";


function App() {
  return (
    <Layout>
       <div className="flex flex-col justify-center">
       
       <Routes>
 
         <Route path="/" element={<Home />} /> 
         <Route path="/about" element={<AboutUs data={[]}/>} />
         <Route path="/about-us" element={<AboutUs data={[]}/>} />

         <Route path="/serviceprovider" element={<ServiceProvider />} />
         {/* <Route path="/postjob" element={<PostJob />} /> */}
         <Route path="/FAQ" element={<FAQPage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/profile/:name" element={<ProfilePage />} />
       
       </Routes>
     </div>
    </Layout>
  );
}

export default App;
