// Layout.tsx
import React, { ReactNode } from "react";
import Navbar from "./section/mainSection/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    
    </div>
  );
};

export default Layout;
