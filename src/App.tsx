// Import the Layout component
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ServiceProvider from "./pages/ServiceProvider";

function App() {
  return (
    <Layout>
       <div className="flex flex-col justify-center">
       
       <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/serviceprovider" element={<ServiceProvider />} />
       </Routes>
     </div>
    </Layout>
  );
}

export default App;
