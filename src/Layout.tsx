// Layout.tsx
import React, { ReactNode } from "react";
import Navbar from "./section/mainSection/Navbar";
import Footer from "./section/mainSection/Footer";

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
