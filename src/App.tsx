// Import the Layout component
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
       <div className="flex flex-col justify-center">
       
       <Routes>
         <Route path="/" element={<Home />} />   
       </Routes>
     </div>
    </Layout>
  );
}

export default App;
