// Import the Layout component
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ServiceProvider from "./pages/ServiceProvider";
import PostJob from "./pages/post_job";
import FAQPage from "./pages/FaqPage";
import ContactPage from "./pages/Contact";


function App() {
  return (
    <Layout>
       <div className="flex flex-col justify-center">
       
       <Routes>
 
         <Route path="/" element={<Home />} /> 
         <Route path="/serviceprovider" element={<ServiceProvider />} />
         <Route path="/postjob" element={<PostJob />} />
         <Route path="/FAQ" element={<FAQPage />} />
         <Route path="/contact" element={<ContactPage />} />

 
       </Routes>
     </div>
    </Layout>
  );
}

export default App;
