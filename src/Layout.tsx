// Layout.tsx
import React, { ReactNode } from "react";
import Navbar from "./components/custom-components/Navbar";
import Footer from "./components/custom-components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
