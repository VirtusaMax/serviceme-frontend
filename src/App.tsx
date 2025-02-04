// Import the Layout component
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ServiceProvider from "./pages/ServiceProvider";
import FAQPage from "./pages/FaqPage";
import ContactPage from "./pages/Contact";
import AboutUsPage from "./pages/AboutUs";

function App() {
  return (
    <Layout>
      <div className="flex flex-col justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServiceProvider />} />
          {/* <Route path="/postjob" element={<PostJob />} /> */}
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;